import React from 'react';

export default function Delivery() {
  return (
    <div>
      <h1>Melbourne Metro Delivery</h1>
      <p className='delivery-blurb'>
        We deliver to Melbourne Metro areas from Monday to Friday.
        Contact us to determine which day of the week we deliver to your area.  
      </p>
      <br />
      <h1>Not based in Melbourne Metro?</h1>
      <p className='delivery-blurb'>
        We have a number of distributor partners who may deliver to your area within Victoria.
      Type in your address here and we’ll show you who to contact to deliver to you:
      </p>
      {/* Add Form here */}
    </div>
  );
}