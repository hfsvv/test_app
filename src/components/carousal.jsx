import Carousel from 'react-bootstrap/Carousel';
import image1  from '../assets/wallpaer1.jpg'
import image2  from '../assets/wallpaper2.jpg'
import image3  from '../assets/wallpaper3.jpg'

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