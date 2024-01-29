import Carousel from 'react-bootstrap/Carousel';
import image1  from '../assets/pexels-alex-green-5699475.jpg'
import image2  from '../assets/pexels-edmond-dantès-4344860.jpg'
import image3  from '../assets/pexels-polina-zimmerman-3747455.jpg'

function Carousal() {
  return (
    <Carousel fade>
      <Carousel.Item className='carousal-items'>
        <img src={image1} alt='' className='carousal-image' width= "100%"/>
   
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt='' className='carousal-image'  width= "100%"/>

        </Carousel.Item>
        <Carousel.Item>
        <img src={image2} alt='' className='carousal-image'  width= "100%"/>

      </Carousel.Item>  
    </Carousel>
  );
}

export default Carousal;