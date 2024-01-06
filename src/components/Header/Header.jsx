import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-4 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2
            className="text-3xl text-white font-primary font-extrabold hover:underline focus:outline-none focus:ring focus:border-blue-300 
            "
          >
            <span>&lt;&gt; </span>Hocine.
          </h2>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-3 font-bold py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
          >
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
