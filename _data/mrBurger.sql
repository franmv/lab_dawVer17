#Autor: Francisco Maass Villarreal
#Matricula: A01136728
#Clase: Desarrollo de Applicaciones web
#Periodo: Verano 2017
#Profesor: MSc Alfredo Salazar Vélez
#Escuela: Instituto tecnológico y de estudios superoipres de Monterrey
#Campus: Monterrey

# QUERYs para la base de datos para MR Burger

# DB Name: mrBurger

CREATE TABLE Users (
	username VARCHAR(30) NOT NULL PRIMARY KEY,
	passwrd VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	firstname VARCHAR(50) NOT NULL,
	lastname VARCHAR(50) NOT NULL,
    age INT NOT NULL
);

CREATE TABLE Comments(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	comment TEXT NOT NULL,
	username VARCHAR(30) NOT NULL

);

CREATE TABLE Contacts(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(30) NOT NULL,
	type VARCHAR(30) NOT NULL
);

CREATE TABLE Specialties(
	code VARCHAR(2) NOT NULL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
    username VARCHAR(30) NOT NULL
);


INSERT INTO Users(username, passwrd, email, firstname, lastname, age)
VALUES  ('jugo', 'admin', 'jugo@mrburger.com',  'Julieta', 'Gomez Perez', 27),
		('rolo', 'admin', 'rolo@mrburger.com', 'Rodolfo', 'Lopez Bustamante', 34),
		('gasa', 'admin', 'gasa@mrburger.com', 'Andres', 'Garza Santos', 42),
        ('thoom1961', 'usrpwd1', 'thoom1961@jourrapide.com', 'Thomas', 'Omaley', 24),
        ('saps1963', 'usrpwd2', 'saps1963@einrot.com', 'Sara', 'Pattick', 43),
        ('osts1936', 'usrpwd3', 'osts1936@fleckens.hu', 'Oscar', 'Tunskten', 72),
        ('dinvis1952', 'usrpwd4', 'dinvis1952@teleworm.us', 'Daniel', 'Vinck', 25),
        ('turnot1972', 'usrpwd5', 'turnot1972@rhyta.com', 'Tobias', 'Notradame', 30);

INSERT INTO Comments(comment, username) 
VALUES  ('De las mejores hamburguesas que he probado!', 'thoom1961'),
        ('Tiene calidad, buen precio, exelente sabor y esta servida como tu la quieras, no necesitas nada mas.', 'saps1963'),
        ('Me muero por pedir nuevamente.', 'osts1936'),
        ('Como chef externo, solo puedo decir 10/10', 'dinvis1952'),
        ('Vine desde Chiapas solamente para probar estas hamburguesas.', 'turnot1972');

INSERT INTO Contacts(username, type) 
VALUES  ('jugo', 'Chef Ejecutivo'),
        ('rolo', 'Sous Chef'),
        ('gasa', 'Senior Chef');


INSERT INTO Specialties(code, name, username) 
VALUES  ('CS', 'Chef Saucier', 'jugo'),
        ('CG', 'Chef Grillardin', 'jugo'),
        ('CF', 'Chef Friturier', 'jugo'),
        ('CR', 'Chef Rotisseur', 'rolo'),
        ('CE', 'Chef Entremetier', 'rolo'),
        ('CP', 'Chef Poissonier', 'gasa'),
        ('CT', 'Chef Tournant', 'gasa'),
        ('GM', 'Garde Manager', 'gasa'),
        ('CB', 'Chef Bouchier', 'gasa'),
        ('PT', 'Chef Patissier', 'gasa');