
import Link from "next/link"
function Navbar() {
  return (
    <div>
      <nav className="flex justify-between flex-wrap bg-slate-900 p-6">
  <div className="flex items-center flex-shrink-0 text-teal-500 mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">Nikhil Dubey</span>
  </div>
  <div className="">
    <ul className="flex flex-row justify-between ">
        <li className="text-teal-500 px-5 hover:bg-white"><Link href="/">Home</Link></li>
        <li className="text-teal-500 px-5 hover:bg-white"><Link href="/about">About</Link></li>
        <li className="text-teal-500 px-5 hover:bg-white"><Link href="/project">projects</Link></li>
        <li className="text-teal-500 px-5 hover:bg-white"><Link href="/contact">Contact</Link></li>
    </ul>
  </div>
  
  <div className="flex flex-row justify-center md:justify-end px-5 md:px-0">
  <div className="text-center md:text-left">
    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded
      text-teal-500 text-bold border-sky-750 hover:border-transparent hover:text-teal-500
      hover:bg-white mt-4 lg:mt-0 md:align-mi " onClick={() => window.open("https://drive.google.com/file/d/1F1588QGkq17-OITQMoYVnGI4VZ7j-lcQ/view?usp=drivesdk", "_blank")}>Download-Resume</a>
  </div>
</div>


  
</nav>
    </div>
  ) 
}

export default Navbar;
