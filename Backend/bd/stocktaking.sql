-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2024 at 01:36 AM
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
  `saleDate` datetime DEFAULT NULL,
  `amount` int(11) NOT NULL DEFAULT 1,
  `id_Admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`id`, `sparePart`, `value`, `idUser`, `date`, `saleDate`, `amount`, `id_Admin`) VALUES
(1, 4, 15000, 1, '2024-07-01 11:46:11', '2024-07-10 11:46:11', 1, 1),
(3, 4, 17500, 19, '2024-07-19 00:00:00', '2024-07-31 00:00:00', 2, 18),
(4, 4, 16000, 20, '2024-07-01 11:46:11', '2024-07-10 11:46:11', 15, 18),
(5, 4, 17000, 18, '2024-07-01 16:46:11', '2024-07-10 16:46:11', 1, 18);

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

--
-- Dumping data for table `spareparts`
--

INSERT INTO `spareparts` (`id`, `image`, `sparePart`, `brand`, `code`) VALUES
(4, 'llave.png', 'llave', 'mazda', 158),
(9, 'llave2.png', 'llave', 'renault', 123456);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(22) NOT NULL,
  `lastName` varchar(22) DEFAULT NULL,
  `pfp` varchar(22) DEFAULT NULL,
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

INSERT INTO `users` (`id`, `name`, `lastName`,`pfp`, `email`, `password`, `username`, `age`, `staff`, `company`, `address`, `phone`, `city`, `country`, `userInformation`, `postalCode`, `aboutMe`, `id_admin`) VALUES
(1, 'emanuel esteban', 'restrepo', 'admin', 'e05072003@gmail.com', '$2b$10$/ZVcbLPSiVKSMj/', 'nabetse05', 21, 'desarrolador de soft', 'Siscontri Software', 'carrera #5 - 22', '3116686210', 'popayan', 'colombia', 'quiero crecer cada dia mas en esta empresa', 1456, 'ill be one the greatest', NULL),
(2, 'steiner', 'herrera', 'admin', 'steinerherrera@gmail.c', '$2b$10$9QqzmhR/S.0mZXA', 'juegosSteiner', 18, 'empleado', 'Amazon', 'carrera #6 - 22', '302 6226935', 'cali', 'colombia', 'Me gusta la sandia', 6541, 'hello word im steiner', NULL),
(16, 'miguel', 'pinto', 'employee', 'pinto@gmail.com', '123456', 'pinto', 18, 'gerente financiero', 'webcol', 'carerra 4 #13-15', '325012145', 'cali', 'Colombia', 'te encargaras de manejar las finanzas y ser un excelente trabajador', 5623256, 'excelente persona, muy tranquilo y buen compañero', 1),
(18, 'fernando', NULL, 'employee', 'fernando@gmail.com', '$2b$10$TNYv5zxHt59C8Yu', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(19, '1111479211', 'herrera', 'employee', 'pinto@gmail.com', '123456', 'pinto', 18, 'empacador', 'tubos y maderas', '3116686210', '3116686210', 'Piendamó', 'Colombia', 'es bueno', 190530, 'execlente', 18),
(20, '1111479211', 'zurdo', 'employee', 'zurdo@gmail.com', '', 'zurdo', 18, '1111479211', 'miguel', '3116686210', '3116686210', 'Piendamó', 'Colombia', 'ass', 190530, 'ass', 18);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inventory_spareparts_fk` (`sparePart`),
  ADD KEY `inventory_users_FK` (`idUser`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `spareparts`
--
ALTER TABLE `spareparts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_spareparts_fk` FOREIGN KEY (`sparePart`) REFERENCES `spareparts` (`id`),
  ADD CONSTRAINT `inventory_users_FK` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
