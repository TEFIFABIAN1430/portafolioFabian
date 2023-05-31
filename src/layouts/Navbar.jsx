import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/icons/portfolio.png'
import Menu from '../../public/icons/menu.png'
import Close from '../../public/icons/close.png'
import NavLink from '../components/navlink'
import fonts from '../styles/Fonts.module.css'


const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className="z-50 bg-gradient-to-b from-[#be22f2] to-[#11b8fa] border-b border-[#5216de] fixed w-full">
      <div
        className={`flex items-center font-medium justify-around text-white text-base ${fonts.font_rowdles_bold}`}
      >
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link href={"/"} className="flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              className="h-9 w-9"
              width={"auto"}
              priority
            />
            <p className="mx-4 uppercase">Portafolio Web de Tefi</p>
          </Link>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <Image src={Close} alt="menu" className="h-9 w-9" />
            ) : (
              <Image src={Menu} alt="menu" className="h-9 w-9" />
            )}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8 h-full">
          <li>
            <Link
              href="/#intro"
              scroll={false}
              className="py-5 px-3 inline-block"
            >
              Introducción
            </Link>
          </li>
          <NavLink />
          <li>
            <Link
              href={"/#about"}
              scroll={false}
              className="py-5 px-3 inline-block"
            >
              Acerca de mí
            </Link>
          </li>
          <li>
            <Link
              href="/#intro"
              scroll={false}
              className="py-5 px-3 inline-block"
            >
              Contactamé
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        <ul
          className={`md:hidden z-40 bg-gradient-to-b from-[#07e6cf] to-[#c707f7] border-t border-[#B6207A] absolute overflow-y-auto md:h-full h-screen w-full top-0 py-10 pb-24 mt-[4.5rem] pl-4 duration-500 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <li className="md:border-0 border-b border-[#1f0dde]">
            <Link
              href="/#intro"
              scroll={false}
              className="py-5 px-3 inline-block hover:text-[#1f0dde]"
              onClick={() => setOpen(!open)}
            >
              Bienvenida
            </Link>
          </li>
          <NavLink setOpen={setOpen} />
          <li className="md:border-0 border-b border-[#1f0dde]">
            <Link
              href={"/#about"}
              scroll={false}
              className="py-5 px-3 inline-block hover:text-[#1f0dde]"
              onClick={() => setOpen(!open)}
            >
              Acerca de mí
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar