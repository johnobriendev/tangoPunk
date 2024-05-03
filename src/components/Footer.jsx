import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";




export default function Footer() {
    return(
        <div className=" flex items-center justify-center gap-20 w-full py-5 px-2 sticky left-0 md:absolute bottom-0 text-red-500 text-3xl bg-yellow-500 md:bg-transparent md:text-white">
            <FaInstagram className="hover:scale-125 duration-150"/>
            <FaYoutube className="hover:scale-125 duration-150" />
            <FaSpotify className="hover:scale-125 duration-150" />
        </div>
    )
}