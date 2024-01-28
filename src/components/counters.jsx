import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CountUp, { useCountUp } from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPerson } from '@fortawesome/free-solid-svg-icons'


const Counters = () => {
  return (
    <Container>
      <div className="row py-4">
        <div className="col-md-4 col-12">
          <div className="card-outer">
            <div className="icon">
              <FontAwesomeIcon icon={faPerson} size="3x"  />

            </div>
            <div className="count">

              <CountUp end={100} enableScrollSpy />
            </div>
            <h4>Total Projects</h4>
            <i className="bi bi-0-circle"></i>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card-outer">
            <div className="icon">
              <FontAwesomeIcon icon={faPerson} size="3x"  />

            </div>
            <div className="count">

              <CountUp end={500} enableScrollSpy  />
            </div>
            <h4>Total Projects</h4>
            <i className="bi bi-0-circle"></i>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card-outer">
            <div className="icon">
              <FontAwesomeIcon icon={faPerson} size="3x"  />

            </div>
            <div className="count">

              <CountUp end={20000} enableScrollSpy = {true}  />
            </div>
            <h4>Total Projects</h4>
            <i className="bi bi-0-circle"></i>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Counters