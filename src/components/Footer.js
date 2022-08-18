import React from 'react';

const Footer = () => {
  return (
    <div id='contact'>
      <h3 className='footer-section'>Contact Me!</h3>
      <div className='footer-section socials'>
        <a href='https://github.com/sf200212345'><i class="fa-brands fa-github"></i></a>
        <a href='https://www.instagram.com/sf200212345/'><i class="fa-brands fa-instagram"></i></a>
        <a href='https://www.linkedin.com/in/sf200212345/'><i class="fa-brands fa-linkedin"></i></a>
      </div>
      <div className='footer-section'>
        <a href='tel:7344922988'><p>(734)-492-2988</p></a>
        <a href='mailto:sf200212345@gmail.com'><p>sf200212345@gmail.com</p></a>
        <a href='mailto:stevefan@umich.edu'><p>stevefan@umich.edu</p></a>
      </div>
    </div>
  );
};

export default Footer;