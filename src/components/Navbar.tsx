'use client'

import Link from "next/link"
import { IoMoon } from "react-icons/io5"
import { FaSun } from "react-icons/fa6"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null


  return (
    <nav
      className="fixed top-0 left-0 w-full h-18 z-50 flex justify-between items-center 
      px-6 py-3 border-b border-white/20 
      bg-white/10 dark:bg-neutral-900/30 backdrop-blur-lg shadow-sm"
    >
      <Link className="flex space-x-0.5" href={"/"}>
        <span className="text-3xl font-bold text-red-600">I</span>
        <span className="text-3xl font-bold">-</span>
        <span className="text-3xl font-bold text-blue-600">G</span>
        <span className="text-3xl font-bold text-green-600">A</span>
        <span className="text-3xl font-bold text-yellow-600">T</span>
        <span className="text-3xl font-bold text-orange-600">E</span>
      </Link>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
      >
        {theme === 'light' ?
         <IoMoon className="text-blue-600" /> 
         : 
         <FaSun className="text-yellow-400" />}
      </button>
    </nav>
  )
}
