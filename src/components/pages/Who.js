import React from 'react';
import victor from '../images/don-photo.jpeg';
import rachel from '../images/joan-photo.jpeg';

export default function Who() {
  return (
    <div>
      <h1>How to contact us</h1>
        <p className='who-blurb'><b>Address:</b></p>
        <p className='who-blurb'>1/56 Mologa Road</p>
        <p className='who-blurb'>Heidelberg West</p>
        <p className='who-blurb'>Victoria   3081</p>
        <p className='who-blurb'>Australia</p>
        <br />
        <p className='who-blurb'><b>Landline:</b> +613 9458 2220</p>
        <p className='who-blurb'><b>Email:</b> pastrymaster@optusnet.com.au</p>
        <p className='who-blurb'><b>Website:</b> www.pastrymaster.com.au</p>
      <br />
      <h1>Who we are</h1>
      <div className='photo'>
      <img src={ victor } height={200} width={200} alt='victors alter-ego' />
    </div>
      <h2>Victor Hartig</h2>
      <h3>Managing Director</h3>
        <p className='who-blurb'>35 years of management in Food Manufacture and Renewable Energy</p>
        <p className='who-blurb'><b>Mobile:</b> 0403 525 118</p>
      <br />
      <div className='photo'>
      <img src={ rachel } height={200} width={200} alt='victors alter-ego' />
    </div>
      <h2>Rachel Brain</h2>
      <h3>Head of Sales and Marketing</h3>
        <p className='who-blurb'>30 years of experience in the Food Industry</p>
        <p className='who-blurb'><b>Mobile:</b> 0432 297 755</p>
    </div>
  );
}