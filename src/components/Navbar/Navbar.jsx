import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquareText, BsClipboardData } from "react-icons/bs";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50 ">
      <div className="container mx-auto ">
        <div className="w-full bg-black/60 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/80">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer  w-[60px] h-[60px] flex items-center justify-center "
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer  w-[60px] h-[60px] flex items-center justify-center "
          >
            <BiUser />
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            <BsClipboardData />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer  w-[60px] h-[60px] flex items-center justify-center "
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
