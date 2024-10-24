import Footer from "../component/footer/footer"
import Header from "../component/header/header"
import stylecss from "./services.module.css"
const Cfc = () => {
    return(
        <div>
            <Header></Header>
            <Footer></Footer>
        <h1 className={stylecss.h1}>SERVICES WE PROVIDE</h1>
        <p className={stylecss.para}>We provide videos related to pets to watch video <a href="https://youtube.com/@khizerpethouse6574?si=wwQEC2pDg68z4NwY"><b><u>click here</u></b></a></p>
        </div>
        
    )
}
export default Cfc
