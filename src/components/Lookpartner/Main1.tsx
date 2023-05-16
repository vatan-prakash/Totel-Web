import styles from "./Main.module.css"
import Footer from "./Footer"
// import styles from "./detailscard2.module.css"
import { BsClockHistory, BsCalendar4 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import React from "react";
export default function Main1() {
    return (
        <>
 <div className="ml-28 mt-8">
      <div className={styles.head}>
      Give your availability
      </div>
   <div className={styles.des}>
      In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.
     </div>


     <div className={styles.hd}>
   <div className={styles.hour}>Hour</div>
   <div className={styles.day}>Day </div>
 </div>


   


     <div className="hd">
        <div>
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
</div>


  

       


  

     </div>

        </>
    )
    }