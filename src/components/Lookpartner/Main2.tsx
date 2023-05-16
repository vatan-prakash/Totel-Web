import styles from "./Main.module.css"

export default function Main2() {


    return (
        <>
            
     <div className="ml-28 mt-8">
      <div className={styles.head}>
      Tell about the booked room details.
      </div>
      {/* <div className={styles.des}>
      In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.
     </div> */}
     <div>

        <br/>
        <div>
       
        </div>
        <br/>
        <br/>
        <div className={styles.des}>
        In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.
        </div> 
        <br/>
       
        </div>
    
     <div className="flex  ">
        <div className={styles.min}>-</div>
        <div className={styles.id}>$USD</div>
        <div className={styles.plus}>+</div>
     </div>
   

     </div>



       </>
    )
    }