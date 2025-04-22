import React from 'react'
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import '../css/Footer.css'


const Footer = () => {
  return (
    <div>
      <hr />
      <div className='containerFooter'>
        <a href=""><TiSocialInstagram  className='icon'/></a>
        <a href=""><TiSocialLinkedin  className='icon'/></a>
        <a href=""><TiSocialGithub  className='icon'/></a>
        <a href=""><TiSocialFacebook className='icon'/></a>
        
        
        
        
      </div>
        
    </div>
  )
}

export default Footer