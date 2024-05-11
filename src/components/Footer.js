import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

function Footer() {
  return (
    <div className='footer container'>
        <div className='footer-section'>
           <p className='title'>RecipeBook.com</p>
           <p>Recipe Book is your go-to app for finding and saving delicious recipes. Explore a vast collection of recipes, from quick and easy meals to gourmet delights, and create your personalized cookbook with just a few clicks</p>
          <p>&copy; 2023 | All  Rights Reserved</p>
        </div>

        <div className='footer-section'>
           <p className='title'>Contact Us</p>
           <p><MdOutlineMailOutline/> recipebook@gmail.com</p>
          <p><FaPhoneAlt/>  +977 9807123049</p>
          <p><MdLocationPin/> Balkumari,Lalitpur</p>
        </div>

         <div className='footer-section'>
           <p className='title'>Socials</p>
           <p><FaFacebook/> Facebook</p>
          <p><FaXTwitter/>  X</p>
          <p><FaInstagram/> Instagram</p>
         </div>
      </div>
  )
}

export default Footer