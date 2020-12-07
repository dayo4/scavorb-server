-- MySQL dump 10.17  Distrib 10.3.25-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: scavorb
-- ------------------------------------------------------
-- Server version	10.3.25-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts_status`
--

DROP TABLE IF EXISTS `accounts_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts_status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` int(10) unsigned NOT NULL,
  `reason` text NOT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `actor_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `accounts_status_user_id_foreign` (`user_id`),
  CONSTRAINT `accounts_status_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts_status`
--

LOCK TABLES `accounts_status` WRITE;
/*!40000 ALTER TABLE `accounts_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `accounts_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolios_projects`
--

DROP TABLE IF EXISTS `portfolios_projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `portfolios_projects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `detail` longtext NOT NULL,
  `images` text DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `portfolios_projects_user_id_foreign` (`user_id`),
  CONSTRAINT `portfolios_projects_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolios_projects`
--

LOCK TABLES `portfolios_projects` WRITE;
/*!40000 ALTER TABLE `portfolios_projects` DISABLE KEYS */;
INSERT INTO `portfolios_projects` VALUES (1,'SCAV ORB','<p><strong>﻿What is ﻿</strong><strong style=\"color: rgb(102, 163, 224);\">SCAVORB? </strong></p><p>Scavorb is exclusively my personal profile, and the word itself is a combination of <span style=\"color: rgb(153, 51, 255);\">SCAV(</span><span style=\"color: rgb(68, 68, 68);\">scavenge</span><span style=\"color: rgb(153, 51, 255);\">)  ﻿</span><span style=\"color: rgb(68, 68, 68);\">and </span><span style=\"color: rgb(153, 51, 255);\">ORB. ﻿</span><span style=\"color: rgb(68, 68, 68);\">What exactly is it scavenging for? I guess It\'ll become obvious along the way. </span></p><p><strong>﻿Why ﻿</strong><strong style=\"color: rgb(102, 163, 224);\">SCAVORB? </strong></p><p>It might be quite unbelievable when i said i have a knack to want to know how the whole of a thing works and also being a full-stack developer in a short time. </p><p>Unlike most developers, rather than make a basic generic portfolio which i could have done effortlessly in <strong style=\"color: rgb(240, 102, 102);\">WordPress,</strong> I decided to put my skills(which was quite basic then and limited to frontend few months back) to the extreme test by building a full Web Application (that serves me some purpose) from scratch, with all the <strong>UI</strong> <strong>components</strong> and some of the functional <strong>plugins</strong> custom created by me in the process. </p><p>My perception and personal confidence in myself and my abilities had always been more important to me than simply dishing out garbage. Some think i just like wasting my time, but what\'s the purpose of time if not to lavish on your own life and things that inspire you to be better?  </p><p><br></p><p><strong>Some﻿ of the techs used </strong></p><p><br></p><p><strong>Functions and Features in </strong><strong style=\"color: rgb(102, 163, 224);\">SCAVORB</strong></p><p>A regular person surfing probably wont see all what it entails </p>',NULL,0,1,'2020-10-09 15:28:35','2020-10-09 15:28:35');
/*!40000 ALTER TABLE `portfolios_projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `slug` varchar(225) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `content` longtext NOT NULL,
  `published` tinyint(1) DEFAULT 0,
  `archived` tinyint(1) DEFAULT 0,
  `approved` tinyint(1) DEFAULT 0,
  `thumbs_up` int(11) DEFAULT NULL,
  `thumbs_down` int(11) DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `posts_slug_unique` (`slug`),
  KEY `posts_user_id_foreign` (`user_id`),
  CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Just A Demo Content On Custom Lorem Ipsum ','just-a-demo-content ','1/img648_1602011636665.jpeg','<h2>What is Lorem Ipsum?</h2><p><br></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p><p><br></p><p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p><p><br></p><p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',0,0,0,NULL,NULL,1,'2020-10-06 19:13:48','2020-10-06 19:13:48'),(2,'assessment trap','assessment-trap',NULL,'<p>There\'s a massive pool of extremely talented people being passed over every moment in the world just as a result of our broken and faulty ways of assessing people skills. Yet every industry complains of not having enough great people to get the work done. </p><p><br></p><p>For so long, our basic means of assessing people\'s  abilities is their certificates, documents, credentials, goes by many names. Which of course is always subject to falsification. We often let go of the really useful people in the society while believe lies. This had consequently demotivated people in many ways that we now often prefer to lie and present a false appearance in all our dealings.  Go ahead check diverse online profiles, physical credentials, everyone is exhibiting loads of shit.</p><p><br></p><p>Come to think of it, it\'s all a loop. From one level to another, you get trapped in a kind of conformity cage. The kind that often prevents you from growing into what truly resonates within you which would be of better benefit to the world, But puts you in a position where you just always looking to add another notch of lie to your resume and portfolio. Even tests and examinations conducted mostly produce same result as people are examined for the wrong skillset. Because as humans our abilities and potentials are more complicated than something to be reason from a shallow perspective as if dealing with lowly animals which is the way we\'ve been treating ourselves so far. Utilizing the same old mistakes of the past to assess our present and future prospects as if we are some static object in the universe that could be easily predicted.</p><p><br></p><p>So how do we get out of this trap </p>',0,0,0,NULL,NULL,1,'2020-10-11 10:24:05','2020-10-11 10:24:05');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts_comments`
--

DROP TABLE IF EXISTS `posts_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts_comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `thumbs_up` int(11) DEFAULT NULL,
  `thumbs_down` int(11) DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `post_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `posts_comments_user_id_foreign` (`user_id`),
  KEY `posts_comments_post_id_foreign` (`post_id`),
  CONSTRAINT `posts_comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `posts_comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts_comments`
--

LOCK TABLES `posts_comments` WRITE;
/*!40000 ALTER TABLE `posts_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts_images`
--

DROP TABLE IF EXISTS `posts_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts_images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `urls` varchar(2000) NOT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `post_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `posts_images_user_id_foreign` (`user_id`),
  KEY `posts_images_post_id_foreign` (`post_id`),
  CONSTRAINT `posts_images_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `posts_images_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts_images`
--

LOCK TABLES `posts_images` WRITE;
/*!40000 ALTER TABLE `posts_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts_subcomments`
--

DROP TABLE IF EXISTS `posts_subcomments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts_subcomments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `thumbs_up` int(11) DEFAULT NULL,
  `thumbs_down` int(11) DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `comment_id` int(10) unsigned DEFAULT NULL,
  `post_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `posts_subcomments_user_id_foreign` (`user_id`),
  KEY `posts_subcomments_comment_id_foreign` (`comment_id`),
  KEY `posts_subcomments_post_id_foreign` (`post_id`),
  CONSTRAINT `posts_subcomments_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `posts_comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `posts_subcomments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `posts_subcomments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts_subcomments`
--

LOCK TABLES `posts_subcomments` WRITE;
/*!40000 ALTER TABLE `posts_subcomments` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts_subcomments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reset_password`
--

DROP TABLE IF EXISTS `reset_password`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reset_password` (
  `secret` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `expiration` varchar(255) NOT NULL,
  `verified` tinyint(1) DEFAULT 0,
  UNIQUE KEY `reset_password_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset_password`
--

LOCK TABLES `reset_password` WRITE;
/*!40000 ALTER TABLE `reset_password` DISABLE KEYS */;
/*!40000 ALTER TABLE `reset_password` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scavorb_migrations`
--

DROP TABLE IF EXISTS `scavorb_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scavorb_migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scavorb_migrations`
--

LOCK TABLES `scavorb_migrations` WRITE;
/*!40000 ALTER TABLE `scavorb_migrations` DISABLE KEYS */;
INSERT INTO `scavorb_migrations` VALUES (12,'20200327062332_users.js',1,'2020-10-06 00:07:31'),(13,'20200405062856_users_images.js',1,'2020-10-06 00:07:31'),(14,'20200421023615_posts.js',1,'2020-10-06 00:07:31'),(15,'20200529163431_posts_images.js',1,'2020-10-06 00:07:31'),(16,'20200622092801_posts_comments.js',1,'2020-10-06 00:07:31'),(17,'20200622100658_posts_subcomments.js',1,'2020-10-06 00:07:32'),(18,'20200702100513_accounts_status.js',1,'2020-10-06 00:07:32'),(19,'20200831223603_portfolios_projects.js',1,'2020-10-06 00:07:32'),(20,'20200910191620_system_settings.js',1,'2020-10-06 00:07:32'),(21,'20200924220535_unverified_users.js',1,'2020-10-06 00:07:32'),(22,'20200925164151_reset_password.js',1,'2020-10-06 00:07:32');
/*!40000 ALTER TABLE `scavorb_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scavorb_migrations_lock`
--

DROP TABLE IF EXISTS `scavorb_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scavorb_migrations_lock` (
  `index` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int(11) DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scavorb_migrations_lock`
--

LOCK TABLES `scavorb_migrations_lock` WRITE;
/*!40000 ALTER TABLE `scavorb_migrations_lock` DISABLE KEYS */;
INSERT INTO `scavorb_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `scavorb_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_settings`
--

DROP TABLE IF EXISTS `system_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_settings` (
  `allow_new_reg` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_settings`
