var name = text("ame");
 alert('Hello, ' + name + '!');


 @media screen and (max-width:680px) {
   ul.topnav.responsive {position: relative;}
   ul.topnav.responsive li.icon {
     position: absolute;
     right: 0;
     top: 0;
   }
   ul.topnav.responsive li {
     float: none;
     display: inline;
   }
   ul.topnav.responsive li a {
     display: block;
     text-align: left;
   }


   function myFunction() {
       var x = document.getElementById("Topnav");
       if (x.className === "topnav") {
           x.className += " responsive";
       } else {
           x.className = "topnav";
       }
   }
