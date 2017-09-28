-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 26, 2017 at 01:19 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `millborn_v001`
--

-- --------------------------------------------------------

--
-- Table structure for table `DB_Address`
--

CREATE TABLE `DB_Address` (
  `AddressId` int(10) NOT NULL,
  `RoleId` int(4) NOT NULL,
  `UserId` int(8) DEFAULT NULL,
  `Latitude` float DEFAULT NULL,
  `Longitude` float DEFAULT NULL,
  `FullAddress` varchar(512) NOT NULL,
  `Area` varchar(128) NOT NULL,
  `StreetName` varchar(128) NOT NULL,
  `HouseNumber` varchar(64) NOT NULL,
  `Pincode` char(6) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `CreatedBy` int(8) DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  `ModifiedBy` int(8) DEFAULT NULL,
  `District` varchar(128) DEFAULT NULL,
  `Landmark` varchar(256) DEFAULT NULL,
  `CityId` int(11) DEFAULT NULL,
  `StateId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `DB_Address`
--

INSERT INTO `DB_Address` (`AddressId`, `RoleId`, `UserId`, `Latitude`, `Longitude`, `FullAddress`, `Area`, `StreetName`, `HouseNumber`, `Pincode`, `CreatedAt`, `CreatedBy`, `ModifiedAt`, `ModifiedBy`, `District`, `Landmark`, `CityId`, `StateId`) VALUES
(1, 4, NULL, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-18 13:01:08', 1, '2017-08-18 13:01:08', 1, NULL, NULL, NULL, NULL),
(4, 4, 5, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-18 14:43:32', 1, '2017-08-18 14:43:32', 1, NULL, NULL, NULL, NULL),
(5, 4, 6, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-18 14:44:48', 1, '2017-08-18 14:44:48', 1, NULL, NULL, NULL, NULL),
(6, 4, 7, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-18 14:57:29', 1, '2017-08-18 14:57:29', 1, NULL, NULL, NULL, NULL),
(7, 4, 8, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-18 15:03:16', 1, '2017-08-18 15:03:16', 1, NULL, NULL, NULL, NULL),
(8, 4, 9, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-18 15:05:53', 1, '2017-08-18 15:05:53', 1, NULL, NULL, NULL, NULL),
(9, 4, 11, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-20 01:23:50', 1, '2017-08-20 01:23:50', 1, NULL, NULL, NULL, NULL),
(10, 4, 12, NULL, NULL, '22/180 , 10th cross , sector 8, pratap nagar , 4 - 302002 Landmark : sharma dhaba', 'sector 8, pratap nagar', '10th cross', '22/180', '302002', '2017-08-20 01:44:25', 1, '2017-08-20 02:02:20', 1, 'chomu', 'sharma dhaba', 4, 2),
(11, 4, 13, NULL, NULL, '21/208/10 , 5th cross , natu marg nagar , 2 - 320034 Landmark : test landmark', 'natu marg nagar', '5th cross', '21/208/10', '320034', '2017-08-20 13:44:30', 1, '2017-08-20 13:44:30', 1, 'dangayavas', 'test landmark', 2, 1),
(12, 4, 14, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-20 15:59:50', 1, '2017-08-20 15:59:50', 1, 'Jaipur', 'kalyan path', 1, 1),
(13, 4, 15, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-20 16:13:24', 1, '2017-08-20 16:13:24', 1, 'Jaipur', 'kalyan path', 1, 1),
(14, 4, 16, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-20 16:15:52', 1, '2017-08-20 16:15:52', 1, 'Jaipur', 'kalyan path', 1, 1),
(15, 4, 17, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-20 16:20:24', 1, '2017-08-20 16:20:24', 1, 'Jaipur', 'kalyan path', 1, 1),
(16, 4, 18, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-20 16:21:45', 1, '2017-08-20 16:21:45', 1, 'Jaipur', 'kalyan path', 1, 1),
(17, 4, 19, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-20 16:23:26', 1, '2017-08-20 16:23:26', 1, 'Jaipur', 'kalyan path', 1, 1),
(18, 4, 20, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-20 16:26:30', 1, '2017-08-20 16:26:30', 1, 'Jaipur', 'kalyan path', 1, 1),
(19, 4, 21, NULL, NULL, '16 , 1st cross , Adugodi , 1 - 302004 Landmark : kalyan path', 'Adugodi', '1st cross', '16', '302004', '2017-08-20 16:52:31', 1, '2017-08-20 16:52:31', 1, 'Jaipur', 'kalyan path', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `DB_Category`
--

CREATE TABLE `DB_Category` (
  `CategoryId` int(4) NOT NULL,
  `CategoryName` varchar(128) NOT NULL,
  `CategoryDescription` varchar(256) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `CreatedBy` int(8) NOT NULL,
  `ModifiedAt` datetime NOT NULL,
  `ModifiedBy` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `DB_City`
--

CREATE TABLE `DB_City` (
  `CityId` int(11) NOT NULL,
  `CityName` varchar(128) NOT NULL,
  `StateId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `DB_City`
--

INSERT INTO `DB_City` (`CityId`, `CityName`, `StateId`) VALUES
(1, 'Jaipur', 1),
(2, 'Jodhpur', 1),
(3, 'Bikaner', 1),
(4, 'Delhi', 2);

-- --------------------------------------------------------

--
-- Table structure for table `DB_ClientMainItems`
--

CREATE TABLE `DB_ClientMainItems` (
  `MainItemsId` int(11) NOT NULL,
  `MainItemName` varchar(256) NOT NULL,
  `ClientTypeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `DB_ClientMainItems`
--

INSERT INTO `DB_ClientMainItems` (`MainItemsId`, `MainItemName`, `ClientTypeId`) VALUES
(1, 'Starters', 2),
(2, 'Kitkat Fuse', 2),
(3, 'Panel', 2),
(4, 'Capacitor', 2),
(5, 'Spares', 2),
(6, 'Water Pump', 2),
(7, 'Machinery seller ', 2),
(8, 'Govt. / Project Suppliers', 2),
(9, 'Domestic electrical', 2),
(10, 'Industrial Switchgeas', 2),
(11, 'Electrical Panel Board', 6),
(12, 'Food Industries', 6),
(13, 'Plastic Product', 6),
(14, 'Engg. Component', 6),
(15, 'Cement Industries', 6),
(16, 'Marble Industries', 6),
(17, 'Textile/ Cloth', 6),
(18, 'Pumps', 6);

-- --------------------------------------------------------

--
-- Table structure for table `DB_Clients`
--

CREATE TABLE `DB_Clients` (
  `ClientId` int(4) NOT NULL,
  `ClientCode` varchar(8) NOT NULL,
  `ClientTypeId` int(4) DEFAULT NULL,
  `FirmName` varchar(256) NOT NULL,
  `OwnerName` varchar(256) NOT NULL,
  `MobileNumber` varchar(16) NOT NULL,
  `AlterNateNumber` varchar(16) DEFAULT NULL,
  `WhatsAppNumber` varchar(16) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `GSTNumber` varchar(32) NOT NULL,
  `GSTName` varchar(256) NOT NULL,
  `GSTAddress` varchar(512) NOT NULL,
  `MainItemIds` varchar(64) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `CreatedBy` int(4) DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  `ModifiedBy` int(4) DEFAULT NULL,
  `IsActive` tinyint(1) NOT NULL,
  `IsVerified` tinyint(1) NOT NULL,
  `VerifiedBy` int(4) DEFAULT NULL,
  `VerifiedAt` datetime DEFAULT NULL,
  `Status` varchar(16) NOT NULL,
  `VerificationComments` text,
  `MainItemTexts` varchar(1024) DEFAULT NULL,
  `OtherMainItem` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `DB_Clients`
--

INSERT INTO `DB_Clients` (`ClientId`, `ClientCode`, `ClientTypeId`, `FirmName`, `OwnerName`, `MobileNumber`, `AlterNateNumber`, `WhatsAppNumber`, `Email`, `GSTNumber`, `GSTName`, `GSTAddress`, `MainItemIds`, `CreatedAt`, `CreatedBy`, `ModifiedAt`, `ModifiedBy`, `IsActive`, `IsVerified`, `VerifiedBy`, `VerifiedAt`, `Status`, `VerificationComments`, `MainItemTexts`, `OtherMainItem`) VALUES
(2, 'TRA1', 2, 'test firm', 'test name', '9945873692', NULL, '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-18 13:01:08', 1, '2017-08-18 13:01:08', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', NULL),
(3, 'TRA1', 4, 'test2 firm', 'test name', '9945873692', NULL, '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-18 14:36:35', 1, '2017-08-18 14:36:35', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', NULL),
(4, 'TRA1', 2, 'test3 firm', 'test name', '9945873692', NULL, '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-18 14:38:09', 1, '2017-08-18 14:38:09', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', NULL),
(5, 'TRA1', 2, 'test4 firm', 'test name', '9945873692', NULL, '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-18 14:43:32', 1, '2017-08-18 14:43:32', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', NULL),
(6, 'TRA1', 6, 'test firm', 'test name', '9945873692', NULL, '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-18 14:44:48', 1, '2017-08-18 14:44:48', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', NULL),
(7, 'TRA1', 2, 'test6 firm', 'test name', '9945873692', NULL, '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-18 14:57:29', 1, '2017-08-18 14:57:29', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', NULL),
(8, 'TRA1', 2, 'test firm', 'test name', '9945873692', NULL, '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-18 15:03:16', 1, '2017-08-18 15:03:16', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', NULL),
(9, 'TRA1', 2, 'test firm', 'test name', '9945873692', NULL, '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-18 15:05:53', 1, '2017-08-18 15:05:53', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', NULL),
(10, 'TRA10', 2, 'test firm', 'test name', '9945873692', NULL, '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-20 01:21:08', 1, '2017-08-20 01:21:08', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', NULL),
(11, 'TRA12', 2, 'test firm', 'test name', '9945873692', NULL, '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-20 01:23:50', 1, '2017-08-20 01:26:33', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', NULL),
(12, 'MAN12', 6, 'narayan and sons', 'ashok narayan', '9988778899', '1122334455', '9988778899', 'ashok@gmail.com', 'RJGST001', 'Narayana', 'Same as address', '11,12,13', '2017-08-20 01:44:25', 1, '2017-08-20 02:02:20', 1, 0, 0, NULL, NULL, 'pending', NULL, 'Electrical Panel Board,Food Industries,Plastic Product', 'other item1'),
(13, 'MAN13', 6, 'test manufactor', 'test manu owner', '22333223322', '9988332244', '9988332244', 'testmanu@gmail.com', 'testGST', 'test GST Name Manu', 'test GST Address Manu', '12,15,17', '2017-08-20 13:44:30', 1, '2017-08-20 13:44:30', 1, 0, 0, NULL, NULL, 'pending', NULL, 'Food Industries,Cement Industries,Textile/ Cloth', 'testothermanuitem'),
(14, 'TRA14', 2, 'test firm', 'test name', '9945873692', '9950140238', '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-20 15:59:50', 1, '2017-08-20 15:59:50', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', 'Other Item'),
(15, 'TRA15', 2, 'test firm', 'test name', '9945873692', '9950140238', '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-20 16:13:24', 1, '2017-08-20 16:13:24', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', 'Other Item'),
(16, 'TRA16', 2, 'test firm', 'test name', '9945873692', '9950140238', '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-20 16:15:52', 1, '2017-08-20 16:15:52', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', 'Other Item'),
(17, 'TRA17', 2, 'test firm', 'test name', '9945873692', '9950140238', '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-20 16:20:24', 1, '2017-08-20 16:20:24', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', 'Other Item'),
(18, 'TRA18', 2, 'test firm', 'test name', '9945873692', '9950140238', '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-20 16:21:45', 1, '2017-08-20 16:21:45', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', 'Other Item'),
(19, 'TRA19', 2, 'test firm', 'test name', '9945873692', '9950140238', '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-20 16:23:26', 1, '2017-08-20 16:23:26', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', 'Other Item'),
(20, 'TRA20', 2, 'test firm', 'test name', '9945873692', '9950140238', '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-20 16:26:30', 1, '2017-08-20 16:26:30', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', 'Other Item'),
(21, 'TRA21', 2, 'test firm', 'test name', '9945873692', '9950140238', '9950140238', 'test@gmail.com', 'GST12', 'GST NAME', 'GST Address', '2,3,4', '2017-08-20 16:52:31', 1, '2017-08-20 16:52:31', 1, 0, 0, NULL, NULL, 'pending', NULL, 'item1,item2,item3', 'Other Item');

-- --------------------------------------------------------

--
-- Table structure for table `DB_ClientType`
--

CREATE TABLE `DB_ClientType` (
  `ClientTypeId` int(2) NOT NULL,
  `ClientType` varchar(256) DEFAULT NULL,
  `ClientTypeDescription` varchar(512) DEFAULT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `CreatedBy` int(11) DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  `ModifiedBy` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `DB_ClientType`
--

INSERT INTO `DB_ClientType` (`ClientTypeId`, `ClientType`, `ClientTypeDescription`, `CreatedAt`, `CreatedBy`, `ModifiedAt`, `ModifiedBy`) VALUES
(2, 'Trader', 'Trader Client Type Description', '2017-08-02 21:30:00', 1, '2017-08-02 21:30:00', 1),
(4, 'Builder', 'Builder Description test', '2017-08-09 12:26:05', 1, '2017-08-11 09:15:24', 1),
(6, 'Manufacturer', 'Manufacturer Description', '2017-08-11 22:24:44', 1, '2017-08-11 22:24:44', 1);

-- --------------------------------------------------------

--
-- Table structure for table `DB_Country`
--

CREATE TABLE `DB_Country` (
  `CountryId` int(11) NOT NULL,
  `CountryName` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `DB_Country`
--

INSERT INTO `DB_Country` (`CountryId`, `CountryName`) VALUES
(1, 'India');

-- --------------------------------------------------------

--
-- Table structure for table `DB_ProductImages`
--

CREATE TABLE `DB_ProductImages` (
  `ProductImageId` int(10) NOT NULL,
  `ImageUrl` varchar(256) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `CreatedBy` int(8) NOT NULL,
  `ModifiedAt` datetime NOT NULL,
  `ModifiedBy` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `DB_Products`
--

CREATE TABLE `DB_Products` (
  `ProductId` int(16) NOT NULL,
  `Title` varchar(256) NOT NULL,
  `CategoryId` int(4) NOT NULL,
  `Description` mediumtext NOT NULL,
  `RegularPrice` decimal(10,0) NOT NULL,
  `SalePrice` decimal(10,0) NOT NULL,
  `ProductTypeId` int(4) NOT NULL,
  `ExternalLink` varchar(256) NOT NULL,
  `IsPublished` tinyint(1) NOT NULL,
  `IsApproved` tinyint(1) NOT NULL,
  `BoxIncludes` varchar(256) NOT NULL,
  `Weight` float NOT NULL,
  `Height` float NOT NULL,
  `Width` float NOT NULL,
  `Length` float NOT NULL,
  `FeaturedImage` varchar(256) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `CreatedBy` int(8) NOT NULL,
  `ModifiedAt` datetime NOT NULL,
  `ModifiedBy` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `DB_ProductType`
--

CREATE TABLE `DB_ProductType` (
  `ProductTypeId` int(4) NOT NULL,
  `ProductType` varchar(64) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `CreatedBy` int(8) NOT NULL,
  `ModifiedAt` datetime NOT NULL,
  `ModifiedBy` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `DB_Roles`
--

CREATE TABLE `DB_Roles` (
  `RoleId` int(4) NOT NULL,
  `RoleName` varchar(64) NOT NULL,
  `RoleDescription` varchar(128) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `CreatedBy` int(8) NOT NULL,
  `ModifiedAt` datetime NOT NULL,
  `ModifiedBy` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `DB_Roles`
--

INSERT INTO `DB_Roles` (`RoleId`, `RoleName`, `RoleDescription`, `CreatedAt`, `CreatedBy`, `ModifiedAt`, `ModifiedBy`) VALUES
(3, 'SuperAdmin', 'Super Admin', '2017-08-01 00:00:00', 1, '2017-08-01 00:00:00', 1),
(4, 'Client', 'Client Dealer / Trader / Manufacturer', '2017-08-14 00:00:00', 1, '2017-08-14 00:00:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `DB_State`
--

CREATE TABLE `DB_State` (
  `StateId` int(11) NOT NULL,
  `StateName` varchar(128) NOT NULL,
  `CountryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `DB_State`
--

INSERT INTO `DB_State` (`StateId`, `StateName`, `CountryId`) VALUES
(1, 'Rajasthan', 1),
(2, 'Delhi', 1),
(3, 'Haryana', 1);

-- --------------------------------------------------------

--
-- Table structure for table `DB_Users`
--

CREATE TABLE `DB_Users` (
  `UserId` int(8) NOT NULL,
  `UserName` varchar(128) NOT NULL,
  `Password` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `PhoneNumber` varchar(64) NOT NULL,
  `IsActive` tinyint(1) NOT NULL,
  `IsApproved` tinyint(1) NOT NULL,
  `UserRoleId` int(4) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `CreatedBy` int(8) DEFAULT NULL,
  `ModifiedAt` datetime NOT NULL,
  `ModifiedBy` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `DB_Users`
--

INSERT INTO `DB_Users` (`UserId`, `UserName`, `Password`, `Email`, `PhoneNumber`, `IsActive`, `IsApproved`, `UserRoleId`, `CreatedAt`, `CreatedBy`, `ModifiedAt`, `ModifiedBy`) VALUES
(1, 'admin@millborn.com', '8da6b1e13cc3', 'admin@millborn.com', '9945873693', 1, 1, 3, '2017-08-01 04:00:00', 0, '2017-08-01 04:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `DB_UserStore`
--

CREATE TABLE `DB_UserStore` (
  `StoreId` int(8) NOT NULL,
  `UserId` int(8) NOT NULL,
  `BannerImage` varchar(256) NOT NULL,
  `ProfileImage` varchar(256) NOT NULL,
  `AddressId` int(10) NOT NULL,
  `ContactNumber` varchar(64) NOT NULL,
  `EmailId` varchar(256) NOT NULL,
  `StoreName` varchar(128) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `CreatedBy` int(8) NOT NULL,
  `ModifiedAt` datetime NOT NULL,
  `ModifiedBy` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `DB_Address`
--
ALTER TABLE `DB_Address`
  ADD PRIMARY KEY (`AddressId`),
  ADD KEY `DB_Address_RoleId_DB_Roles_RoleId` (`RoleId`),
  ADD KEY `DB_Address_CreatedBy_DB_Users_UserId` (`CreatedBy`),
  ADD KEY `DB_Address_ModifiedBy_DB_Users_UserId` (`ModifiedBy`);

--
-- Indexes for table `DB_Category`
--
ALTER TABLE `DB_Category`
  ADD PRIMARY KEY (`CategoryId`);

--
-- Indexes for table `DB_City`
--
ALTER TABLE `DB_City`
  ADD PRIMARY KEY (`CityId`),
  ADD KEY `DB_City_StateId_DB_State_StateId` (`StateId`);

--
-- Indexes for table `DB_ClientMainItems`
--
ALTER TABLE `DB_ClientMainItems`
  ADD PRIMARY KEY (`MainItemsId`),
  ADD KEY `DB_ClientMainItems_ClientTypeId_DB_ClientType_ClientTypeId` (`ClientTypeId`);

--
-- Indexes for table `DB_Clients`
--
ALTER TABLE `DB_Clients`
  ADD PRIMARY KEY (`ClientId`),
  ADD KEY `DB_Client_DB_ClientTypeId_DB_ClientType_DB_ClientTypeId` (`ClientTypeId`),
  ADD KEY `DB_Client_VerifiedBy_DB_Users_UserId` (`VerifiedBy`),
  ADD KEY `DB_Client_CreatedBy_DB_Users_UserId` (`CreatedBy`),
  ADD KEY `DB_Client_ModifiedBy_DB_Users_UserId` (`ModifiedBy`);

--
-- Indexes for table `DB_ClientType`
--
ALTER TABLE `DB_ClientType`
  ADD PRIMARY KEY (`ClientTypeId`);

--
-- Indexes for table `DB_Country`
--
ALTER TABLE `DB_Country`
  ADD PRIMARY KEY (`CountryId`);

--
-- Indexes for table `DB_ProductImages`
--
ALTER TABLE `DB_ProductImages`
  ADD PRIMARY KEY (`ProductImageId`);

--
-- Indexes for table `DB_Products`
--
ALTER TABLE `DB_Products`
  ADD PRIMARY KEY (`ProductId`),
  ADD KEY `DB_Products_CategoryId_DB_Category_CategoryId` (`CategoryId`),
  ADD KEY `DB_Products_ProductTypeId_DB_ProductType_ProductTypeId` (`ProductTypeId`),
  ADD KEY `DB_Products_CreatedBy_DB_Users_UserId` (`CreatedBy`),
  ADD KEY `DB_Products_ModifiedBy_DB_Users_UserId` (`ModifiedBy`);

--
-- Indexes for table `DB_ProductType`
--
ALTER TABLE `DB_ProductType`
  ADD PRIMARY KEY (`ProductTypeId`);

--
-- Indexes for table `DB_Roles`
--
ALTER TABLE `DB_Roles`
  ADD PRIMARY KEY (`RoleId`);

--
-- Indexes for table `DB_State`
--
ALTER TABLE `DB_State`
  ADD PRIMARY KEY (`StateId`),
  ADD KEY `DB_State_CountryId_DB_Country_CountryId` (`CountryId`);

--
-- Indexes for table `DB_Users`
--
ALTER TABLE `DB_Users`
  ADD PRIMARY KEY (`UserId`);

--
-- Indexes for table `DB_UserStore`
--
ALTER TABLE `DB_UserStore`
  ADD PRIMARY KEY (`StoreId`),
  ADD KEY `DB_UserStore_UserId_DB_Users_UserId` (`UserId`),
  ADD KEY `DB_UserStore_CreatedBy_DB_Users_UserId` (`CreatedBy`),
  ADD KEY `DB_UserStore_ModifiedBy_DB_Users_UserId` (`ModifiedBy`),
  ADD KEY `DB_UserStore_AddressId_DB_Address_AddressId` (`AddressId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `DB_Address`
--
ALTER TABLE `DB_Address`
  MODIFY `AddressId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `DB_Category`
--
ALTER TABLE `DB_Category`
  MODIFY `CategoryId` int(4) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `DB_City`
--
ALTER TABLE `DB_City`
  MODIFY `CityId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `DB_ClientMainItems`
--
ALTER TABLE `DB_ClientMainItems`
  MODIFY `MainItemsId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `DB_Clients`
--
ALTER TABLE `DB_Clients`
  MODIFY `ClientId` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `DB_ClientType`
--
ALTER TABLE `DB_ClientType`
  MODIFY `ClientTypeId` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `DB_Country`
--
ALTER TABLE `DB_Country`
  MODIFY `CountryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `DB_ProductImages`
--
ALTER TABLE `DB_ProductImages`
  MODIFY `ProductImageId` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `DB_Products`
--
ALTER TABLE `DB_Products`
  MODIFY `ProductId` int(16) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `DB_ProductType`
--
ALTER TABLE `DB_ProductType`
  MODIFY `ProductTypeId` int(4) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `DB_Roles`
--
ALTER TABLE `DB_Roles`
  MODIFY `RoleId` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `DB_State`
--
ALTER TABLE `DB_State`
  MODIFY `StateId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `DB_Users`
--
ALTER TABLE `DB_Users`
  MODIFY `UserId` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `DB_UserStore`
--
ALTER TABLE `DB_UserStore`
  MODIFY `StoreId` int(8) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `DB_Address`
--
ALTER TABLE `DB_Address`
  ADD CONSTRAINT `DB_Address_CreatedBy_DB_Users_UserId` FOREIGN KEY (`CreatedBy`) REFERENCES `DB_Users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DB_Address_ModifiedBy_DB_Users_UserId` FOREIGN KEY (`ModifiedBy`) REFERENCES `DB_Users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DB_Address_RoleId_DB_Roles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `DB_Roles` (`RoleId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `DB_City`
--
ALTER TABLE `DB_City`
  ADD CONSTRAINT `DB_City_StateId_DB_State_StateId` FOREIGN KEY (`StateId`) REFERENCES `DB_State` (`StateId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `DB_ClientMainItems`
--
ALTER TABLE `DB_ClientMainItems`
  ADD CONSTRAINT `DB_ClientMainItems_ClientTypeId_DB_ClientType_ClientTypeId` FOREIGN KEY (`ClientTypeId`) REFERENCES `DB_ClientType` (`ClientTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `DB_Clients`
--
ALTER TABLE `DB_Clients`
  ADD CONSTRAINT `DB_Client_CreatedBy_DB_Users_UserId` FOREIGN KEY (`CreatedBy`) REFERENCES `DB_Users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DB_Client_DB_ClientTypeId_DB_ClientType_DB_ClientTypeId` FOREIGN KEY (`ClientTypeId`) REFERENCES `DB_ClientType` (`ClientTypeId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DB_Client_ModifiedBy_DB_Users_UserId` FOREIGN KEY (`ModifiedBy`) REFERENCES `DB_Users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DB_Client_VerifiedBy_DB_Users_UserId` FOREIGN KEY (`VerifiedBy`) REFERENCES `DB_Users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `DB_Products`
--
ALTER TABLE `DB_Products`
  ADD CONSTRAINT `DB_Products_CategoryId_DB_Category_CategoryId` FOREIGN KEY (`CategoryId`) REFERENCES `DB_Category` (`CategoryId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DB_Products_CreatedBy_DB_Users_UserId` FOREIGN KEY (`CreatedBy`) REFERENCES `DB_Users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DB_Products_ModifiedBy_DB_Users_UserId` FOREIGN KEY (`ModifiedBy`) REFERENCES `DB_Users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DB_Products_ProductTypeId_DB_ProductType_ProductTypeId` FOREIGN KEY (`ProductTypeId`) REFERENCES `DB_ProductType` (`ProductTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `DB_State`
--
ALTER TABLE `DB_State`
  ADD CONSTRAINT `DB_State_CountryId_DB_Country_CountryId` FOREIGN KEY (`CountryId`) REFERENCES `DB_Country` (`CountryId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `DB_UserStore`
--
ALTER TABLE `DB_UserStore`
  ADD CONSTRAINT `DB_UserStore_AddressId_DB_Address_AddressId` FOREIGN KEY (`AddressId`) REFERENCES `DB_Address` (`AddressId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DB_UserStore_CreatedBy_DB_Users_UserId` FOREIGN KEY (`CreatedBy`) REFERENCES `DB_Users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DB_UserStore_ModifiedBy_DB_Users_UserId` FOREIGN KEY (`ModifiedBy`) REFERENCES `DB_Users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DB_UserStore_UserId_DB_Users_UserId` FOREIGN KEY (`UserId`) REFERENCES `DB_Users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
