import Navbar from "../components/Navbar"
import {useNavigate} from 'react-router-dom'
import coffeeImage from '../assets/coffeeImage.png';
function Home(){
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate("/coffee");
  };

    return(
        <>
          <Navbar />
          <div className="CoffeeCard">
            <img src={coffeeImage} alt="Coffee" style={{ width: '300px', height: '200px' }} />
            <h1>Ready to embark on your coffee journey?</h1>
            <button onClick={handleNavigation}>Click me😃</button>
          </div>
        </>
    )


}
export default Home