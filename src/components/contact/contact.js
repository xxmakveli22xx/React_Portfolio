import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Contact(){
    return(

        <div class= "container">
       
        <h1>Contact Me</h1>
        <form>
           <div class="form-group">
                <label for="formGroupExampleInput">Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" required="Name"></input>
               
           </div>
              <div class="form-group">
                 <label for="email_info">Email</label>
                 <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="youremail@email.com" required="Email"></input>
                
              </div>
          <div class="form-group">
              <label for="messageInp">Message</label>
               <textarea class="form-control" id="messageInp" rows="3" placeholder="Please enter in your message here. " required></textarea>
          </div>
           <button class = "btn btn-primary btn-lg"submit>Submit</button>
        </form>

     </div>  
    );
}
