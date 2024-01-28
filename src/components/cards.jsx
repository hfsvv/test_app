import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';


const Cards = props => {
  return (
    <div className="col-md-4 col-12 p-2 ">

    <div className="card-outer">

                    <Card  style={{ width: '100' }} className='m-1 p-2 '>
                        <Card.Img variant="top" src={props.image} />
                        <Card.Body>
                            <Card.Title className='card-title'>{props.heading}</Card.Title>
                            <Card.Text>
                            {props.content}
                            </Card.Text>
                        </Card.Body>
                    </Card>
    </div>
                </div>
  )
}

export default Cards