const express = require("express");
const users = require("./MOCK_DATA.json")
const app=express();
const PORT = 8000;

// ROUTES

// GET /users - HTML DOCUMENT RENDER 
app.get("/users" , (req,res) => {
    const html = `
    <ul>
     ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})
//GET /api/users - LIST all users -DONE
 app.get("/api/users", (req,res) => {
    return res.json(users);
 });
//  GET /api/users/1 - Get the user with ID 1  -DONE 
 app
 .route("/api/users/:id")
 .get((req, res) => {
    const id= Number(req.params.id);
    const user= users.find((user) => user.id === id);
    return res.json(user);
 })
 .patch((req,res) =>{
    // Edit user with id
   return res.json({status: "pending"});
 });
   .dele((req,res) => {
    return res.json({status: "pending"});
 })
 
 app.post("api/users", (req,res) => {

 })

// POST /api/users - Create new users

app.listen(PORT, ()=> console.log(`Server stared at PORT: ${PORT}`));