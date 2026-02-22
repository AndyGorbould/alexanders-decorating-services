import React from 'react';
import photo01 from '../assets/pics/photo_01.jpg';

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center overflow-hidden bg-racing-green">
            <div className="absolute inset-0 z-0">
                <img alt="Expertly painted dark grey facade and porch" className="w-full h-full object-cover" src={photo01} />
                <div className="absolute inset-0 hero-overlay"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <span className="inline-block text-gold-accent text-xs uppercase tracking-[0.5em] font-semibold mb-4 drop-shadow-md">
                        Established Excellence
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight drop-shadow-2xl">
                        Masterful Painting &amp; <br /><i className="italic">Exquisite Decoration</i>
                    </h1>
                    <div className="divider-gold max-w-xs mx-auto my-8"></div>
                    <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed font-serif italic drop-shadow-md">
                        Specialists in premium exterior finishes and heritage property restoration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                        <button className="bg-gold-accent text-racing-green px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-white transition-all duration-300 shadow-xl">
                            View Our Projects
                        </button>
                        <button className="border border-white/40 text-white px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-all backdrop-blur-md">
                            Free Bespoke Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
