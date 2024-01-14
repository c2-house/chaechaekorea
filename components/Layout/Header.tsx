'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { categories } from '@/constants/category';
import { MenuIcon } from '@/public/icons';
import Drawer from './Drawer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={clsx(
          'inset-x-0 top-0 z-10 w-full transition-colors duration-300',
          isHome ? 'fixed' : 'sticky',
          {
            'bg-transparent': isHome && scrollY <= 0,
            'border-b border-gray-100 bg-white/70 backdrop-blur-lg': scrollY > 0,
          },
        )}
      >
        <div
          className={clsx('container-xl py-3 md:py-5', { 'text-white': isHome && scrollY <= 0 })}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold md:text-2xl">
              ChaeChae Korea
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center">
                {categories.map((category) => (
                  <li key={category}>
                    <Link
                      href={`/category/${category}`}
                      className={clsx(
                        'px-4 py-2 font-semibold uppercase transition-colors hover:text-slate-500',
                        { 'hover:text-slate-400': isHome },
                      )}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center lg:hidden">
              <button
                aria-label="open sidebar"
                className="p-1"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon className="fill-current" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Header;
