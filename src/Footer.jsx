import React from "react";

const Footer = () => (
  <footer className="bg-blue-200">
    <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        {/* Company Mission & Logo */}
        <div className="space-y-8">
          <img
            className="h-9"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            alt="Company name"
          />
          <p className="text-sm text-gray-300">
            Making the world a better place through constructing elegant hierarchies.
          </p>
          <div className="flex gap-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300" aria-label="Facebook">
              {/* Facebook SVG */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zm-6 8c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300" aria-label="Instagram">
              {/* Instagram SVG */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm6.25 1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300" aria-label="X">
              {/* X/Twitter SVG */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.94 7.94a.75.75 0 00-1.06 0L12 12.88 7.12 7.94a.75.75 0 10-1.06 1.06l4.94 4.94-4.94 4.94a.75.75 0 001.06 1.06L12 14.12l4.88 4.94a.75.75 0 001.06-1.06l-4.94-4.94 4.94-4.94a.75.75 0 000-1.06z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300" aria-label="GitHub">
              {/* GitHub SVG */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.1-1.48-1.1-1.48-.9-.62.07-.6.07-.6 1 .08 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.71 1.03 1.61 1.03 2.7 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300" aria-label="YouTube">
              {/* YouTube SVG */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.8 7.2a2.75 2.75 0 00-1.94-1.94C18.23 5 12 5 12 5s-6.23 0-7.86.26A2.75 2.75 0 002.2 7.2C2 8.77 2 12 2 12s0 3.23.2 4.8a2.75 2.75 0 001.94 1.94C5.77 19 12 19 12 19s6.23 0 7.86-.26a2.75 2.75 0 001.94-1.94C22 15.23 22 12 22 12s0-3.23-.2-4.8zM10 15.5V8.5l6 3.5-6 3.5z"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Footer Links */}
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-4 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
              <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Marketing</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Analytics</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Automation</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Commerce</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Insights</a></li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Submit ticket</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Guides</a></li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Jobs</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Press</a></li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Terms of service</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Privacy policy</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">License</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
        <p className="text-xs leading-5 text-gray-400">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
