#Autor: Francisco Maass Villarreal
#Matricula: A01136728
#Clase: Desarrollo de Applicaciones web
#Periodo: Verano 2017
#Profesor: MSc Alfredo Salazar Vélez
#Escuela: Instituto tecnológico y de estudios superoipres de Monterrey
#Campus: Monterrey

# QUERYs para la base de datos para MR Burger

# DB Name: MrBurger

CREATE TABLE Users (
	userName VARCHAR(30) NOT NULL PRIMARY KEY,
	userPass VARCHAR(50) NOT NULL,
	userEmail VARCHAR(50) NOT NULL,
	userFirstname VARCHAR(50) NOT NULL,
	userLastname VARCHAR(50) NOT NULL 
);

CREATE TABLE Comments(
	comID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	comContent TEXT NOT NULL,
	userName VARCHAR(30) NOT NULL

);

CREATE TABLE Contacts(
	contactID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	contactFirstname VARCHAR(50) NOT NULL,
	contactLastname VARCHAR(50) NOT NULL, 
	contactAge INT NOT NULL,
	contactType VARCHAR(30) NOT NULL,
	contactSpecialties VARCHAR(30)
);

CREATE TABLE Specialties(
	specCode VARCHAR(2) NOT NULL PRIMARY KEY,
	specName VARCHAR(30) NOT NULL
);


INSERT INTO Contacts(contactFirstname, contactLastname, contactAge, contactType)
VALUES  ('Julieta', 'Gomez Perez', 27, 'Chef Ejecutivo'),
		('Rodolfo', 'Lopez Bustamante', 34, 'Sous Chef'),
		('Andres', 'Garza Santos', 42, 'Senior Chef');



    "especialidad" : "Chef Saucier",
    "clave" : "CS"
    "especialidad" : "Chef Grillardin",
    "clave" : "CG"
    "especialidad" : "Chef Friturier",
    "clave" : "CF"


    "especialidad" : "Chef Rotisseur",
    "clave" : "CR"
    "especialidad" : "Chef Entremetier",
    "clave" : "CE"


    "especialidad" : "Chef Poissonier",
    "clave" : "CP"
    "especialidad" : "Chef Tournant",
    "clave" : "CT"
    "especialidad" : "Garde Manager",
    "clave" : "GM"
    "especialidad" : "Chef Bouchier",
    "clave" : "CB"
    "especialidad" : "Chef Patissier",
    "clave" : "PT"