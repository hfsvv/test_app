import React from 'react'
import image3  from '../assets/pexels-sevenstorm-juhaszimrus-439416.jpg'
import Cards from '../components/cards'
import image4  from '../assets/image-1.jpg'
import image5  from '../assets/image-2.jpg'
import image6  from '../assets/image-3.jpg'
import image7  from '../assets/image-4.jpg'
import image8  from '../assets/image-5.jpg'
import image9  from '../assets/image-6.jpg'





const Services = () => {
    const data = [
        {
            "image":image3,
            "heading": "General Contracting",
            "content": "Managing and overseeing construction projects from start to finish"
        },
        {
            "image":image4,
            "heading": "Design-Build Services",
            "content": "Providing both design and construction services under a single contract"
        },
        {
            "image":image5,
            "heading": "Pre-Construction Services",
            "content": "Value engineering to optimize project costs"
        },
        {
            "image":image6,
            "heading": "Residential Construction",
            "content": "Building single-family homes, multi-family residences, or custom homes"
        },{
            "image":image7,
            "heading": "Commercial Construction",
            "content": "Constructing offices, retail spaces, warehouses, and other commercial buildings"
        }
        ,{
            "image":image8,
            "heading": "Industrial Construction",
            "content": "Building facilities for manufacturing, processing, or industrial purposes"
        }
    ]
    return (
        <div className="container">

            <div className="row my-4">
                    <h3 className='text-center'>Our Services</h3>
                    {data.map(res =>{
                       return (<Cards image = {res.image}  heading = {res.heading} content = {res.content}  />)})}
               {/* <Cards image = {image3} heading = {}/> */}
            </div>
        </div>
    )
}

export default Services