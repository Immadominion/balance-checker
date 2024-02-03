import BottomNavItem from "./BottomNavItem"
import { TbSmartHome } from "react-icons/tb";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";


const BottomNav = () => {
  return (
  <>
  <div className="d-flex justify-content-evenly">
  <div >
        <BottomNavItem text="Home" icon={<TbSmartHome size={30}/>}></BottomNavItem>
    </div>
    <div >
        <BottomNavItem text="Convert" icon={<FaArrowRightArrowLeft size={30}/>}></BottomNavItem>
    </div>
    <div >
        <BottomNavItem text="Profile" icon={<FaRegUser size={30}/>}></BottomNavItem>
    </div>
  </div>
  </>
  )
}

export default BottomNav