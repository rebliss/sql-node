-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2023 at 02:55 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

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
  `order_no` varchar(255) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `total` decimal(10,0) NOT NULL,
  `status` enum('Pending','Completed','Shipped','Cancelled') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_name`, `order_no`, `order_date`, `total`, `status`) VALUES
(2, 'krishna', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(3, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(4, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(5, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(6, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(7, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(8, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(9, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(10, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(11, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(14, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(15, 'krishna', '12121212', '2023-05-09 06:21:36', 12555, ''),
(16, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(17, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(18, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(19, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(20, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(21, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(22, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(23, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(24, 'krishna111', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(25, 'krishna6666', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(26, 'krishna6666', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(27, 'krishna6666', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(28, 'krishna6666', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(29, 'krishna6666', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(30, 'krishna6666', '12121212', '2023-05-09 06:21:36', 12555, 'Pending'),
(31, 'krishna6666', '12121212', '2023-05-09 12:36:07', 12555, 'Pending'),
(32, 'krishna6666', '12121212', '2023-05-09 12:36:13', 12555, 'Pending'),
(33, 'krishna6666', '12121212', '2023-05-09 12:36:57', 12555, 'Pending'),
(34, 'krishnafff', '12121212', '2023-05-09 12:38:03', 12555, 'Pending'),
(35, 'krishnafff', '12121212', '2023-05-09 12:38:07', 12555, 'Pending'),
(36, 'krishnafff', 'OrderId20230509180935', '2023-05-09 12:39:35', 12555, 'Pending'),
(37, 'krishnafff', 'OrderId20230509180953', '2023-05-09 12:39:53', 12555, 'Pending'),
(38, 'krishnafff', 'OrderId20230509180956', '2023-05-09 12:39:56', 12555, 'Pending'),
(39, 'krishnafff', 'OrderNo20230509181031', '2023-05-09 12:40:31', 12555, 'Pending'),
(40, 'krishnafff', 'OrderNo202359181040', '2023-05-09 12:40:40', 12555, 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'krish22nadgmail.com', '12345'),
(2, 'krishna@gmail.com', '12345'),
(3, 'krishna1@gmail.com', '12345'),
(4, 'krishna13@gmail.com', '12345'),
(5, 'krishna1344@gmail.com', '123454444');

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
