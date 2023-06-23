/* eslint-disable no-unused-vars */
import React from 'react'

const Index = () => {
  return (
    <>
         <div className="container">
            <div className="row">
                <div className="col-md-4 myhero">
                    <h1> Easy <br/>
                        scheduling<br/>
                        <span>ahead</span></h1> 

                    <p> Calendly is your scheduling automation platform for eliminating the back-and-forth emails for finding 
                        the perfect time — and so much more.</p>

                        
                      
                          <div className="input-group mb-3 ">
                            <input type="text" className="form-control myinput" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-outline-secondary myinput mybutton" type="button" id="button-addon2">Sign Up</button>
                          </div>
                    <h6> Create your free account. No credit card required.</h6>
                        
                </div>
                <div className="col-md-8">
                    <img src="images/Homepage-Hero-new.webp" className="img-fluid"/>
                </div>
            </div>
        </div>


        {/* <!-- simplified section  --> */}

        <div className="container-fluid mysimplified">
            <div className="row">
            <div className="col-md-12">
            <h2 className="text-center"> Simplified scheduling for more than <br/>
                <span> 10,000,000 </span> users worldwide</h2>

            </div>
            </div>
        </div>

        <div className="container-fluid mysimplified">
          <div>

            {/* <!-- object fit: contain/ cover property is really good for images that don't fit well --> */}
            <div className="col-md-12 d-flex justify-content-evenly">
            <img src="images/compass-logo-vector.png" style={{ height: '80px', width: '80px', objectFit: 'contain' }} className="img-fluid" />
            <img src="images/dropbox logo.png" style={{ height: '60px', width: '40px', objectFit: 'contain' }} className="img-fluid" />
            <img src="images/ebay2.png" style={{ height: '60px', width: '60px', objectFit: 'contain' }} className="img-fluid" />
            <img src="images/laz-y-boy.png" style={{ height: '80px', width: '100px', objectFit: 'contain' }} className="img-fluid" />
            <img src="images/twilio3.png" style={{ height: '80px', width: '80px', objectFit: 'contain' }} className="img-fluid" />

            </div>
            </div>
        </div>

        <div className="container-fluid mycreate  d-flex justify-content-evenly">
            <div className="row">
                <div className="col-md-4 mycreate2">
                        <h5>
                            <span className="badge bg-primary mybadge">1.</span> Create <br/> simple rules<br/>
                        </h5>

                        <p> Let Calendly know your<br/>
                            availability preferences and<br/>
                            it will do the work for you.
                        </p>

                </div>

                <div className="col-md-4 mycreate2">
                    <h4 >
                        <span className="badge bg-primary rounded-circle text-center">2.</span> Share your <br/>link<br/>
                    </h4>
                    <p> Send quests your Calendly<br/>
                        link or embed it on your<br/>
                        website.
                    </p>
                </div>

                <div className="col-md-4 mycreate2">
                    <h4 >
                        <span className="badge bg-primary">3.</span>  Get booked<br/>
                    </h4>

                    <p> 
                        They pick a time and the<br/>
                        event is added to your<br/>
                        calendar.
                    </p>
                </div>

            </div>
        </div>

    </>
  )
}

export default Index;
