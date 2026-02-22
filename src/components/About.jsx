import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function About() {
    return (
        <section className="py-24 bg-off-white" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl text-heritage-green leading-tight">Superior craftsmanship for the discerning property owner.</h2>
                        <p className="text-lg text-heritage-green/70 leading-relaxed font-light">
                            With over fifteen years of dedicated service, Alexanders Decorating Services brings a refined British aesthetic to every project. We specialise in luxury residential restorations and high-profile commercial contracts.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="border-l-2 border-gold-accent pl-6">
                                <p className="text-3xl font-serif text-heritage-green mb-1">15+</p>
                                <p className="text-[10px] uppercase tracking-widest text-gold-accent font-bold">Years Experience</p>
                            </div>
                            <div className="border-l-2 border-gold-accent pl-6">
                                <p className="text-3xl font-serif text-heritage-green mb-1">5★</p>
                                <p className="text-[10px] uppercase tracking-widest text-gold-accent font-bold">Service Rating</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-4 border border-stone">
                        <img alt="Detailed Interior Finish" className="w-full aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVuq5_kY8ZWaieRYFh0nidmWu1kfqDVbTuUT6gWU-RlRDO1BZYo6m3kkXo-pELiAj-thSPKoatMqAw1-DE68T8UJTHngd-ylz92QNlX8Ks83hiJ6Jp8Ra8xxEUfqeyw7fBM_Hk8hmT5SeWluHJMH-w7MHxF_bEDweoh1e-VqG11eGgHPbUMFrl6VGdBLS206PJTs8hD_s8Y2YJSG3edunhJn2AaYa5yZCg-jdv0IJ70F0iWHuuHljoyvKXa-nBfe-byVc3kPxKaKM" />
                        <div className="absolute -bottom-8 -left-8 bg-heritage-green text-off-white p-10 hidden md:block">
                            <ShieldCheck className="w-10 h-10 text-gold-accent mb-4" />
                            <p className="font-serif text-xl italic leading-snug">"Quality is never an accident; it is always the result of intelligent effort."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
