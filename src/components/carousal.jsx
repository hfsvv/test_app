import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image1  from '../assets/pexels-alex-green-5699475.jpg'
import image2  from '../assets/pexels-edmond-dantès-4344860.jpg'
import image3  from '../assets/pexels-polina-zimmerman-3747455.jpg'

function Carousal() {
  return (
    <Carousel>
      <Carousel.Item className='carousal-items'>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={image1} alt='' className='carousal-image' width= "100%"/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt='' className='carousal-image'  width= "100%"/>

        {/* <ExampleCarouselImage text="Second slide" /> */}
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <img src={image2} alt='' className='carousal-image'  width= "100%"/>

{/* <ExampleCarouselImage text="Second slide" /> */}
{/* <Carousel.Caption>
  <h3>Second slide label</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption> */}
      </Carousel.Item>  
    </Carousel>
  );
}

export default Carousal;