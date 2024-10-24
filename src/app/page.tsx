import image from "next/image";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Hero from "./component/hero/hero";
import stylecss from "./home.module.css"
let Fc = () => {
  return (

    <nav>
      <Header></Header>

      <Hero></Hero>

      <Footer ></Footer>
    </nav>

  )

}
export default Fc