--

LOCK TABLES `system_settings` WRITE;
/*!40000 ALTER TABLE `system_settings` DISABLE KEYS */;
INSERT INTO `system_settings` VALUES (0);
/*!40000 ALTER TABLE `system_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unverified_users`
--

DROP TABLE IF EXISTS `unverified_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `unverified_users` (
  `secret` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `expiration` varchar(255) NOT NULL,
  UNIQUE KEY `unverified_users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unverified_users`
--

LOCK TABLES `unverified_users` WRITE;
/*!40000 ALTER TABLE `unverified_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `unverified_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT '',
  `status` varchar(50) DEFAULT NULL,
  `about` text DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `priv` int(11) DEFAULT 0,
  `verified` tinyint(1) DEFAULT 0,
  `active` tinyint(1) DEFAULT 0,
  `blacklisted` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dayo','dayo4@live.com','$2b$10$Np4tN6INSjoOzul2J/t6AuSbPdO0N8LmFs2YU6FCev32pC1aWaP6C','Adedayo','Adeniyi','I\'m available. Feel free to message me.','I am a fullstack web developer who loves exploring deeper the nature of things and experimenting with different strategies. I enjoy engaging in intuitive conversations and visualization about the abstract design of nature and desire driving the architecture of things towards precision.','1/img_1_1601945204252.jpeg',NULL,10,1,1,0,'2020-10-06 00:17:19','2020-10-06 00:17:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_images`
--

DROP TABLE IF EXISTS `users_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_images` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_images_url_unique` (`url`),
  KEY `users_images_user_id_foreign` (`user_id`),
  CONSTRAINT `users_images_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_images`
--

LOCK TABLES `users_images` WRITE;
/*!40000 ALTER TABLE `users_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-20  4:19:01
