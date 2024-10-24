import Footer from "../component/footer/footer"
import Stylecss from "./about.module.css"
import Header from "../component/header/header"
const Afc = () => {
    return(
        <div>
            <Header></Header>
            <Footer></Footer>
        <h1 className="bg-red-700 py-3 px-36 mx-36 my-9 mb-0 border-8 border-yellow-500">ABOUT SITE</h1>
        <button className="border-3 border-yellow-300">login</button>
        <p className={Stylecss.para}>This is KHIZER KAKWAN WEBSITE.</p>
        </div>
    )
}
export default Afc
