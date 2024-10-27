
import Link from "next/link"
const Header = () => {
    return(
        <div className="bg-sky-800 pt-2 pb-2  sticky top-0">
            <ul>
        <h1 className="text-xl font-bold inline pl-[70px] text-black "><b>KHIZER PET HOUSE</b></h1>
        <div className="inline pl-[160px]">
      
        
        
        <Link href="/" className="border-0 rounded-2xl bg-sky-600 px-1 py-1 text-base text-lime-300  " >home</Link>&nbsp;&nbsp;&nbsp;
        <Link href="content" className="border-0 rounded-2xl bg-sky-600 px-1 py-1 text-base text-lime-300">content</Link>&nbsp;&nbsp;&nbsp;
        <Link href="about" className="border-0 rounded-2xl bg-sky-600 px-1 py-1 text-base text-lime-300">about</Link>&nbsp;&nbsp;&nbsp;
        <Link href="contact" className="border-0 rounded-2xl bg-sky-600 px-1 py-1 text-base text-lime-300">contact</Link>
        </div>
      </ul>
        </div>
    )
}
export default Header