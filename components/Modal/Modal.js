"use client"
import React, { useState } from 'react';
import styles from './Modal.module.css';
import { FaInfoCircle, FaCalendarAlt } from 'react-icons/fa';
import { ImCross } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import Image from 'next/image';


const ModalComponent = ({ car, pick, drop, pickDate, dropDate, carImg, isOpen, setIsOpen }) => {

    // const showData = () => {
    //     console.log(car+" "+pick+" "+drop+" "+dropDate+" "+pickDate);
    // }

    console.log(carImg);

    return (
        <>
            <div className={styles.modal}>
            <div>

                {/* COMPLETE REGISATRATION HEADING */}
                <div className={styles.top_heading}>
                    <span>COMPLETE REGISTRATION</span>
                    <span style={{cursor:"pointer"}}><ImCross /></span>
                </div>

                {/* UPON COMPLETION DESCRIPTION */}
                <div className={styles.upon_completion}>
                    <div className={styles.div1}><FaInfoCircle style={{marginRight:"5px"}}/>Upon completing this reservation enquiry, you will receive:</div>
                    <div className={styles.div2}>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</div>
                </div>


                <div className={styles.booking_desc}>
                    <div>
                        <h2 style={{color:"#FF4D30"}}>Location & Date</h2>


                        <div style={{marginTop:"30px"}}>
                            <div>
                                <span style={{color:"gray", fontSize:"18px"}}><FaCalendarAlt /></span>
                                <span style={{fontWeight:"bold", fontSize:"18px", marginLeft:"10px"}}>Pick-Up Date & Time</span>
                            </div>
                            <div>
                                <span style={{color:"gray", marginLeft:"30px"}}>{pickDate} / </span>
                                <input type="time" />
                            </div>
                        </div>
                        <div style={{marginTop:"30px"}}>
                            <div>
                                <span style={{color:"gray", fontSize:"18px"}}><FaCalendarAlt /></span>
                                <span style={{fontWeight:"bold", fontSize:"18px", marginLeft:"10px"}}>Pick-Up Date & Time</span>
                            </div>
                            <div>
                                <span style={{color:"gray", marginLeft:"30px"}}>{pickDate} / </span>
                                <input type="time" />
                            </div>
                        </div>
                        <div style={{marginTop:"30px"}}>
                            <div>
                                <span style={{color:"gray", fontSize:"18px"}}><MdLocationOn /></span>
                                <span style={{fontWeight:"bold", fontSize:"18px", marginLeft:"10px"}}>Pick-Up Location</span>
                            </div>
                            <div style={{color:"gray", marginLeft:"30px"}}>{pick}</div>
                        </div>
                        <div style={{marginTop:"30px"}}>
                            <div>
                                <span style={{color:"gray", fontSize:"18px"}}><MdLocationOn /></span>
                                <span style={{fontWeight:"bold", fontSize:"18px", marginLeft:"10px"}}>Drop-off Location</span>
                            </div>
                            <div style={{color:"gray", marginLeft:"30px"}}>{drop}</div>
                        </div>
                    </div>

                    <div className={styles.car_image}>
                        <h2>Car - <span style={{color:"#FF4D30"}}>{car}</span></h2>
                        {/* <Image src={carImg} alt={car} height={200} width={200} /> */}
                    </div>


                </div>



                <hr /> {/* Separator */}


                {/* Personal Informatoin Section */}

                <div className={styles.personal}>

                    <h2>PERSONAL INFORMATION</h2>

                    <form className={styles.personal_form}>

                        <div className={styles.outer_div}>
                            <div className={styles.inner_div}>
                                <label>First Name <span>*</span></label>
                                <input type="text" placeholder="Enter your first name" />
                                <p>This field is required.</p>
                            </div>

                            <div className={styles.inner_div}>
                                <label>Last Name <span>*</span></label>
                                <input type="text" placeholder="Enter your Last name" />
                                <p>This field is required.</p>
                            </div>
                        </div>

                        <div className={styles.outer_div}>
                            <div className={styles.inner_div}>
                                <label>Phone Number <span>*</span></label>
                                <input type="number" placeholder="Enter your phone number" className={styles.numberInput} />
                                <p>This field is required.</p>
                            </div>


                            <div className={styles.inner_div}>
                                <label>Age <span>*</span></label>
                                <input type="number" placeholder="18" />
                                <p>This field is required.</p>
                            </div>
                        </div>



                        {/* EMAIL */}
                        <div className={styles.email_address}>
                            <div className={styles.inner_div}>
                                <label>Email <span>*</span></label>
                                <input type="email" placeholder="Enter your email address" className={styles.my_email} />
                                <p>This field is required.</p>
                            </div>

                            {/* ADDRESS */}
                            <div className={styles.inner_div}>
                                <label>Address <span>*</span></label>
                                <input type="text" placeholder="Enter your street address" className={styles.address} />
                                <p>This field is required.</p>
                            </div>
                        </div>

                        {/* CITY & ZIPCODE */}
                        <div className={styles.outer_div}>
                            <div className={styles.inner_div}>
                                <label>City <span>*</span></label>
                                <input type="text" placeholder="Enter your city" />
                                <p>This field is required.</p>
                            </div>


                            <div className={styles.inner_div}>
                                <label>Zip Code <span>*</span></label>
                                <input type="number" placeholder="Enter your zip code" className={styles.numberInput} />
                                <p>This field is required.</p>
                            </div>
                        </div>

                        <div className={styles.checkbox_div}>
                            <input type='checkbox' className={styles.checkbox} />
                            <p>Please send me latest news and updates</p>
                        </div>


                        {/* Buttton Reserve Now */}
                        <div className={styles.btn}>
                            <div>
                                <button>Reserve Now</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
};

export default ModalComponent;