/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

const Individuals = () => {
  return (
    <div>
        {/* <!-- part 1 --> */}
        <div className="container">
            <div className="row">
                <div className="col-md-6 myhero">
                    <h1> The genius way <br/> to work <span> better</span> </h1>
                    <p> Calendly makes it easy to work smarter when you're<br/>
                        working solo. Meetinas. sessions. and appointments<br/>
                        become more efficient ways to achieve success<br/>
                        and
                        accomplish goals
                    </p>
                    <button type="button" className="btn btn-primary button2">Sign up for free</button>
                
        
                </div>

                <div className="col-md-6">
                    <img src="images/Calendly-page 2.webp" className="img-fluid"/>
                </div>
            </div>
        </div>


{/* <!-- part 2 --> */}

        <div className="container part2 myhero">
            <div className="row">
                <div className="col-md-6">
                    <img src="images/calendly - page 4.webp" className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <p> A CURATED CALENDAR</p>
                    <h1> Book up efficiently</h1>
                    <p> When invitees select a meeting slot from your schedule, <br/> they only see the times you're available, 
                        and only the length  <br/>and type of meeting you want to have. Your schedule fills up <br/>
                        efficientiv, and everyone avoids excess email exchanges
                    </p>
                </div>
            </div>
        </div>


 {/* <!-- Part 3 --> */}

        <div className="container">
            <div className="row">
                <div className="col-md-6 myhero">
                    <p> AUTOMATED NONSCATIONS & FOLLOW-UPS</p>
                    <h1> Work like you have a  <br/>personal assistant</h1>
                    <p> Because Calendiv automates administrative tasks like
                        sending reminder emails  <br/> and follow-ups, you can focus on
                        the work that builds your business and brings customers back for more
                    </p>
                </div>
                <div className="col-md-6">
                    <img src="images/Calendly-page 3.png" className="img-fluid"/>
                </div>
            </div>
        </div>


{/* <!-- Part 4          --> */}


        <div className="container">
            <div className="row">
                <div className="col-md-12 myhero">

                    <img src="images/milad-fakurian-E8Ufcyxz514-unsplash.jpg"  height="400px" width="100%"/>
                    <h1 className="part4-heading"> 
                        Find just-right plans <br/> for individuals and <br/>  small teams
                    </h1>

                    <button type="button" className="btn btn-primary button3">See our plans</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Individuals;