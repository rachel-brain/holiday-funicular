import React from 'react';

export default function Testimonials() {
  return (
    <div>
      <h1>Don't just take our word for it!</h1>
      {/* Add logo */}
      <h2>J and M Catering, Ballarat</h2>
      <p className='testimonial-blurb'>
        "Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur.
        In felis nisl, luctus non ante euismod, tincidunt bibendum mi." - Mark
      </p>
      <br />
      {/* Add logo */}
      <h2>Sweet by Nature, Heidelberg West</h2>
      <p className='testimonial-blurb'>
        "Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur." 
        - Anna
      </p>
      <br />
      {/* Add logo */}
      <h2>Food for Fingers, Campbellfield</h2>
      <p className='testimonial-blurb'>
        "Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur.
        In felis nisl, luctus non ante euismod, tincidunt bibendum mi." - Markus
      </p>
    </div>
  );
}