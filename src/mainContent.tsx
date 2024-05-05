
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { CloseSIdebarIcon } from "./components/svg/svgFormat";
import Header from "./components/header";
import Footer from "./components/footer";
import Profile from "./assets/img/profile.png";
import { skillsUrl, projects } from "./data";
import { ContactMaIlIcon, LayoutGithubIcon, LayoutLinkedinIcon, ProjectGithubIcon } from "./components/svg/svgFormat";


const MainContent = () => {
  const [sidebar, setSidebar] = useState<boolean>(false)
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const closeSidebar = (ref?: React.RefObject<HTMLDivElement>) => {
    setSidebar(false);
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header setSidebar={setSidebar} scrollToRef={{ about: aboutRef, projects: projectsRef, contact: contactRef }}/>
      <div className={`h-screen fixed w-full z-[100] bg-white transition-all duration-300 ease-in-out ${sidebar ? 'show' : 'hide'}`}>
        <button className="absolute right-[25px] top-[25px] border-none" onClick={() => closeSidebar()}>
          <CloseSIdebarIcon/>
        </button>
        <ul className="flex items-center justify-center flex-col h-full">
          <li className="block mb-5 list-none">
            <Link to="" className="p-2 block text-dark text-sm font-semibold transition-all duration-200 ease-in-out hover:text-blue" onClick={() => closeSidebar(aboutRef)}>About</Link>
          </li>
          <li className="block mb-5 list-none">
            <Link to="" className="p-2 block text-dark text-sm font-semibold transition-all duration-200 ease-in-out hover:text-blue" onClick={() => closeSidebar(projectsRef)}>Projects</Link>
          </li>
          <li className="block mb-5 list-none">
            <Link to="" className="p-2 block text-dark text-sm font-semibold transition-all duration-200 ease-in-out hover:text-blue" onClick={() => closeSidebar(contactRef)}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="pt-[84px]">
        <div className="container">
          <div className="xl:w-9/12 mx-auto">
            <div ref={aboutRef} id="aboutRef" className="flex flex-wrap-reverse items-center py-20">
              <div className="w-full lg:w-4/6 lg:pr-8">
                <h1 className="text-dark font-black text-5xl mb-7">Front-End React Developer</h1>
                <p className="text-dark font-medium text-xl mb-5">Hello! my name is Giorgi Kiladze, a React frontend developer passionate about crafting user-friendly interfaces and delightful experiences. With 3 years of experience, I specialize in creating elegant solutions that marry form with function. Let's build something amazing together!</p>
                <div className="flex items-center">
                  <Link to="https://www.linkedin.com/in/giorgi-kiladze-260962254/" target="_blank" className="mr-4">
                    <LayoutLinkedinIcon/>
                  </Link>
                  <Link to="https://github.com/george1994grandmaster" target="_blank">
                    <LayoutGithubIcon/>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-4/12 mb-12 lg:mb-0">
                <img src={Profile} alt="profile-img" className="object-contain h-80"/>
              </div>
            </div>
            <div className="flex items-center my-12 flex-col sm:flex-row">
              <div className="flex items-center sm:mr-6 mb-4">
                <h3 className="text-blue font-semibold text-xl">Skills</h3>
                <span className="inline-block w-0.5 h-5 bg-dark ml-5"></span>
              </div>
              <ul className="flex flex-wrap items-center">
                {skillsUrl.map((skill, idx) => (
                  <li key={idx} className="w-[50px] sm:w-[12%] md:w-[6%] mr-5 mb-4 list-none rounded-lg" >
                    <img src={skill.url} alt={`SkillImg`} style={{borderRadius: "25%"}}/>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-12" ref={projectsRef} id="projectsRef">
              <h3 className="text-blue font-semibold text-xl mb-5">Projects</h3>
              {projects.map((project, idx) => (
                <>
                  {idx % 2 === 0 ? (
                    <div className="shadow-box p-3 mb-12" key={idx}>
                      <div className="flex flex-wrap" key={idx} ref={projectsRef}>
                        <Link to={project.live} target="_blank" className="lg:w-1/2 lg:mb-0 mb-7 overflow-hidden">
                          <img src={project.url} alt={`projectImg`} className="block h-auto lg:h-[350px] transition-all duration-300 ease-in-out hover:scale-[1.05]"/>
                        </Link>
                        <div className="lg:w-1/2">
                          <div className="flex flex-col justify-between h-full px-0 lg:px-8">
                            <p className="text-dark font-medium text-base mb-4">{project.description}</p>
                            <div className="mb-4">
                              <p className="text-dark font-semibold text-base mr-3 mb-3">Built in:</p>
                              <div className="flex items-center flex-wrap">
                                {project.aggregates.map((aggregate, idx) => (
                                <button className="block rounded-[50%] bg-blue mr-3 p-3 text-white font-semibold text-base mb-3
                                  transition-all duration-400 ease-in-out transform hover:scale-[1.06]" key={idx}>
                                  {aggregate}
                                </button>
                                ))}
                              </div>
                            </div>
                            {project.warningText && project.warningTitle && 
                            <div className="my-3">
                              <h4 className="text-base font-semibold mb-2">{project.warningTitle}</h4>
                              <p className="text-red text-base font-medium">{project.warningText}</p>
                            </div>
                            }
                            <div className="flex items-center">
                              {!project.warningText && 
                              <Link to={project.live} className="text-blue font-semibold text-lg live-content" target="_blank">Live</Link>
                              }
                              <div className="ml-3">
                                <Link to={project.repo} target="_blank">
                                  <ProjectGithubIcon/>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="shadow-box p-3 mb-12">
                      <div className="flex flex-wrap-reverse " key={idx} ref={projectsRef}>
                        <div className="lg:w-1/2">
                          <div className="flex flex-col justify-between h-full px-0 lg:px-8">
                          <p className="text-dark font-medium text-base mb-4">{project.description}</p>
                            <div className="mb-4">
                              <p className="text-dark font-semibold text-base mr-3 mb-3">Built in:</p>
                              <div className="flex items-center flex-wrap">
                                {project.aggregates.map((aggregate, idx) => (
                                <button className="block rounded-[50%] bg-blue mr-3 p-3 text-white font-semibold text-base mb-3
                                  transition-all duration-400 ease-in-out transform hover:scale-[1.06]" key={idx}>
                                  {aggregate}
                                </button>
                                ))}
                              </div>
                            </div>
                            {project.warningText && project.warningTitle && 
                            <div className="my-3">
                              <h4 className="b text-base font-semibold mb-2">{project.warningTitle}</h4>
                              <p className="text-red text-base font-medium">{project.warningText}</p>
                            </div>
                            }
                            <div className="flex items-center">
                              {!project.warningText && 
                              <Link to={project.live} className="text-blue font-semibold text-lg live-content" target="_blank">Live</Link>
                              }
                              <Link to={project.repo} target="_blank">
                                <ProjectGithubIcon/>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <Link to={project.live} target="_blank" className="lg:w-1/2 lg:mb-0 mb-7 overflow-hidden">
                          <img src={project.url} alt={`projectImg`} className="block h-auto lg:h-[350px] transition-all duration-300 ease-in-out hover:scale-[1.05]"/>
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
            <div className="py-14">
              <h2 className="mb-4 text-blue font-semibold text-xl">CONTACT</h2>
              <Link to="mailto:gkiladze1994@gmail.com" target="_blank" className="inline-flex items-center">
                <span className="mr-3">
                  <ContactMaIlIcon/>
                </span>
                <p className="text-lightGrey font-medium text-xl hover:text-blue transition-all duration-300 ease-out">gkiladze1994@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div ref={contactRef} id="contactRef">
        <Footer/>
      </div>
    </>
  )
}

export default MainContent