import React from "react";
import { Link } from 'react-router-dom';
import '../Styling/Nav.css';




//class -> className
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm  navbar-dark" >
            <ul className="navbar-nav">
                <li className="nav-item" >
                  
                    <img src='https://static.fmgsuite.com/media/images/c955c45b-c2e3-4d4c-91a6-317d7b10e6ee.jpg' style={{ height: 80, width: 170, marginLeft:10 }}></img>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home" style={{  marginTop:20, marginLeft:100, fontSize:14,color:"white"}}><b>HOME</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home" style={{  marginTop:20,marginLeft:20, fontSize:14,color:"white" }}><b>ABOUT</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home" style={{  marginTop:20,marginLeft:20, fontSize:14,color:"white" }}><b>SERVICES</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home" style={{  marginTop:20,marginLeft:20, fontSize:14,color:"white" }}><b>PROJECTS</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home" style={{  marginTop:20,marginLeft:20, fontSize:14,color:"white" }}><b>OUR BLOG</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home" style={{  marginTop:20,marginLeft:20, fontSize:14, color:"white" }}><b>CONTACTS</b></Link>
                </li>
                <li ><a style={{  marginTop:20,marginLeft:150,fontSize:30, color:'#fff'}}  href="#" class="fa fa-twitter-square"   id="twit"></a></li>
                <li><a style={{  marginTop:20,marginLeft:20,fontSize:30, color:'#fff'}} href="#" class="fa fa-youtube"></a></li>
                <li><a style={{  marginTop:20,marginLeft:20,fontSize:30,color:'#fff'}} href="#" class="fa fa-rss"></a></li>
                <li><a style={{  marginTop:20,marginLeft:20,fontSize:30,color:'#fff'}} href="#" class="fa fa-facebook-square"></a></li>
                <li><a style={{  marginTop:20,marginLeft:20,fontSize:30,color:'#fff'}} href="#" class="fa fa-google-plus-square"></a></li>
            </ul>
        </nav>
       
    )
}