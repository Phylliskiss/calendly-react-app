/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'

const Enterprise = () => {
  return (
    <div>

{/* <!-- Part 1 --> */}
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center myhero">
                    <h1> <span>Way more </span> than a <br/> scheduling link </h1>

                    <p>
                        Standardize on the #1 scheduling platform
                         and <br/> deliver the power of Calendly across your entire<br/> organization.
                    </p>

                    <button type="button" className="btn btn-primary button2">Contact Sales</button>
                </div>
            </div>
        </div>


{/* <!-- Part 2  --> */}
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center myhero">
                <img src="images/adrien-olichon-RCAhiGJsUUE-unsplash.jpg" height="400px" width="100%"/>

                <h3 className="text-center myhero3"> Trusted by more than 50,000 of the  <br/> world's leading organizations</h3>

                <ul className="col-md-12 img-fluid d-flex justify-content-evenly myhero4">
                    <img src="images/end 1.png" height="20px" width="100px"/>
                    <img src="images/end2.png " height="20px" width="100px"/>
                    <img src="images/end3.png"  height="20px" width="100px"/>
                    <img src="images/end4.jpeg " height="30px" width="100px"/>
                    <img src="images/end5.png"  height="20px" width="100px"/>

                </ul>
            </div>
        </div>
    </div>
    

    

{/* <!-- Part 3  --> */}

    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card lastcards" style={{width: '18rem'}}>
                    <p className="mycaption"> Sales</p>
                    <img src="images/sales1.webp" className="card-img-top mypic" alt="..."/>
                    <div className="card-body">
                 
                    <p className="card-text cardtext2">Convert more leads and
                        prospects into meetings
                        and revenue. Easily book
                        demos and customer calls
                        without the back and forth.
                    </p>
                
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card lastcards" style={{ width: '18rem' }}>
                    <p className="mycaption"> Customer Sucess</p>
                    <img src="images/cs2.webp" className="card-img-top mypic" alt="..."/>
                    <div className="card-body">
                    
                    <p className="card-text cardtext2"> Deliver better support interactions and customer
                        consultations. Stay
                        connected with automated
                        reminders and follow-ups.</p>
                    
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card lastcards" style={{ width: '18rem' }}>
                    <p className="mycaption"> Recruiting</p>
                    <img src="images/recruit2.jpeg" className="card-img-top mypic" alt="..."/>
                    <div className="card-body">
                  
                    <p className="card-text cardtext2">Fill your candidate pipeline
                        and book more interviews
                        and recruiter screens with
                        easy, standardized
                        scheduling.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


{/* <!-- part 4  --> */}

    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center learn-more">
                <button type="button" className="btn btn-primary button2">Learn More</button>
            </div>
        </div>
    </div>
  
    
    </div>
  )
}

export default Enterprise;