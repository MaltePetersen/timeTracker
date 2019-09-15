
# timeTracker
This is an application to track work time.
## Foreword
It is my first application with the follwing technology stack: 
 - Angular2+ -> Frontend
 - Spring -> Backend
 ## Prerequisites
 Download and install beforehand: 
 
 - [NodeJS](https://nodejs.org/en/)
 - [Maven](https://maven.apache.org/)

## Installation
For an easier start I added an embedded H2-DB. It is also possible to use a MySql Server.
You just have to delete the #comments in the application.properties and switch them out with your own and you have to change the database driver dependency in the pom file.
### Backend
Go into the backend folder and execute following command: 

    mvnw spring-boot:run
    
At the first start of the backend a test user is created (user: testUser; password:123456789).
### Frontend
Go into the frontend folder and execute following commands: 

    npm install
    npm start

