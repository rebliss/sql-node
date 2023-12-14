-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2023 at 01:18 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `order_no` varchar(255) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `total` decimal(10,0) NOT NULL,
  `status` enum('Pending','Completed','Shipped','Cancelled') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_name`, `item_name`, `order_no`, `order_date`, `total`, `status`) VALUES
(56, 'krishna1', 'book1', 'OrderNo2023511014826', '2023-05-10 20:18:26', '122', 'Completed'),
(57, 'krishna', 'tomato', 'OrderNo2023511044649', '2023-05-10 23:16:49', '25', 'Cancelled');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, '0', 'krish22nadgmail.com', '12345'),
(2, 'krishna', 'krisna@gmail.com', '12345'),
(3, 'krishna', 'krisna@gmail.com', '12345'),
(4, '0', 'krishna13@gmail.com', '12345'),
(5, '0', 'krishna1344@gmail.com', '123454444'),
(6, 'krishna dfdfd', 'krishna111@gmail.com', '12345'),
(7, 'krishna bhardwaj', 'krishna1111@gmail.com', '12345'),
(8, 'krishna bhardwaj', 'krishna1111f@gmail.com', '$2b$10$ffbs403wD/402wlVPUMGou8LkrUJdCSnBxVgGwEsFv9nZ/vL.PBKa'),
(9, 'eemail.krishna@gmail.com', 'eemail.krishna@gmail.com', '$2b$10$/b74uhINyLONANh0.rXda.k7D0hrqDW11PEn8cb0B32No4St5zASW'),
(10, 'devilarehere9', 'devilarehere9@gmail.com', '$2b$10$hnDvegDnTHLcxc/xtc3AU.VaoXQHd5xHxJk6mXLhE4Hl0.b7IR1Vm'),
(11, 'krishna bhardwaj', 'krisghna1111f@gmail.com', '$2b$10$aVijGAdD21KI26k7F3Nc7.ZsbDq6klO251tXWcUDO3DGBhMkFVJ8C'),
(12, 'eeemail.krishna', 'eeemail.krishna@gmail.com', '$2b$10$emTB.WFnmMDVLLatEaA9C.z3B9WOh8WnHeQv5ifSvR4ezdzPi3sWe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
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
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
