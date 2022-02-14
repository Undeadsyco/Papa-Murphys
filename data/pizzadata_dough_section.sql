-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: pizzadata
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dough_section`
--

DROP TABLE IF EXISTS `dough_section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dough_section` (
  `section_id` int unsigned NOT NULL,
  `dough_id` int unsigned NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`section_id`,`dough_id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dough_section`
--

LOCK TABLES `dough_section` WRITE;
/*!40000 ALTER TABLE `dough_section` DISABLE KEYS */;
INSERT INTO `dough_section` VALUES (1,1,'2021-03-10 06:06:27'),(1,2,'2021-03-10 06:06:27'),(1,3,'2021-03-10 06:06:27'),(1,4,'2021-03-10 06:06:27'),(1,5,'2021-03-10 06:06:27'),(1,6,'2021-03-10 06:06:27'),(1,7,'2021-03-10 06:06:27'),(2,1,'2021-03-10 06:06:27'),(2,2,'2021-03-10 06:06:27'),(2,3,'2021-03-10 06:06:27'),(2,4,'2021-03-10 06:06:27'),(2,5,'2021-03-10 06:06:27'),(2,6,'2021-03-10 06:06:27'),(2,7,'2021-03-10 06:06:27'),(3,1,'2021-03-10 06:06:27'),(3,2,'2021-03-10 06:06:27'),(3,3,'2021-03-10 06:06:27'),(3,4,'2021-03-10 06:06:27'),(3,5,'2021-03-10 06:06:27'),(3,6,'2021-03-10 06:06:27'),(3,7,'2021-03-10 06:06:27'),(4,1,'2021-03-10 06:06:27'),(4,2,'2021-03-10 06:06:27'),(4,3,'2021-03-10 06:06:27'),(4,4,'2021-03-10 06:06:27'),(4,5,'2021-03-10 06:06:27'),(4,6,'2021-03-10 06:06:27'),(4,7,'2021-03-10 06:06:27'),(5,2,'2021-03-10 06:06:27'),(5,3,'2021-03-10 06:06:27'),(5,5,'2021-03-10 06:06:27'),(6,8,'2021-03-10 06:06:27');
/*!40000 ALTER TABLE `dough_section` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-14 16:21:52