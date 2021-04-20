# webapp

Test using Postman:
get - http://localhost:5000/api/v1/customer
delete - http://localhost:5000/api/v1/customer/5
get by id -h ttp://localhost:5000/api/v1/customer/1
post - http://localhost:5000/api/v1/customer - body add
put - thtp://localhost:5000/api/v1/customer/3 - body

Database
Add the credentials

CREATE TABLE `Customer` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

Data to be inserted
1	John	Doe	johndoe@gmail.com	1234567890	2019-11-19 03:30:30	2021-04-20 08:07:30
2	Jane	Doe	janedoe@gmail.com	9876543210	2019-11-19 03:35:30	2021-04-20 08:07:35
