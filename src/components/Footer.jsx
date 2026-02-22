import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-racing-green text-stone/60 py-20 border-t border-heritage-green">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-heritage-green">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex flex-col mb-8">
                            <span className="text-xl font-serif tracking-tight text-white leading-none">
                                Alexanders
                            </span>
                            <span className="text-[9px] uppercase tracking-[0.4em] text-gold-accent font-semibold mt-1">
                                Decorating Services
                            </span>
                        </div>
                        <p className="text-xs leading-relaxed mb-8">
                            Upholding the finest traditions of British decorating with a focus on meticulous quality and professional integrity.
                        </p>
                        <div className="flex items-center gap-3 opacity-60">
                            <svg className="w-8 h-4" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                                <clipPath id="f">
                                    <path d="M0,0 v30 h60 v-30 z"></path>
                                </clipPath>
                                <path d="M0,0 v30 h60 v-30 z" fill="#012169"></path>
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"></path>
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"></path>
                                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"></path>
                                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"></path>
                            </svg>
                            <span className="text-[9px] uppercase tracking-widest font-bold text-white">British Quality Assured</span>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-white text-xs uppercase tracking-widest font-bold mb-8">Services</h6>
                        <ul className="space-y-4 text-xs font-medium">
                            <li><a className="hover:text-gold-accent transition-colors" href="#">Residential Finishing</a></li>
                            <li><a className="hover:text-gold-accent transition-colors" href="#">Commercial Contracts</a></li>
                            <li><a className="hover:text-gold-accent transition-colors" href="#">Heritage Restoration</a></li>
                            <li><a className="hover:text-gold-accent transition-colors" href="#">Fine Spraying</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white text-xs uppercase tracking-widest font-bold mb-8">Navigation</h6>
                        <ul className="space-y-4 text-xs font-medium">
                            <li><a className="hover:text-gold-accent transition-colors" href="#portfolio">Our Portfolio</a></li>
                            <li><a className="hover:text-gold-accent transition-colors" href="#about">The Team</a></li>
                            <li><a className="hover:text-gold-accent transition-colors" href="#">Sustainability</a></li>
                            <li><a className="hover:text-gold-accent transition-colors" href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white text-xs uppercase tracking-widest font-bold mb-8">Enquiries</h6>
                        <ul className="space-y-6 text-xs font-medium">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-gold-accent w-5 h-5" />
                                <span>Mayfair, London &amp;<br />Cotswolds Region</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-gold-accent w-5 h-5" />
                                <span>+44 (0) 20 7123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-gold-accent w-5 h-5" />
                                <span>office@alexandersdecorating.co.uk</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
                    <p>© 2024 Alexanders Decorating Services. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a className="hover:text-white" href="#">Privacy Policy</a>
                        <a className="hover:text-white" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
