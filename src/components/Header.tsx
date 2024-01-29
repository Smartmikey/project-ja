import { Bars3BottomLeftIcon, Bars3BottomRightIcon, HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const Header = () => {
  return (
    <header className="w-100 h-16 bg-white text-black">
      <nav className="nav_container">
        <div>
          <Link href='/' ><Image src="/logo.png" alt="logo" width={150} height={80} /></Link>
        </div>
        <div className="md:hidden"><Bars3BottomRightIcon className="h-6" /></div>
        <div className="hidden md:inline-flex">
          <ul className="nav_group">
            <li className=""><Link href="/"> Home</Link></li>
            <li className=""><Link href="/products"> Shop</Link></li>
            <li className=""><Link href="#"> About</Link></li>
            <li className=""><Link href="#"> Contact</Link></li>
          </ul>
        </div>
        <div className="hidden md:inline-flex nav_icons">
          <UserIcon className="nav_icon" />
          <MagnifyingGlassIcon className="nav_icon" />
          <HeartIcon className="nav_icon"/>
          <ShoppingCartIcon className="nav_icon"/>
        </div>
      </nav>
    </header>
  );
};
