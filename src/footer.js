import React from 'react';

const Footer = () => {
  
    const date = new Date();
  

    return (
        
        <div className='footer'>
          <h3 className='why'>
                    &copy; {date.getFullYear()} Copywrite content
                </h3>
        </div>
      )
};

export default Footer;
