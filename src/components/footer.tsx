import { Link } from "react-router-dom";
import { Mail, FooterLinkedinIcon, FooterGithubIcon } from "./svg/svgFormat";

const Footer = () => {
  
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center py-14">
          <p className="text-white font-semibold text-base my-2">Copyright © 2024. All rights are reserved</p>
          <div className="flex items-center my-2">
            <Link to="mailto:gkiladze1994@gmail.com" className="mr-4">
              <Mail/>
            </Link>
            <Link to="https://www.linkedin.com/in/giorgi-kiladze-260962254/" target="_blank" className="mr-4">
              <FooterLinkedinIcon/>
            </Link>
            <Link to="https://github.com/george1994grandmaster" target="_blank">
              <FooterGithubIcon/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer