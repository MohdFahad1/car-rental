"use client"
import React, { useState } from 'react';
import styles from './Faq.module.css';
import bg from '../../public/faqbg.png';
import Image from 'next/image';
import FaqItem from './FaqItem';

const Faq = () => {

  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if(open === index){
      return setOpen(null)
    }

    setOpen(index);
  }

  const faqData = [
    {
      ques: "1. What is special about comparing rental car deals?",
      ans:"Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."
    },
    {
      ques: "2. How do I find the car rental deals?",
      ans:"You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters follow rental car companies on social media to be informed of any special deals or promotions."
    },
    {
      ques: "3. How do I find such low rental car prices?",
      ans:"Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices."
    },
  ];

  return (
    <div className={styles.faq}>
      <div className={styles.faq_text}>
        <h3>FAQ</h3>
        <h1>Frequently Asked Questions</h1>
        <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website :</p>
        <p>Answers to Common Concerns and Inquiries.</p>
      </div>
      <div className={styles.faq_item}>
        {faqData.map((data, index) => {
          return <FaqItem key={index} open={index === open} ques={data.ques} ans={data.ans} toggle={()=>toggle(index)}/>
        })}
      </div>
    </div>
  );
}

export default Faq;
