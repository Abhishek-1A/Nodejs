
const http = require("http");
 const fs = require("fs");
 const url = require("url");

const myServer = http.createServer((req, res) => {
     const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
     const myUrl = url.parse(req.url, true);
     
     fs.appendFile('log.txt', log, (err, data) => {
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
      //   res.end("Hello from server Again !");
     });
   
});

myServer.listen(8000, () => console.log("server started"));