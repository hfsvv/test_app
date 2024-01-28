import React from 'react'
import image3  from '../assets/pexels-sevenstorm-juhaszimrus-439416.jpg'
import Cards from '../components/cards'

const Services = () => {
    const data = [
        {
            "image":image3,
            "heading": "General Contracting",
            "content": "Managing and overseeing construction projects from start to finish"
        },
        {
            "image":image3,
            "heading": "General Contracting",
            "content": "Managing and overseeing construction projects from start to finish"
        },
        {
            "image":image3,
            "heading": "General Contracting",
            "content": "Managing and overseeing construction projects from start to finish"
        },
        {
            "image":image3,
            "heading": "General Contracting",
            "content": "Managing and overseeing construction projects from start to finish"
        },{
            "image":image3,
            "heading": "General Contracting",
            "content": "Managing and overseeing construction projects from start to finish"
        }
        ,{
            "image":image3,
            "heading": "General Contracting",
            "content": "Managing and overseeing construction projects from start to finish"
        }
    ]
    return (
        <div className="container">

            <div className="row my-4">
                    <h4 className='text-center'>Our Services</h4>
                    {data.map(res =>{
                       return (<Cards image = {res.image}  heading = {res.heading} content = {res.content}  />)})}
               {/* <Cards image = {image3} heading = {}/> */}
            </div>
        </div>
    )
}

export default Services