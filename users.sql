-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 06, 2020 at 10:10 AM
-- Server version: 5.7.29-0ubuntu0.16.04.1
-- PHP Version: 7.2.24-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mycontacts`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `contact_no` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `first_name`, `email`, `password`, `contact_no`, `status`, `createdAt`, `updatedAt`) VALUES
(17, 'kaleshwar', '', 'kumarkaleshwar1999@gmail.com', '$2b$10$Ltkmcs2hPmwuU/jEYgvEvuyR3ZjRHlIrn7Tt.m2oVraQP13C7kwm2', '8178324212', 0, '2020-04-17', '2020-04-17'),
(18, 'Deeepak', '', 'deepak@gmail.com', '$2b$10$KHrqjvg8LC/FOS7HnAta9Ot5LXS1QT7PUW.Sh7FDa5R7rJULtvjaG', '958239485', 0, '2020-04-17', '2020-04-17'),
(21, 'kaleyada', 'Shiv', 'kaleyada@gmail.com', '$2b$10$lfoxSKEIrsJmWgyD8vTLrOw8VftOAVDn8jUzP17j4l.OIG4AT6Iyi', '9015961713', 0, '2020-04-18', '2020-04-18'),
(22, 'raghu199', 'Raghu', 'raghu@gmail.com', '$2b$10$VTK2Uza7RCH4Pk6HbioMuueXFHd/yDsHpzEp4IRo6mXRUu4E6vX0W', '8278324215', 0, '2020-04-19', '2020-04-19'),
(23, 'kaleyada_123', 'Shiv', 'kumarkaleshwar199hhh9@gmail.com', '$2b$10$JoSXxRt21CB8uh9l82BqjeLw.pbtwi1qNjY94rS6mO2kivQnJSdPK', '08327745625', 0, '2020-04-19', '2020-04-19'),
(24, 'kaleshwar_123', 'jksdjfksd', 'ieoiteoro@gmail.com', '$2b$10$UzvrbD51Z0ZKXXyXus2MEeDEXyYDV2LNKcH5NtVAJcbRGnS2xFCFW', '3123423', 0, '2020-04-19', '2020-04-19'),
(25, 'rohit123', 'rohit', 'rohit@2019k.com', '$2b$10$NB5vpNRtJdfUEKH0VtNhHeGWsJQdbaHQ08gWR1t4SYzB.PH5MLwFG', '8178324218', 0, '2020-04-19', '2020-04-19'),
(26, 'kaluyadav', 'abcd', 'kalu@gmail.com', '$2b$10$s/vaXYdQC0OGKpiaSdediuh3G6Y5hxjl0.vpxakcq74AqE2gQe3ZK', '9015961714', 0, '2020-04-28', '2020-04-28');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
