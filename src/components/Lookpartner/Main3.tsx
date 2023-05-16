import styles from "./Main.module.css"
import Image from "next/image";
export default function Main3() {
    return (
        <>
         <div className="ml-28">
         <div className={styles.head}>
         Set your availability
      </div>
    <div className={styles.des}>
      Short titles work best. Have fun with it – you can always change it later.
     </div>
     
     <div className={styles.body}>
     <img src="/Images/Calendar.png" alt="cc"/>
     </div>

         </div>
        </>
    )
    }