import React from 'react'
import HotelCard from '../cards/UserCard'
import styles from "./Mainleft.module.css"
import SearchBar from '../SearchBar/Searchbar'
// import styles from '../SearchBar/Searchbar.module.css;
export default function MainRight() {
  return (
    <>
<div className={styles.mright}>
  <div className={styles.details}> 
 <div className={styles.sb}>
{/* <SearchBar/> */}
</div>

<div className='all'>
{/* <button type="submit" className={styles.searchButton}>Looking</button> */}
</div>
</div>
    <div className={styles.right}>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>

      
    </div>

    </div>

    </>
  )
}
