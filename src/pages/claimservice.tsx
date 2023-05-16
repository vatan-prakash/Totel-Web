import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
import styles from '../styles/claimservice.module.css';
import Container from '@/components/Container';
import Avatar from '@/core-components/csr/atoms/avatar';
import {IoShieldCheckmark} from 'react-icons/io5';
import Detailscard from '@/components/detailcard/detailscard2';
import {GiThreeLeaves} from 'react-icons/gi';
import {TbToolsKitchen2} from 'react-icons/tb';
import Footer1 from '@/components/footer/Footer1';
import Link from 'next/link';
import {MdVerified, MdReport} from 'react-icons/md';
import { verify } from 'crypto';
import { MdCheckCircle } from 'react-icons/md';
import Hoteladd from "../components/cards/hoteladd";





export default function Hoteldetails() {
  return (
    <div>
      <Navbar />
      <div className='mt-28'>
      <Link href="/">
        <button className="px-6 py-2 mb-4 ml-10 mt-1 text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent">
          Back
        </button>
      </Link>

      <div className={styles.hotel}>
        Cerulean Tower Tokyu Hotel
      
      </div>
     
      <div className={styles.h}>
        <div className="flex items-center justify-center gap-2 m-10  ">
          <div className="gap-2">
            <Image
              className={styles.img1}
              src="/Images/Rectangle 7.svg"
              alt="Image"
              width={0}
              height={0}
              unoptimized
            />
          </div>

          <div className="gap-2">
            <div className="flex items-center justify-center gap-2">
              <div>
                <Image
                  className={styles.img2}
                  src="/Images/Rectangle 8.svg"
                  alt="Image"
                  width={0}
                  height={0}
                  unoptimized
                />
              </div>
              <div>
                <Image
                  className={styles.img2}
                  src="/Images/Rectangle 10.svg"
                  alt="Image"
                  width={0}
                  height={0}
                  unoptimized
                />
              </div>
            </div>
            <div className="mt-2">
              <Image
                className={styles.img3}
                src="/Images/Rectangle 11.svg"
                alt="Image"
                width={0}
                height={0}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>   
      <div className="flex">
        <div className="">
          <Container>     
        <div className="flex flex-row items-center cursor-pointer" style={{justifyContent:'space-between',width:'75%'}}>
           <div className="flex">
            <div className="ml-0 md:block ">
            <Avatar src={''} />
          </div>
        <div className='tick ml-2'>
      <div className="flex space-between items-center">
         <div className={styles.bluetick}>
         {/* <MdVerified /> */}
         <p><MdCheckCircle color="#574EFA" size={20} /></p>
         </div>
         <div className="ml-2">Identity verified</div>
          </div>
    
          <div className={styles.hostedby}>
      
          Hosted by Ghazal</div>
            </div>  
           </div>
          <button className="  px-6 py-2 ml-20 text-xs text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent">
            View Profile
          </button>
        </div>
            <div className="flex items-center space-between gap-2 mt-2 ml">
              <IoShieldCheckmark />
              <div>
                To protect your payment, never transfer money or  communicate 
               <br/> outside of the Airbnb website or app.
              </div>
            </div>

            <div className=" mt-4">
            <div className={styles.avail}>
             Availaible Rooms
            </div>
            </div>
            <div className={styles.availroom}>2 of 4 Rooms Available</div>
             
              
          </Container>
          <div>
            <Container>
              <div>
                <div className={styles.des}>Description</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                  <br />
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  <br />
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                  <br />
                </div>
                <div>
                  <button className="px-6 py-2 mt-3 text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent">
                    <p className="text-xs">Show more</p>
                  </button>
                </div>
                <div className="mt-4">
                  <div className={styles.des}>Amenities Looking for</div>
                  <div className="flex gap-20 my-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <GiThreeLeaves />
                      </div>
                      <div> Garden View</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <TbToolsKitchen2 />
                      </div>
                      <div>Kitchen</div>
                    </div>
                  </div>
                  <div className="flex gap-20 my-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <GiThreeLeaves />
                      </div>
                      <div> Garden View</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <TbToolsKitchen2 />
                      </div>
                      <div>Kitchen</div>
                    </div>
                  </div>
                  <div className="flex gap-20 my-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <GiThreeLeaves />
                      </div>
                      <div>Garden View</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <TbToolsKitchen2 />
                      </div>
                      <div>Kitchen</div>
                    </div>
                  </div>
                  <div className="flex gap-20 my-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <GiThreeLeaves />
                      </div>
                      <div> Garden View</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <TbToolsKitchen2 />
                      </div>
                      <div>Kitchen</div>
                    </div>
                  </div>
                  <div className="flex gap-20 my-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <GiThreeLeaves />
                      </div>
                      <div> Garden View</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <TbToolsKitchen2 />
                      </div>
                      <div>Kitchen</div>
                    </div>
                  </div>
                  <div className="flex gap-20 my-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <GiThreeLeaves />
                      </div>
                      <div> Garden View</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <TbToolsKitchen2 />
                      </div>
                      <div>Kitchen</div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="px-6 py-2 text-xs text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent">
                    Show more amenities
                  </button>
                </div>
              </div>
              <div className="">
                <div className={styles.des}>Where you’ll be</div>
                <div>
                  <Image
                    className={styles.maps}
                    src="/Images/Maps.png"
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </div>
              </div>

            </Container>
          </div>
        </div>
        <div className="">
          <Detailscard />
          <Link href="">
            <div className="flex items-center ml-30 mt-3 ">
              <MdReport />
              <div>Report this listing</div>
            </div>
          </Link>
        </div>
      </div>
    <Hoteladd/>      
    </div>
      <Footer1 />
    </div>
  );
}
