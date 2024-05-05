import { Link } from "react-router-dom";
import { SidebarIcon } from "./svg/svgFormat";

interface HeaderProps {
  scrollToRef: {
    about: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
  setSidebar: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToRef, setSidebar }) => {


  const openSidebar = () => {
    setSidebar(true);
  };
  
  return (
    <header className="fixed z-50 w-full bg-white">
      <div className="container">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center justify-between">
            <h4 className="text-dark text-xl font-semibold">George.dev</h4>
          </div>
          <ul className="items-center justify-between hidden lg:flex">
            <li className="mr-2">
              <Link to="" className="p-2 block text-dark text-xl font-semibold transition-all duration-200 ease-in-out hover:text-blue" onClick={() => scrollToRef.about.current?.scrollIntoView({ behavior: 'smooth' })}>About</Link>
            </li>
            <li className="mr-2">
              <Link to="" className="p-2 block text-dark text-xl font-semibold transition-all duration-200 ease-in-out hover:text-blue" onClick={() => scrollToRef.projects.current?.scrollIntoView({ behavior: 'smooth' })}>Projects</Link>
            </li>
            <li>
              <Link to="" className="p-2 block text-dark text-xl font-semibold transition-all duration-200 ease-in-out hover:text-blue" onClick={() => scrollToRef.contact.current?.scrollIntoView({ behavior: 'smooth' })}>Contact</Link>
            </li>
          </ul>
          <button className="lg:hidden block" onClick={openSidebar}>
            <SidebarIcon/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header