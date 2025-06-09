'use client'

import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Lottie from 'lottie-react'
import robotAnimation from './robot2.json' // ensure this is the correct path

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col">
      {/* Navbar */}
      <header className="w-full">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center">
            <a href="#" className="p-2">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-blue-900"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex gap-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-blue-900 font-medium">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex">
            <a href="#" className="text-blue-900 font-medium">
              Log in →
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 lg:px-20">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight">
              Meet your AI Agent
            </h1>
            <p className="mt-5 text-base sm:text-lg text-blue-900 leading-relaxed">
              Empower your business with a smart, always-available AI assistant. Automate tasks, answer questions, and deliver insights instantly with next-generation artificial intelligence.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-indigo-500"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold text-blue-900 hover:underline">
                Learn more →
              </a>
            </div>
          </div>

          {/* Right Side: Lottie Animation */}
          <div className="flex justify-center lg:justify-end">
            <Lottie
              animationData={robotAnimation}
              loop={true}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
