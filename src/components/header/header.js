import React from "react";
import "../styles/header.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Header(){

return(
    <div>
<header>
  <nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav navbar-right">
      <a class="nav-item nav-link" href="portfolio.html">Portfolio</a>
      <a class="nav-item nav-link" href="index.html">About Me</a>
      <a class="nav-item nav-link" href="contact.html">Contact</a>
     
      
    </div>
  </div>
</nav>
</header>
</div>
);

}