// import mypic from "./images/Pete_portrait.jpeg";
import React from "react";
import "react-bootstrap/Navbar";
import "react-bootstrap/Nav";


 export default function Main() {
 
      return (
    
    <div>
       <main class="container" >
          <h1 >Pete Hernandez</h1>
        <section class="row">
            {/* <img src={mypic} class="img_pete" alt="Pete_portrait" style="padding: 10px; padding-right: 10px;"/> */}
               <div class="col-sm-8">
                  <p >
                  I have always wanted to be a in the IT world. Ever since I can remember I was always intrigued with computers.
                  My passion for computers started many years ago when in our class we were able to sit down by the computers
                  and turn them on. Low and behold the first thing that came on the screen was the classic Apple McIntosh logo followed by
                  me having to put in a floppy disk just to play one of the greatest games ever Oregon Trail. From that point on I was hooked. 

                  However, my path as guided me down a different direction. I have spent most of my career in the finanical world. I started out back in 2004 as Personal Banker 
                  and eventually working my way up to a finanical advisor. I have spent years even decades working on my craft yet still with the 
                  burning desire to get back into computer programming. Throughout my college career I have learned several langagues starting back in the late
                  90's such as Turbo Pascal, C, C++, Java. Now I have come full circle and started to fulfill my dream of starting to a career in computer programming.
                  Welcome to my journey!</p>
               </div>
             
         </section>
        </main>
    </div>
       
      );
   
  }