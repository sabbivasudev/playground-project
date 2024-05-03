import bulbOnImage from '../.././public'
import bulbOffImage from '../../public'

function Bulb(){
    const [isOn, setIsOn] = useState(false);
    const toggleBulb = () => {
      setIsOn(!isOn);
    };
    return (
      <div>
        {/* Display the bulb image based on the isOn state */}
        <img src={isOn ? "Bulb on" : "BulbOff"} alt={isOn ? 'Bulb is ON' : 'Bulb is OFF'} />
        <button onClick={toggleBulb}>{isOn ? 'Turn Off' : 'Turn On'}</button>
      </div>
    );
  }
export default Bulb;