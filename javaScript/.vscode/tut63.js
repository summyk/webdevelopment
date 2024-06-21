

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudo selector & more designing</title>
      <style>
          .container{
              border: 2px solid red;
              border-color: rgb(rgb(186, 159, 159));
              padding: 34px;
              margin: 34px;
              width: 666px;
          }
          a{
              text-decoration: none;
              color: black;
  
          }
          a:hover{
              color: rgb(68,3,3);
              background-color: rgb(198, 187, 161);
          }
          a:visited{
              color: rgb(67, 67, 12);
          }
          a:active{
              border-color: aqua;
  
          }
          .btn{
              border-color: crimson;
              border: 2px solid blue;
              padding: 6px;
              cursor: pointer;
              font-size: 10px;
              border-radius: 4px;
  
          }
          .btn:hover{
              color: rgb(rgb(220, 169, 169));
              background-color: rgb(187, 168, 127);
  
          }
          .btn:visited{
              color: green;
              background-color: rgb(130, 125, 114);
          }
  
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias quaerat dolorum corrupti? Nam minus culpa voluptates, animi et quos perspiciatis eaque quaerat! Id aspernatur laudantium, at corrupti natus ipsam quidem in aliquam eos quae dolores voluptatum exercitationem porro soluta!</p>
          <a href="http://google.com" class="btn" >read more</a>
          <button class="btn">contact us</button>
      </div>
      
  </body>
  </html>`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});