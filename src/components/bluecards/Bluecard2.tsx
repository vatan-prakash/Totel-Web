import React from "react";
import styles from "../Styles/BlueCard1.module.css";
export default function Bluecard1() {
  return (
    <div className={styles.box}>
      <div className="flex items-center justify-center w-full flex-col lg:flex-row p-2 lg:mt-10 lg:ml-10">
        <div className="mt-3 w-full">
          <div className={styles.content1}>1% OF THE INDUSTRY</div>
          <div className={styles.content2}>
            Welcome to your room sharing platform that which will rock your room
            stays truly at all.
          </div>
        </div>
        <div className="flex items-center justify-center lg:ml-5 w-full">
          <form className="w-full">
            <div className={styles.txt}>Subscribe to our newsletter</div>
            <div className="flex items-center pb-1">
              <input
                className={styles.form}
                type="text"
                id="input"
                name="name"
                placeholder="Your name here"
              />
              <button type="submit" className={styles.submit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
