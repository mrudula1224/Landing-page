import React from "react";

const Footer = () => (
  <footer className="bg-blue-100 border-t border-blue-200">
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Mission */}
        <div>
          <img
            className="h-10 mb-4"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            alt="AI Agent"
          />
          <p className="text-blue-900 text-base mb-6">
            Empowering teams with intelligent, autonomous AI agents for every workflow.
          </p>
          <div className="flex gap-x-4">
            <a href="#" className="text-blue-700 hover:text-indigo-600" aria-label="X">
              {/* X/Twitter */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.94 7.94a.75.75 0 00-1.06 0L12 12.88 7.12 7.94a.75.75 0 10-1.06 1.06l4.94 4.94-4.94 4.94a.75.75 0 001.06 1.06L12 14.12l4.88 4.94a.75.75 0 001.06-1.06l-4.94-4.94 4.94-4.94a.75.75 0 000-1.06z"/></svg>
            </a>
            <a href="#" className="text-blue-700 hover:text-indigo-600" aria-label="GitHub">
              {/* GitHub */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.1-1.48-1.1-1.48-.9-.62.07-.6.07-.6 1 .08 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.71 1.03 1.61 1.03 2.7 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" clipRule="evenodd"/></svg>
            </a>
            <a href="#" className="text-blue-700 hover:text-indigo-600" aria-label="LinkedIn">
              {/* LinkedIn */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.786-1.75-1.756 0-.971.784-1.756 1.75-1.756s1.75.785 1.75 1.756c0 .97-.784 1.756-1.75 1.756zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.866-3.062-1.868 0-2.154 1.459-2.154 2.967v5.699h-3v-10h2.881v1.367h.041c.401-.757 1.381-1.555 2.845-1.555 3.043 0 3.605 2.004 3.605 4.609v5.579z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-blue-950 mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">Features</a></li>
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">Integrations</a></li>
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">AI Marketplace</a></li>
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-blue-950 mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">Documentation</a></li>
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">API Reference</a></li>
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">Blog</a></li>
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">Help Center</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-blue-950 mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">About Us</a></li>
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">Careers</a></li>
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">Contact</a></li>
            <li><a href="#" className="text-blue-800 hover:text-indigo-600">Legal</a></li>
          </ul>
        </div>
      </div>

      {/* Newsletter or CTA */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-blue-200 pt-8">
        <p className="text-sm text-blue-700">&copy; 2025 AI Agent, Inc. All rights reserved.</p>
        <form className="mt-4 md:mt-0 flex">
          <input
            type="email"
            placeholder="Subscribe for AI updates"
            className="px-4 py-2 rounded-l-md border border-blue-300 focus:ring-2 focus:ring-indigo-200 outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </footer>
);

export default Footer;
