import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CountUp, { useCountUp } from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPerson,faHouse,faDigging ,faSackDollar } from '@fortawesome/free-solid-svg-icons'


const Counters = () => {
  return (
    <Container>
      <div className="row py-4 counter">
        <div className="col-md-4 col-12">
          <div className="card-outers">
            <div className="icon">
              <FontAwesomeIcon icon={faHouse} size="3x"  />

            </div>
            <div className="count">

              <CountUp end={10000} enableScrollSpy />
            </div>
            <h4>Total Buildings</h4>
            <i className="bi bi-0-circle"></i>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card-outers">
            <div className="icon">
              <FontAwesomeIcon icon={faDigging} size="3x"  />

            </div>
            <div className="count">

              <CountUp end={30} enableScrollSpy  />
            </div>
            <h4>Years Of Experience</h4>
            <i className="bi bi-0-circle"></i>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card-outers">
            <div className="icon">
              <FontAwesomeIcon icon={faSackDollar} size="3x"  />

            </div>
            <div className="count">

              <CountUp end={20000} enableScrollSpy = {true}  />
            </div>
            <h4>Revenue Generated</h4>
            <i className="bi bi-0-circle"></i>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Counters