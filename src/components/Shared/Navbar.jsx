import { BebasNeue, MochiyPopOne } from "@/app/fonts";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import Container from "./Container";

const Navbar = () => {
  // Menu items to be used in both mobile and desktop views
  const menuItems = (
    <>
      <Link
        className="hover:text-blaze-orange transition ease-linear duration-500"
        href="/"
      >
        Home
      </Link>
      <Link
        className="hover:text-blaze-orange transition ease-linear duration-500"
        href="/shop"
      >
        Shop
      </Link>
      <Link
        className="hover:text-blaze-orange transition ease-linear duration-500"
        href="/features"
      >
        Features
      </Link>
      <Link
        className="hover:text-blaze-orange transition ease-linear duration-500"
        href="/contact"
      >
        Contact
      </Link>
    </>
  );
  return (
    <div className="bg-aqua-squeeze max-w-[1536px] mx-auto">
      <Container>
        <div className="navbar w-full px-0">
          {/* Navbar start section */}
          <div className="navbar-start">
            <div className="dropdown">
              {/* Mobile menu button */}
              <label tabIndex={0} className="cursor-pointer lg:hidden">
                <MdMenu className="text-4xl mr-3 p-1" />
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content shadow bg-aqua-squeeze rounded-tl-none rounded-tr-none rounded-lg w-[300px] mt-[14px]"
              >
                {/* Dropdown menu items */}
                <div
                  className={`menu text-black w-full rounded-lg gap-5 ${MochiyPopOne.className}`}
                >
                  {menuItems}
                </div>
              </ul>
            </div>

            {/* logo */}
            <Link href="/">
              <h2
                className={`uppercase lg:text-[40px] text-3xl text-nowrap ${BebasNeue.className}`}
              >
                timber trove
              </h2>
            </Link>
          </div>

          {/* Navbar center section for larger screens */}
          <div className="navbar-center hidden lg:flex">
            <ul
              className={`menu menu-horizontal gap-10 ${MochiyPopOne.className}`}
            >
              {menuItems}
            </ul>
          </div>

          {/* Navbar end section */}
          <div className="navbar-end sm:text-xs text-[8px]">
            <div className="relative">
              {/* Shopping bag icon */}
              <Image
                height={29}
                width={29}
                src={assets.images.shoppingBag}
                alt="shopping bag"
              />

              {/* Notification dot */}
              <div className="absolute bottom-0 right-0 rounded-full bg-artyClick-ocean-green sm:h-[10px] sm:w-[10px] h-[7px] w-[7px]"></div>
            </div>

            {/* Login button */}
            <Link href="/login">
              <button
                className={`uppercase border border-black ${MochiyPopOne.className} lg:px-10 md:px-5 px-3 lg:py-[11px] md:py-[9px] py-[6px] hover:bg-black hover:text-white lg:ml-14 md:ml-7 ml-3 rounded-[6px] transition ease-linear duration-500`}
              >
                login
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
