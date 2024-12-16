'use client';

import Link from "next/link";
import { useState } from "react";
import { Heart, Search, ShoppingCart, User, Menu, X } from 'lucide-react';

export function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  return (
    <header className="w-full bg-[#131A22] text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <img src="/images/logo.png" alt="Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block flex-grow">
            <ul className="flex justify-center space-x-6 text-sm">
              <li><Link href="/" className="text-white hover:text-white/70">HOME</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white">PRODUCT</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white">CATEGORY</Link></li>
            </ul>
          </nav>

          {/* Icons for All Screen Sizes */}
          <div className="flex items-center space-x-4">
            <button className="text-white/70 hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-white/70 hover:text-white">
              <User className="h-5 w-5" />
            </button>
            <button className="text-white/70 hover:text-white">
              <Heart className="h-5 w-5" />
            </button>
            <button className="text-white/70 hover:text-white">
              <ShoppingCart className="h-5 w-5" />
            </button>
            {/* Mobile Menu Button - Positioned Last */}
            <button
              className="md:hidden text-white/70 hover:text-white"
              onClick={toggleDrawer}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="bg-black bg-opacity-50 flex-1"
            onClick={toggleDrawer}
          ></div>
          
          {/* Drawer */}
          <div
            className="w-64 bg-[#001529] text-white p-6 h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-white/70"
              onClick={toggleDrawer}
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Navigation Links */}
            <nav>
              <ul className="space-y-6 text-lg mt-8">
                <li>
                  <Link href="/" className="hover:text-white/70" onClick={toggleDrawer}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white/70" onClick={toggleDrawer}>
                    PRODUCT
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white/70" onClick={toggleDrawer}>
                    CATEGORY
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
