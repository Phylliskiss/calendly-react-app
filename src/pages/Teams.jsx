/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

const Teams = () => {
  return (
    <div>
{/* <!-- Part 1 --> */}
        <div className="container">
            <div className="row">
                <div className="col-md-6 myhero">
                    <h1> <span>Power up </span> your <br/> teams</h1>

                    <p> Calendly gives you control over team scheduling with a
                        standardized,<br/> scalable process. It's secure, easy to
                        monoce. encinteorotes wit vour <br/>teams 
                        ravorite tOols, so you can get evervone working as
                        efficientiv<br/> and effectivelv as possible</p>

                        <button type="button" className="btn btn-outline-primary btn-lg mybutton4">Start for free </button>
                        <button type="button" className="btn btn-outline-primary btn-lg mybutton5">Contact Sales</button>

                </div>
                <div className="col-md-6">

                    <img src="images/Enterprise 1.png" className="img-fluid image1"/>
                </div>
            </div>
        </div>
    
{/* <!-- Part 2 --> */}

        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center myhero">
                    <h1> Streamline tasks, extend team <br/> reach</h1>
                </div>
            </div>
        </div>

{/* <!-- part 3 --> */}

        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <img src="images/enterprise2.png" className="img-fluid"/>
                </div>

                <div className="col-md-6 myhero">
                    <p><span>AUTOMATED ASSIGNMENT </span></p>
                    <h3> Control how your team gets<br/> booked</h3>

                    <p> 
                        With Calendly, you can offer sessions that are a few minutes
                        or<br/> a few hours, for one invitee or a group. Automated round-
                        robin,<br/> Tirst-avaldole, or geography-based assignments let
                        voU easilv<br/> divvv up meetinas in an wav that works for voul
                        team memeers
                    </p>
                </div>
            </div>
        </div>

{/* <!-- Part 4 --> */}
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center myhero">
                    <p> <span> SOLUTIONS</span></p>
                    <h3> The right Calendly for the work you do</h3>
                    
                </div>
            </div>
        </div>

{/* <!-- part 5 --> */}
        <div className="container mycards">
            <div className="row">
                <div className="col-md-3">

                    <div className="card mycard1" style={{width: '18rem'}}>
                        <img src="images/sales.avif" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Sales</h5>
                          <p className="card-text">Get to vour best leads faster.</p>
                          <a href="#" className="btn btn-primary">Learn more</a>
                        </div>
                      </div>
                </div>

                <div className="col-md-3 mycard1">
                    <div className="card"style={{width: '18rem'}}>
                        <img src="images/recruit.avif" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Recruitment</h5>
                          <p className="card-text">Less emailing, more closing</p>
                          <a href="#" className="btn btn-primary">Learn more</a>
                        </div>
                      </div>
                </div>

                <div className="col-md-3 mycard2">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="images/success.avif" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Customer Success</h5>
                          <p className="card-text">Connect with customers wher
                            it matters</p>
                          <a href="#" className="btn btn-primary">Learn more</a>
                        </div>
                      </div>
                </div>

                <div className="col-md-3 mycard1">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="images/education.avif" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Education</h5>
                          <p className="card-text">Boost student success</p>
                          <a href="#" className="btn btn-primary">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Teams;