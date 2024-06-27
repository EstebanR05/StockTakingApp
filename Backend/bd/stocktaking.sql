-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2024 at 10:56 PM
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
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `sparePart` int(11) DEFAULT NULL,
  `value` decimal(10,0) DEFAULT NULL,
  `idUser` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `saleDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Table structure for table `spareparts`
--

CREATE TABLE `spareparts` (
  `id` int(11) NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `sparePart` varchar(200) DEFAULT NULL,
  `brand` varchar(200) DEFAULT NULL,
  `code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

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
  `staff` varchar(20) DEFAULT NULL,
  `company` varchar(20) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `userInformation` varchar(120) DEFAULT NULL,
  `postalCode` int(11) DEFAULT NULL,
  `aboutMe` varchar(200) DEFAULT NULL,
  `id_admin` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `password`, `username`, `age`, `staff`, `company`, `address`, `phone`, `city`, `country`, `userInformation`, `postalCode`, `aboutMe`, `id_admin`) VALUES
(1, 'emanuel esteban', 'restrepo', 'e05072003@gmail.com', '$2b$10$/ZVcbLPSiVKSMj/', 'nabetse05', 21, 'desarrolador de soft', 'Siscontri Software', 'carrera #5 - 22', '3116686210', 'popayan', 'colombia', 'quiero crecer cada dia mas en esta empresa', 1456, 'ill be one the greatest', NULL),
(2, 'steiner', 'herrera', 'steinerherrera@gmail.c', '$2b$10$9QqzmhR/S.0mZXA', 'juegosSteiner', 18, 'empleado', 'Amazon', 'carrera #6 - 22', '302 6226935', 'cali', 'colombia', 'Me gusta la sandia', 6541, 'hello word im steiner', NULL),
(15, 'ariana', 'Andrade', 'Andrade@gmail.com', '$2b$10$/ZVcbLPSiVKSMj/', 'arianitaHermosa', 16, 'asistente administra', 'asistente', 'carrera #5 - 22', '310 4295482', 'popayan', 'colombia', 'quiero crecer cada dia mas en esta empresa', 1456, 'persona con excelente carisma', 1),
(16, 'miguel', 'pinto', 'pinto@gmail.com', '123456', 'pinto', 18, 'gerente financiero', 'webcol', 'carerra 4 #13-15', '325012145', 'cali', 'Colombia', 'te encargaras de manejar las finanzas y ser un excelente trabajador', 5623256, 'excelente persona, muy tranquilo y buen compañero', 1),
(17, 'alex', 'zurdo', 'zurdo@gmail.com', '123456', 'zurdo', 21, 'mecanico', 'webcol', 'carerra 4 #15-16', '251455142504', 'Piendamó', 'Colombia', 'se encargara de cambiar llanatas', 52152, 'excelente en su trabajo, no se queda con lo primero', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inventory_spareparts_fk` (`sparePart`);

--
-- Indexes for table `spareparts`
--
ALTER TABLE `spareparts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `spareparts`
--
ALTER TABLE `spareparts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_spareparts_fk` FOREIGN KEY (`sparePart`) REFERENCES `spareparts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
