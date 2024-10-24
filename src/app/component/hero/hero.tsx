import Image from "next/image"
import prt from "./picc.jpg"
const Hero = () => {
    return (
        <div>
            <Image src={prt} alt="" />
        </div>
    )
}
export default Hero