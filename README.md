# timeTracker
The Backend is written with the Spring Framework. 
The Frontend is written with Angular.
So you will need to set up both Frameworks to use this application.
For an easier start I added an embedded H2-DB. It is also possible to use an MySql Server.
You just have to delete the #comments in the application.properties and swith out the database dependency in the pom file.
To start the Spring application use the command in the directory backend ´mvnw spring-boot:run´. 
Mac Os or Linux might be a little different(maybe like this: './mvnw spring-boot:run')
For the angular application you need to install npm first.  
To start the Angular application just use 'npm install' and after that 'ng serve'.

