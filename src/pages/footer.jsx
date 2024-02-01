import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <div class="container my-4">
      <div class="row">
        <div className="col-md-6 col-12">
          <div className="address">
            <h5>Baitullah Projects Services</h5>
            <div className="address-details">
              <p>
                Office 702  Technique Building, <br />
                P.O 55743, <br />
                Salah Al Din, <br />
                Dubai, United Arab Emirates <br />
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className=" my-2">
          <h5>Follow Us</h5>
          <div className="brand-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faXTwitter} />

          </div>
          </div>

        </div>
        <div class="col-md-12">
          <footer class="py-2 footer">

            <p class="text-center "> Copyright © 2022 Bistullah Project Services</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer