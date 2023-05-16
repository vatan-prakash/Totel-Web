
import styles from "./Main.module.css"

// const Footer=({nextStep ,backStep} )=> {
    const Footer = ({ nextStep, backStep }: { nextStep: () => void, backStep: () => void }) => {
        // Rest of your code...
      
      
    return (

        <>
        <div className={styles.bn}>
    
    <div className={styles.back}>
    <button className={styles.b}  onClick={backStep}>Back</button>
    </div>
 
 
    <div className={styles.next}>
    <button className={styles.n}  onClick={nextStep}>Next</button>
    </div>
 
    
    </div>
 

        </>
    )
}
export default Footer