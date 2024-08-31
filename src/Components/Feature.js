import React from 'react';
import Featurebox from './Featurebox';
import '../style1.css';


function Feature() {
  return (
    <div id='features'>
      {/* <h1>FEATURES</h1> */}
      <div className='a-container'>
        <Featurebox image='/images/1.svg' title="Weightlifting" />
        <Featurebox image='/images/2.svg' title="Specific Muscle" />
        <Featurebox image='/images/3.svg' title="Diet" />
        <Featurebox image='/images/4.svg' title="Cardio Exercise" />
      </div>
    </div>
  );
}

export default Feature;
