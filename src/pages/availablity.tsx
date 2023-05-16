import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Main from "../components/Lookpartner/Main"
import Image from 'next/image';
import Footer1 from "../components/footer/Footer";
import {useState} from 'react';
import Footer from '../components/Lookpartner/Footer';

export default function LookingPartner() {
   



const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  }
  
  const backStep = () => {
    if(step == 1) return;
    setStep(step - 1);
  }

return (

        <>
 
       <Navbar/>
       <div className='mt-24'></div>
       <Main step={step} />
       <Footer nextStep={nextStep} backStep={backStep} />
       <Footer1/>
  
   
        </>
)


}



