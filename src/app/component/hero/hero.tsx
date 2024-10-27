import Image from "next/image"
import prt from "./picc.jpg"
import stylecss from "./style.module.css";
const Hero = () => {
    return (
        <div className={stylecss.hero}>
            <Image src={prt} alt="" />
            <div className={stylecss.content}>
                <h2>abc</h2>
                </div>
        </div>
    )
}
export default Hero