import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const Aboutus = ({childRef}) => {
  return (
    <Container ref={childRef}>
        <div className="row py-4">
            <h3 className='text-center' >About Us</h3>
            <div className="col-md-6 my-4">

                <h4 className='py-3'>Our Commitment to Excellence</h4>

                <div className="content">
                At the core of our philosophy is an unwavering commitment to excellence. From groundbreaking to the final touch, we strive for perfection in every facet of our projects. Our seasoned team of professionals, comprising architects, engineers, and skilled craftsmen, work collaboratively to ensure that every structure we build reflects the highest standards of quality and craftsmanship.
                </div>

            </div>
            <div className="col-md-6 my-4" >

                <h4 className='py-3'>Innovation that Shapes Tomorrow</h4>

                <div className="content">
                Embracing cutting-edge technology and sustainable practices, we are at the forefront of innovation in the construction industry. Our projects not only meet the needs of today but are also designed to withstand the challenges of tomorrow. Forward-thinking and environmentally conscious, we take pride in shaping a sustainable future through our construction endeavors.
                </div>

            </div>
            <div className="col-md-6 my-4">

                <h4 className='py-3'>Diverse Portfolio, Unmatched Expertise</h4>

                <div className="content">
                Our diverse portfolio encompasses a wide range of construction projects, including residential, commercial, and industrial spaces. Each project is a testament to our versatility and adaptability, showcasing our ability to deliver outstanding results in various sectors. With years of industry expertise, we possess the knowledge and skills to tackle projects of any scale and complexity </div>

            </div>
            <div className="col-md-6 my-4">

                <h4 className='py-3'>Client-Centric Approach</h4>

                <div className="content">
                At Bistullah Projects, we understand that every project is unique, and every client has distinct needs. Our client-centric approach ensures that we not only meet but exceed expectations. We prioritize open communication, transparency, and collaboration throughout the entire construction process, fostering strong relationships with our clients
                  </div>

            </div>
        </div>
    </Container>
  )
}

export default Aboutus