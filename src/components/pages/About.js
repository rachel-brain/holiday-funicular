import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p className='about-blurb' >Since 1997, Pastry Master has been perfecting 
        a range of sweet, savoury and puff pastry recipes for all budgets.  
        Located in Melbourne, we make the pastry so you can focus on creating 
        your masterpieces.  
      </p>
      <br />
      <p className='about-blurb' >When you are ready, all you need to do is thaw, 
        unroll and create.
      </p>
      <br />
      <br />
      <h1>Our Secret</h1>
      <ul className='about-list'>
        <li>Simple ingredients</li>
        <li>Sourced locally</li>
        <li>Consistent quality</li>
        <li>Manufactured 4 days per week</li>
        <li>Fast turn-around on order</li>
        <li>Once thawed, our pastry has a 7-day shelf-life</li>
      </ul>
    </div>
  );
}