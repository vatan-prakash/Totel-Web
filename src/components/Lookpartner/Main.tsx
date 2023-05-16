// import {useState} from 'react'
import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';
import Main5 from './Main5';
import Main6 from './Main6';
import Main7 from './Main7';
import Main8 from './Main8';
import Main9 from './Main9';
import Main10 from './Main10';
import Main11 from './Main11';
import Main12 from './Main12';
const Main = ({ step }: { step: number }) => {
    // Rest of your code...

  




    return (
        <div style={{minHeight:"60vh", marginTop:"120px" }}>
         {step === 1 ? <Main1/> : step === 2 ? <Main2/> : step ===3 ? <Main3/> : step === 4 ? <Main4/> : step === 5 ? <Main5/> :step === 6 ? <Main6/> : step=== 7 ? <Main7/>: step===8? <Main8/>: step===9? <Main9/>: step===10? <Main10/> : step==11? <Main11/> : main12 }    
       </div>
       )
   }

export default Main;