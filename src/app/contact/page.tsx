import Footer from "../component/footer/footer"
import stylecss from "./contact.module.css"
import Header from "../component/header/header"
const Cfc = () => {
    return(
        
        <div>
            <Header></Header>
            
        <h1 className={stylecss.h1}>CONTACT INFO</h1>
        <p className={stylecss.para}>To contact KHIZER KAKWAN <a href="https://www.instagram.com/khizer_kakwan?igsh=MTAzYmkzeTRtNmRtZQ=="><u><b>click here</b></u></a></p>
        <Footer></Footer>
        </div>
    )
}
export default Cfc
