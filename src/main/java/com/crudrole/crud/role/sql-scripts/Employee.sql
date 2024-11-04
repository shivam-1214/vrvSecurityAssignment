CREATE DATABASE  IF NOT EXISTS `Employee`;
USE `Employee`;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS employee_details;

CREATE TABLE employee_details (
  id INT AUTO_INCREMENT PRIMARY KEY ,
  first_name varchar(45) DEFAULT NULL,
  last_name varchar(45) DEFAULT NULL,
  email varchar(45) DEFAULT NULL
) ;

--
-- Data for table `employee`
--
INSERT INTO employee_details 
VALUES(null,'Swati','Garg','swati@brl.com'),
	(null,'Varun','Gupta','varun@brl.com'),
	(null,'Chirag','Gupta','chirag@brl.com'),
	(null,'Ruchi','Singla','ruchi@brl.com'),
	(null,'Aryan','Khanna','aryan@brl.com');
    
select * from employee_details;

