# fightCorona

instructions to run the project for the first time

1. install node
2. install npm 
3.  install mysql ( https://dev.mysql.com/downloads/mysql/ ),
    set user name = "root" and password = "paytm@197", 
    create a database named "corona" , 
    create a table in this database with the query :

CREATE TABLE `patent_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(100) NOT NULL,
  `fathername` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `locality` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `state` (`state`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

4. run your application server by directing to the code folder and run the following command
  node app.js
  then open ( http://localhost:3000/ ) in any browser

Now your application is ready !!
