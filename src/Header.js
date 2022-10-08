import Logo from "./components/Logo";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="fixed bg-[#171A21]/80 backdrop-blur flex justify-between items-center w-full h-[3.5rem] sm:h-[4.5rem] px-5 sm:px-10 text-white font-bold z-10">
        <div className="flex items-center">
          <Logo />
          <div className="text-xl sm:text-3xl ml-[0.2rem]">Apache</div>
        </div>
        <div className="flex justify-between items-center w-[10rem] sm:w-[13rem] text-sm sm:text-base">
          <Link className="group relative" to="/">
            Popular
            <div
              className={`absolute bottom-0 left-0 h-[2px] bg-[#878FA1] group-hover:w-full ${
                location.pathname === "/" ? "w-full" : "w-0"
              } transition-all`}
            ></div>
          </Link>
          <Link className="group relative" to="/on_sale">
            On Sale
            <div
              className={`absolute bottom-0 left-0 h-[2px] bg-[#878FA1] group-hover:w-full ${
                location.pathname === "/on_sale" ? "w-full" : "w-0"
              } transition-all`}
            ></div>
          </Link>
          <Link className="group relative" to="/free">
            Free
            <div
              className={`absolute bottom-0 left-0 h-[2px] bg-[#878FA1] group-hover:w-full ${
                location.pathname === "/free" ? "w-full" : "w-0"
              } transition-all`}
            ></div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
