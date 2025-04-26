"use client";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo or App Name */}
        <div className="flex flex-col items-center gap-1">
          {/* Logo image above name */}
          <img src="/globe.svg" alt="Restaurant Revenue Calculate Logo" className="w-20 h-20 mb-1" />
          <span className="text-xl font-bold tracking-wide text-white">Elvis Restaino</span>
        </div>
        {/* Center: Navigation */}
        <nav className="flex flex-wrap gap-4 text-lg">
          <a href="#" className="hover:text-indigo-400 transition-colors">Home</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Features</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
        </nav>
        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-indigo-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 5.9c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.11 4c-2.5 0-4.52 2.02-4.52 4.51 0 .35.04.7.11 1.03C7.69 9.37 4.07 7.5 1.64 4.86c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65-.72-.02-1.39-.22-1.98-.54v.05c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.07.55 1.73 2.15 2.99 4.04 3.02A8.97 8.97 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.19 0-.38-.01-.57.88-.64 1.65-1.44 2.26-2.36z" /></svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.12-4.56-4.97 0-1.1.39-2 .1-2.71 0 0-.89-.29-2.91 1.1 0 0-.8.26-1.68 1.02-.06.09-.1.19-.1.31 0 .22.12.4.29.49.17.09.39.08.55-.02.16-.1.26-.28.26-.48 0-.21-.09-.39-.24-.51-.15-.12-.35-.13-.5-.03-.15.1-.23.29-.17.48.06.19.23.32.42.32.19 0 .36-.13.42-.32.06-.19-.02-.38-.17-.48-.15-.1-.35-.09-.5.03-.15.12-.24.3-.24.51 0 .2.1.38.26.48.16.1.38.11.55.02.17-.09.29-.27.29-.49 0-.12-.04-.22-.1-.31-.88-.76-1.68-1.02-1.68-1.02-2.02-1.39-2.91-1.1-2.91-1.1-.29.71.1 1.61.1 2.71 0 3.85 2.34 4.72 4.56 4.97.28.25.54.69.63 1.33.57.25 2.02.69 2.91-.83 0 0 .52-.96 1.52-1.03 0 0 .97-.02.07.6 0 0-.65.31-1.1 1.46 0 0-.59 1.94-3.37 1.34 0 .83-.01 1.46-.01 1.7 0 .26.18.57.68.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" /></svg>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xl text-gray-400">
        &copy; {new Date().getFullYear()} Elvis Restaino.
      </div>
    </footer>
  );
}