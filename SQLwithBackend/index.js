// //import { faker } from '@faker-js/faker';

// // CJS
// const { faker } = require('@faker-js/faker');

// let  createRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// };
// console.log(createRandomUser);

// // export const users = faker.helpers.multiple(createRandomUser, {
// //   count: 5,
// // });



// Import faker
// const { faker } = require('@faker-js/faker');

// // Function to create a random user
// let createRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(), // Using userName() for compatibility
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// };

// // Generate multiple users
// const users = Array.from({ length: 5 }, createRandomUser);

// // Log the users to the console
// console.log(users);




// const { faker } = require('@faker-js/faker');
// const mysql = require("mysql2");



// const connection = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'Learn_App',
//     password:'root',
//   });

//   try{
//     connection.query("SHOW TABLES",(err , result)=>{
//         if(err)throw err;
//         console.log(result);
//       });
//   }catch(err){
//     console.log(err);
//   }

// // Function to create a random user
// let getRandomUser = () => {
//   return {
//     Id: faker.string.uuid(),
//     username: faker.internet.userName(), // Using userName() for compatibility
//     email: faker.internet.email(),
//     password: faker.internet.password(),
    
//   };
// };

// // Generate multiple users
// const users = Array.from({ length: 5 }, getRandomUser);

// // Log the users to the console
// console.log(users);







// const { faker } = require('@faker-js/faker');
// const mysql = require("mysql2/promise");

// (async () => {
//   try {
//     const connection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       database: 'Learn_App',
//       password: 'root',
//     });

//     const [result] = await connection.query("SHOW TABLES");
//     console.log(result);

//     let getRandomUser = () => {
//       return {
//         Id: faker.string.uuid(),
//         username: faker.internet.userName(), 
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//       };
//     };

//     const users = Array.from({ length: 5 }, getRandomUser);
//     console.log(users);

//     await connection.end();
//   } catch (err) {
//     console.error(err);
//   }
//   connection.end();
// })();








// const { faker } = require('@faker-js/faker');
// const mysql = require("mysql2/promise");

// (async () => {
//   try {
//     const connection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       database: 'Learn_App',
//       password: 'root',
//     });

//     const [result] = await connection.query("SHOW TABLES");
//     console.log(result);
//     console.log(result.length);

//     let getRandomUser = () => {
//       return {
//         Id: faker.string.uuid(),
//         username: faker.internet.userName(), 
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//       };
//     };

//     const users = Array.from({ length: 5 }, getRandomUser);
//     console.log(users);

//     await connection.end();
//   } catch (err) {
//     console.error(err);
//   }
// })();







// const { faker } = require('@faker-js/faker');
// const mysql = require("mysql2/promise");
// let q = "INSERT INTO user (id ,username , email, password)values(?, ?, ?, ?)";
// let user = ["123", "123_newuser","abc@gmail.com","abc"];

// (async () => {
//   try {
//     const connection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       database: 'Learn_App',
//       password: 'root',
//     });

//     const [result] = await connection.query("SHOW TABLES");
//     console.log(result);
//     console.log(result.length);

//     let getRandomUser = () => {
//       return {
//         Id: faker.string.uuid(),
//         username: faker.internet.userName(), 
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//       };
//     };

//     const users = Array.from({ length: 5 }, getRandomUser);
//     console.log(users);

//     await connection.end();
//   } catch (err) {
//     console.error(err);
//   }
// })();




// Import required modules
// const { faker } = require('@faker-js/faker');
// const mysql = require("mysql2/promise");

// // SQL query for inserting a user
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";

// (async () => {
//   try {
//     // Establish a connection to the database
//     const connection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       database: 'Learn_App',
//       password: 'root',
//     });

//     console.log("Connected to the database!");

//     // Display the list of tables for verification
//     const [tables] = await connection.query("SHOW TABLES");
//     console.log("Tables in the database:", tables);

//     // Function to generate a random user using Faker
//     let getRandomUser = () => {
//       return {
//         id: faker.string.uuid(),
//         username: faker.internet.userName(), 
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//       };
//     };

//     // Generate an array of 5 random users
//     const users = Array.from({ length: 5 }, getRandomUser);
//     console.log("Generated Users:", users);

//     // Insert each user into the database
//     for (let user of users) {
//       const [result] = await connection.query(q, [user.id, user.username, user.email, user.password]);
//       console.log(`Inserted User ID: ${user.id} - Affected Rows: ${result.affectedRows}`);
//     }

//     // Close the database connection
//     await connection.end();
//     console.log("Database connection closed!");
//   } catch (err) {
//     console.error("Error:", err);
//   }
// })();

// const express = require("express");
// const app = express();
// const { faker } = require("@faker-js/faker");
// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'learn_app', 
//   password: 'root',
// });

// let getRandomUser = () => {
//   return [
//     faker.internet.userName(),  
//     faker.internet.email(),      
//     faker.internet.password(),  
//   ];
// };



// app.get("/",(req , res)=>{
//   let q = `SELECT count(*) from users`;
//   try{
//     connection.query(q,(err,result )=>{
//       if(err) throw err;
//       console.log(result);
//       res.send(result);
//     });
   
//   }catch(err){
//     console.log(err);
//     res.send("some error in db");
//   }
//   res.send("home page");
// });
 

// app.listen(3000,()=>{
//   console.log("app is listong 3000 port ");
// })



// // // Query to insert multiple users
// // let q = "INSERT INTO users (id, username, email, password) VALUES ?";  

// // // Generate 100 random users
// // let data = [];
// // for (let i = 1; i <= 100; i++) {
// //   data.push(getRandomUser());
// // }

// // // Connect and insert the data
// // connection.connect((err) => {
// //   if (err) throw err;
// //   console.log("Connected to MySQL!");

// //   // Insert all users at once
// //   connection.query(q, [data], (err, result) => {
// //     if (err) throw err;
// //     console.log(`${result.affectedRows} users inserted!`);
    
// //     // Close the connection
// //     connection.end();
// //   });
// // });





const express = require("express");
const app = express();
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'learn_app', 
  password: 'root',
});

let getRandomUser = () => {
  return [
    faker.internet.userName(),  
    faker.internet.email(),      
    faker.internet.password(),  
  ];
};

app.get("/", (req, res) => {
  let q = `SELECT count(*) as userCount FROM users`;  // Added alias for better response
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["userCount"];
      //res.send("success");
      res.render("home.ejs",{count});
    });
  } catch (err) {
    console.log(err);
     res.send("some error in db");
   
  }
  
});

//show route
app.get("/user",(req , res)=>{
  // res.send("success");
  let q = `SELECT * FROM users`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      //res.send(result);
      res.render("showusers.ejs");
      
    });
  } catch (err) {
    console.log(err);
     res.send("some error in db");
   
  }
})

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
