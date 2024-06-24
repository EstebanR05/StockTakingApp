-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2024 at 11:30 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stocktaking`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(22) NOT NULL,
  `lastName` varchar(22) DEFAULT NULL,
  `email` varchar(22) NOT NULL,
  `password` varchar(22) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `profession` varchar(20) DEFAULT NULL,
  `university` varchar(20) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `postalCode` int(11) DEFAULT NULL,
  `aboutMe` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `password`, `username`, `age`, `profession`, `university`, `address`, `phone`, `city`, `country`, `postalCode`, `aboutMe`) VALUES
(1, 'emanuel esteban', 'restrepo', 'e05072003@gmail.com', '$2b$10$/ZVcbLPSiVKSMj/', 'nabetse05', 21, 'ing sistemas', 'unicomfacauca', 'carrera #5 - 22', '3116686210', 'popayan', 'colombia', 1456, 'ill be one the greatest'),
(2, 'steiner', 'herrera', 'steinerherrera@gmail.c', '$2b$10$9QqzmhR/S.0mZXA', 'juegosSteiner', 17, 'ing sistemas', 'autonoma', 'carrera #6 - 22', '302 6226935', 'cali', 'colombia', 6541, 'hello word im steiner');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
