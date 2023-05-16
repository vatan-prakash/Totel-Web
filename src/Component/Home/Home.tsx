
import Navbar from "../../components/navbar/Navbar";
import Mainleft from "./Homepage/Mainleft";
import Footer1 from "../Footer1/Footer1";
import MainRight from "./Homepage/MainRight";

export default function Home1() {
    return (
<>
     <Navbar/> 
    <div className="flex">

    <Mainleft/>
     <MainRight/>
    </div>
     <Footer1/>
</>
    );
    
}