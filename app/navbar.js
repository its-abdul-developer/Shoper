"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./Components/Assets/logo.png";
import cart_icon from "./Components/Assets/cart_icon.png";
const Navbar = () => {

  const [menu, setmenu] = useState("shop")

  return (
    <div>
      <nav className="navbar flex justify-between items-center shadow-md px-14 py-2">
        <div className="nav-logo flex items-center justify-center gap-2 font-medium">
          <Image src={logo} alt="Shoper logo" width={40} height={40} />
          <p>SHOPER</p>
        </div>
        <ul className="nav-menu flex gap-6 text-sm list-none">
       
          <Link
          onClick={()=>{
            setmenu("shop")
          }}
          href="/">
            <span>Shop 
              {menu==="shop" ? <hr className="border-b-2 border-black " /> : null}
            </span>
          </Link>
          <Link
          onClick={()=>{
            setmenu("men")
          }}
          href="/men">
            <span>Men
              {menu==="men" ? <hr className="border-b-2 border-black" /> : null}
            </span>
          </Link>
          <Link
          onClick={()=>{
            setmenu("women")
          }}
          href="/women">
            <span>Women
              {menu==="women" ? <hr className="border-b-2 border-black" /> : null}
            </span>
          </Link>
       
          <Link
          onClick={()=>{
            setmenu("kids")
          }}
          href="/kids">
            <span>Kids
              {menu==="kids" ? <hr className="border-b-2 border-black" /> : null}
            </span>
          </Link>
        </ul>
        <div className="nav-login-cart flex gap-2 items-center justify-center text-sm">
          <Link href="/login" className="px-7 py-1.5 border rounded-full active:bg-gray-200">
            Login
          </Link>
         <Link href="/cart">
          <Image src={cart_icon} alt="Cart" width={20} height={20} />
          </Link>
          <div className="nav-cart-count w-[15px] h-[15px] rounded-full bg-red-500 text-white flex items-center justify-center text-xs ml-[-10px] mt-[-17px]">
            0
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
