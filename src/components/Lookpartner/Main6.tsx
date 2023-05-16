import styles from "./Main.module.css"
import {useState} from 'react'
export default function Main6() {

    const [guest, setGuest] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [bed, setBed] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
  
    const decreaseHandler = (type: string) => {
      if (type === 'guest') {
         if (guest === 0) return;
         setGuest(guest - 1);
      }
  
  
      else if (type === 'bedrooms') {
        if (bedrooms === 0) return;
        setBedrooms(bedrooms - 1);
     }
    
  
     else if (type === 'bed'){
      if (bed === 0) return;
      setBed(bed - 1);
    }
  
  
     else   {
        if (bathrooms === 0) return;
        setBathrooms(bathrooms - 1);
     }
    }




    return (
        <>
       <div className="ml-28">
         <div className={styles.head}>
         Set your availability
      </div>
    <div className={styles.des}>
      Short titles work best. Have fun with it – you can always change it later.
     </div>
     <br/>
     <br/>
     <br/>
     </div>
  <div className="ml-2">
     <div className="stay">
     <div className="who">Who can stay there?</div>    
       <div className='gender'>
         <div className="g male">
          <div className='imagep'>
            <img src="/images/male1.png"  alt="gender" />
          </div>     
         <div className='person m'>Male</div>
       </div>
         <div className="g female">
          <div className='imagep'>
            <img src="/images/female.png"  alt="gender"/>
          </div>
          <div className='person f'>Female</div>
         </div>

         <div className="g both">
          <div className='imagep'><img src="/images/both.png" alt="gender"/></div>
          <div className='person b'>Both can stay</div>
         </div>
    </div>      
    </div>


      <div style={{width:'85%',margin:'2rem auto'}}>
        <div className="who">Sharable Details</div>
      <div className='main_btn'>
         <div>Guests</div>
          <div className='right'>
            <div className='btn' onClick={() => decreaseHandler('guest')}>-</div>
            <div style={{width: '25px',textAlign:'center'}}>{guest}</div>
            <div className='btn' onClick={() => setGuest(guest +1)}>+</div>
          </div>
      </div>
      </div>


      <div style={{width:'85%',margin:'2rem auto'}}>
      <div className='main_btn'>
         <div>Bedrooms</div>
          <div className='right'>
            <div className='btn' onClick={() => decreaseHandler('bedrooms')}>-</div>
            <div style={{ width: '25px', textAlign: 'center' }}>{bedrooms}</div>
            <div className='btn' onClick={() => setBedrooms(bedrooms +1)}>+</div>
          </div>
      </div>
      </div>


      <div style={{width:'85%',margin:'2rem auto'}}>
      <div className='main_btn'>
         <div>Beds</div>
          <div className='right'>
            <div className='btn' onClick={() => decreaseHandler('bed')}>-</div>
            <div style={{ width: '25px', textAlign: 'center' }}>{ bed}</div>
            <div className='btn' onClick={() => setBed(bed +1)}>+</div>
          </div>
      </div>
      </div>

      <div style={{width:'85%',margin:'2rem auto'}}>
      <div className='main_btn'>
         <div>Bathrooms</div>
          <div className='right'>
            <div className='btn' onClick={() => decreaseHandler('bathrooms')}>-</div>
            <div style={{ width: '25px', textAlign: 'center' }}>{bathrooms}</div>
            <div className='btn' onClick={() => setBathrooms(bathrooms +1)}>+</div>
          </div>
      </div>
      </div>


      </div>

    

        </>
    )
    }