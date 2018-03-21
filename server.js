const express = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
})
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
  var now =new Date().toString();
  console.log(`${now}`);
  next();
});

// app.use((req,res,next)=>{
//   res.render("maintenance.hbs");
// });

app.get("/",(request,response)=>{
  response.render("home.hbs",{
    pageTitle:"Home Page",
    currentYear:new Date().getFullYear(),
    message:"home page. Test Application"
  });
});

app.get("/help",(request,response)=>{
  response.render("help.hbs",{
    pageTitle:"Help",
    message:"No Help available",
    currentYear:new Date().getFullYear()
  });
});

app.get("/about",(request,response)=>{
  response.render("about.hbs",{
    pageTitle:"About the website",
    currentYear:new Date().getFullYear()
  });
});

app.listen(port,()=>console.log(`server is up on port ${port}`));
