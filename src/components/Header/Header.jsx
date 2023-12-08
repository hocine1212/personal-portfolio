import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link
            href="#"
            className="text-3xl text-white font-primary font-extrabold hover:underline focus:outline-none focus:ring focus:border-blue-300 
            "
          >
            <span>&lt;&gt; </span>Hocine.
          </Link>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-3 font-bold py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring focus:border-blue-300">
            Work with me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
