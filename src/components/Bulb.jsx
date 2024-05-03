import React, { useState } from 'react';
// // Function to turn on the bulb
// function turnOnBulb() {
//     // Simulate turning on the bulb (you can replace this with actual code to control a physical bulb)
//     console.log('Bulb is ON');
    
//     // Wait for 30 seconds
//     setTimeout(() => {
//         // Turn off the bulb after 30 seconds
//         turnOffBulb();
//     }, 30000); // 30 seconds = 30000 milliseconds
// }
// // Function to turn off the bulb
// function turnOffBulb() {
//     // Simulate turning off the bulb (you can replace this with actual code to control a physical bulb)
//     console.log('Bulb is OFF');
// }

function Bulb(){
    const [isOn, setIsOn] = useState(false);
    const toggleBulb = () => {
      setIsOn(!isOn);
    };
    return (
      <div>
        <div>{isOn ? 'Bulb is ON' : 'Bulb is OFF'}</div>
        <button onClick={toggleBulb}>{isOn ? 'Turn Off' : 'Turn On'}</button>
      </div>
    );
  }
export default Bulb;