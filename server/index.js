

 const fs = require("fs");

 const express = require("express");

 const app = express();
 app.get("/" , (req, res) => {
  return res.send("Hello From Homepage");
 });

 app.get("/about", (req, res) => {
  return  res.send("Hello from about page" + " Hey " + req.query.name + ' you are ' + req.query.age);
 })

  function myHandeler(req, res) {
  if(req.url === "/favicon.ico") return res.end();
     const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
     const myUrl = url.parse(req.url, true);
     
     fs.appendFile("log.txt", log, (err, data) => {
       switch(myUrl.pathname) {
       case "/" : 
       if(req.method == "GET") res.end("HomePage");
       break;
       case "/about" :
         const username = myUrl.query.myname;
         res.end(`Hi , ${username}`);
       break;
       case "/search" :
         const search = myUrl.query.search_query;
         res.end("Here are your result for " + search);

         case "/signup":
            if(req.method === "GET") res.end("This is a Signup form");
            else if(req.method === "POST") {
               // DB query
               res.end("Success")
            }
       default: 
       res.end("404 not found");
       }
     
      });
  
  }

  app.listen(8000, ()=> console.log("server started !"));


