"use client"
import React, {useState} from 'react';
import styles from './Modal.module.css';
import { FaCross, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa';
import { MdLocationOn } from "react-icons/md";
import Image from 'next/image';
 

const ModalComponent = ({car, pick, drop, pickDate, dropDate, carImg, isOpen, setIsOpen}) => {

    // const showData = () => {
    //     console.log(car+" "+pick+" "+drop+" "+dropDate+" "+pickDate);
    // }
  
    return (
        <>
            <div>

                <div>
                    <span>COMPLETE REGISTRATION</span>
                    <span><FaCross /></span>
                </div>

                <div>
                    <div><FaInfoCircle />Upon completing this reservation enquiry, you will receive:</div>
                    <div>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</div>
                </div>

                <div>
                    <div>
                        <h1>Location & Date</h1>


                        <div>
                            <div>
                                <span><FaCalendarAlt /></span>
                                <span>Pick-Up Date & Time</span>
                            </div>
                            <div>
                                <span>{pickDate}/</span>
                                <input type="time" />
                            </div>
                        </div>


                        <div>
                            <div>
                                <span><FaCalendarAlt /></span>
                                <span>Pick-Up Date & Time</span>
                            </div>
                            <div>
                                <span>{pickDate}/</span>
                                <input type="time" />
                            </div>
                        </div>


                        <div>
                            <div>
                                <span><MdLocationOn /></span>
                                <span>Pick-Up Location</span> 
                            </div>
                            <div>{pick}</div>
                        </div>


                        <div>
                            <div>
                                <span><MdLocationOn /></span>
                                <span>Drop-off Location</span> 
                            </div>
                            <div>{drop}</div>
                        </div>

                    </div>
                    <div>
                        <h3>Car - <span>{car}</span></h3>
                        <Image src={carImg} alt={car} height={200} width={200}/>
                    </div>


                </div>

                <hr />

                <div>
                <div>PERSONAL INFORMATION</div>

                    <form>

                        <div>
                            <label>First Name <span>*</span></label>
                            <input type="text" placeholder="Enter your first name"/>
                        </div>
                        
                        <div>
                            <label>Last Name <span>*</span></label>
                            <input type="text" placeholder="Enter your Last name"/>
                        </div>

                        
                        <div>
                            <label>Phone Number <span>*</span></label>
                            <input type="number" placeholder="Enter your phone number" className={styles.numberInput}/>
                        </div>

                        
                        <div>
                            <label>Age <span>*</span></label>
                            <input type="number" placeholder="18"/>
                        </div>

                        
                        <div>
                            <label>Email <span>*</span></label>
                            <input type="email" placeholder="Enter your email address"/>
                        </div>

                        
                        <div>
                            <label>Address <span>*</span></label>
                            <input type="text" placeholder="Enter your street address"/>
                        </div>

                        
                        <div>
                            <label>City <span>*</span></label>
                            <input type="text" placeholder="Enter your city"/>
                        </div>

                        
                        <div>
                            <label>Zip Code <span>*</span></label>
                            <input type="number" placeholder="Enter your zip code" className={styles.numberInput}/>
                        </div>

                        <div>
                            <input type='checkbox' />
                            <p>Please send me latest news and updates</p>
                        </div>

                        <div>
                            <button>Reserve Now</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
};

export default ModalComponent;