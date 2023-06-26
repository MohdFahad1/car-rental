import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { FaAngleDown } from "react-icons/fa";
import styles from './Faq.module.css';

const FaqItem = ({open, toggle, ques, ans}) => {

  const [color, setColor] = useState(false);

  return (
    <div className={styles.accordian}>
        <div onClick={toggle} className={styles.title}>
            <p>{ques}</p>
            <div><FaAngleDown /></div>
        </div>

        <Collapse isOpened={open}>
            <div className={styles.desc}>{ans}</div>
        </Collapse>
    </div>
  )
}

export default FaqItem