import styles from "./detailscard2.module.css"
import React from "react";
import { BsClockHistory, BsCalendar4 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
// import styles from "./Styles/Find.module.css";
import Link from "next/link";
export default function Detailscard2() {
    return (

        <>
        <div className="card">
       <div className={styles.card}>
{/* {/* 
       <div className={styles.rates}>
        <div className={styles.rate}>$75-$90</div>{" "}
        {/* <div className={styles.rate}>/ night</div> */}
       
       <div className={styles.r}>
        <div className={styles.rate}>$75 /night</div>
      </div>
     <div>


    <div className={styles.hd}>

    <div className={styles.hour}>
     Hour
     </div>
    <div className={styles.day}>Day </div>

     </div>



     
      
      


       <div className="flex items-center space-between mt-10">

     <div className="ml-5 In">
        <p className="mx-2 font-semibold text-left">Check-In</p>
        <div className="flex items-center justify-center gap-2 my-4">
          <div className={styles.date}>
            <div>15/04/23</div>
            <div className="hidden sm:block">
              <BsCalendar4 className="ml-4 search-icon" />
            </div>
          </div>
       
        </div>
      </div>
      <div className="ml-5 Out">
       <p className="mx-2 font-semibold text-left">Check-Out</p>
        <div className="flex items-center justify-center gap-1 my-4">
          <div className={styles.date}>
            <div>15/04/23</div>
            <div className="hidden sm:block">
              <BsCalendar4 className="ml-4 search-icon" />
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>

    <div className={styles.guestr}>


    <div className={styles.guest}>Guests</div>

    <div className={styles.num}>3 guests, 1 infant, 1 pet</div>
    <div className={styles.sub}>Submit</div>
    <div>
        <button className={styles.fee}>  Claim Cleaning Fees</button>
      </div>
    </div>
       </div>
              
    </div>
      
        </>
    )}