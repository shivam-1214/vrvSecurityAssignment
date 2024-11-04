USE `Employee`;

DROP TABLE IF EXISTS `roles`;
DROP TABLE IF EXISTS `members`;

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `user_id` varchar(50) NOT NULL,
  `password` char(68) NOT NULL,
  `active` tinyint NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Inserting data for table `members`
--
-- NOTE: The passwords are encrypted using BCrypt
--
-- A generation tool is avail at: https://www.bcryptcalculator.com/encode
--
-- Default passwords here are: password
--

INSERT INTO `members`
VALUES
('varun','{bcrypt}$2a$10$TBbi9qF4NvnS66mS6wATZ.G3Y071lPnOlBVXW2vLDMNsXBDRlunsi',1),
('swati','{bcrypt}$2a$10$TBbi9qF4NvnS66mS6wATZ.G3Y071lPnOlBVXW2vLDMNsXBDRlunsi',1),
('ruchi','{bcrypt}$2a$10$TBbi9qF4NvnS66mS6wATZ.G3Y071lPnOlBVXW2vLDMNsXBDRlunsi',1);


--
-- Table structure for table `authorities`
--

CREATE TABLE `roles` (
  `user_id` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  UNIQUE KEY `authorities5_idx_1` (`user_id`,`role`),
  CONSTRAINT `authorities5_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `members` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Inserting data for table `roles`
--

INSERT INTO `roles`
VALUES
('varun','ROLE_EMPLOYEE'),
('ruchi','ROLE_EMPLOYEE'),
('varun','ROLE_MANAGER'),
('swati','ROLE_MANAGER'),
('swati','ROLE_ADMIN');


