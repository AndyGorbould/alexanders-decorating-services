import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 border-b border-stone backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex flex-col cursor-pointer">
                            <span className="text-2xl font-serif tracking-tight text-heritage-green leading-none">
                                Alexanders
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-accent font-semibold mt-1">
                                Decorating Services
                            </span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-12">
                        <Link className="text-xs uppercase tracking-widest font-medium hover:text-gold-accent transition-colors" to="/services">Services</Link>
                        <Link className="text-xs uppercase tracking-widest font-medium hover:text-gold-accent transition-colors" to="/portfolio">Portfolio</Link>
                        <Link className="text-xs uppercase tracking-widest font-medium hover:text-gold-accent transition-colors" to="/about">Our Heritage</Link>
                        <Link className="text-xs uppercase tracking-widest font-medium hover:text-gold-accent transition-colors" to="/contact">Contact</Link>
                    </nav>
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center gap-2 border-l border-stone pl-6">
                            <svg className="w-5 h-5 opacity-80" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                                <clipPath id="s">
                                    <path d="M0,0 v30 h60 v-30 z"></path>
                                </clipPath>
                                <path d="M0,0 v30 h60 v-30 z" fill="#012169"></path>
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"></path>
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"></path>
                                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"></path>
                                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"></path>
                            </svg>
                            <span className="text-[10px] uppercase tracking-tighter font-bold text-heritage-green">British Quality</span>
                        </div>
                        <Link to="/consultation" className="bg-heritage-green text-off-white px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold-accent transition-colors duration-500 inline-block text-center">
                            Request Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
