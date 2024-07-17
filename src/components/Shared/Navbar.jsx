import { bebas_neune, mochiy_pop_one } from "@/app/fonts";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  // Menu items to be used in both mobile and desktop views
  const menuItems = (
    <>
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/features">Features</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
  return (
    <div className="navbar w-full bg-aqua-squeeze">
      {/* Navbar start section */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile menu button */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <MdMenu />
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content  shadow bg-aqua-squeeze rounded-box w-[300px]"
          >
            {/* Dropdown menu items */}
            <div
              className={`menu text-black w-full rounded-box ${mochiy_pop_one.className}`}
            >
              {menuItems}
            </div>
          </ul>
        </div>

        {/* logo */}
        <Link href="/">
          <h2 className={`uppercase text-[40px] ${bebas_neune.className}`}>
            timber trove
          </h2>
        </Link>
      </div>

      {/* Navbar center section for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal gap-10 ${mochiy_pop_one.className}`}
        >
          {menuItems}
        </ul>
      </div>

      {/* Navbar end section */}
      <div className="navbar-end">
        <div className="relative">
          {/* Shopping bag icon */}
          <Image
            height={29}
            width={29}
            src={assets.images.shoppingBag}
            alt="shopping bag"
          />

          {/* Notification dot */}
          <div className="absolute bottom-0 right-0 rounded-full bg-artyClick-ocean-green h-[10px] w-[10px]"></div>
        </div>

        {/* Login button */}
        <Link href="/login">
          <button
            className={`btn btn-outline uppercase ${mochiy_pop_one.className} px-10 py-[11px] hover:bg-black ml-[57px] rounded-[6px]`}
          >
            login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
