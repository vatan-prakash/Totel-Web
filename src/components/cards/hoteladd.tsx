import styles from "./hoteladd.module.css"
import Cards from "./Cards2"

import Link from 'next/link';
export default function Hoteladd() {

return(

    <>
 <div className={styles.hd}>
    <div className={styles.hds}>
      <div className="ml-8">
      <div className={styles.hotelname}>Nearby hotels</div>
      <div className={styles.des}>You can find places and stay with hotels and home-stays ranked by travellers. What fun could we have more than having roommate with similar interest.</div>
      </div>
      
      <div className={styles.showmore}>
        <Link href="/roomstays">
        <button>Show more</button>
        </Link>
      </div>
      

    </div>
      <div className='cards'>
        <Cards/>
      </div>

      </div>

    </>
)


}