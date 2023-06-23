/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="container">
            <div className="row">
                <div className="col-md-3 myhero2">
                    <h3> Easy<br/> <span>ahead </span></h3>
                    <p> We take the work out of connecting with others
                        so vou can accomplish more.</p>
                 <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="English" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"></button>
                 </div>
         
        </div>

                <div className="col-md-3  myhero2">

                    <h3> About</h3>
                    <p> About Calendly</p>
                    <p> Contact Sales</p>
                    <p>News Room </p>
                    <p>Careers </p>
                    <p> Security</p>
                </div>


                <div className="col-md-3  myhero2">
                    <h3> Solutions</h3>
                    <p> Customer Success</p>
                    <p>  Sales</p>
                    <p>Recruiting </p>
                    <p>Education </p>
                    <p> Marketing</p>
                </div>


                <div className="col-md-3  myhero2">
                    <h3> Popular Features</h3>
                    <p> Embed Calendly</p>
                    <p>  Availability</p>
                    <p>Sending Notifications</p>
                    <p>Using Calendly Mobile</p>
                    
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Footer
