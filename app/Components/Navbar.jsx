import React from 'react'
import Image from 'next/image'
import logo from './Assets/logo.png'
import cart_icon from './Assets/cart_icon.png'
export const Navbar = () => {
  return (
    <nav className='navbar flex justify-between items-center shadow-md px-14 py-2'>
        <div className='nav-logo flex items-center justify-center gap-2 font-medium'>
            <Image src={logo} alt="Shoper logo" width={40} height={40} />
            <p>SHOPER</p>
        </div>
        <ul className="nav-menu flex gap-6 text-sm list-none">
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className="nav-login-cart flex items-center justify-center text-sm">
            <button className='px-7 py-1.5 border rounded-full active:bg-gray-200'>Login</button>
            <Image src={cart_icon} alt="Cart" width={20} height={20} />
            <div className="nav-cart-count w-[15px] h-[15px] rounded-full bg-red-500 text-white flex items-center justify-center text-xs ml-[-6px] mt-[-17]">0</div>
        </div>
    </nav>
  )
}
