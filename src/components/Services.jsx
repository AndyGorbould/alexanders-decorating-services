import React from 'react';

export default function Services() {
    return (
        <section className="py-24 bg-stone/20" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-gold-accent text-xs uppercase tracking-[0.4em] font-bold">Specialist Services</span>
                    <h3 className="text-4xl md:text-5xl text-heritage-green mt-4 font-serif">A Comprehensive Portfolio</h3>
                    <div className="divider-gold max-w-sm mx-auto mt-8"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone border border-stone">
                    <div className="bg-off-white p-12 hover:bg-white transition-colors group">
                        <span className="text-gold-accent font-serif italic text-lg mb-4 block">01.</span>
                        <h4 className="text-2xl text-heritage-green mb-4">Domestic &amp; Commercial</h4>
                        <p className="text-heritage-green/60 font-light leading-relaxed mb-8">
                            From stately manor houses to sophisticated retail spaces, we deliver unparalleled finishes that respect the architectural integrity of the building.
                        </p>
                        <a className="text-[10px] uppercase tracking-widest font-bold text-heritage-green border-b border-gold-accent pb-1 group-hover:text-gold-accent transition-colors" href="#">Inquire Today</a>
                    </div>
                    <div className="bg-off-white p-12 hover:bg-white transition-colors group">
                        <span className="text-gold-accent font-serif italic text-lg mb-4 block">02.</span>
                        <h4 className="text-2xl text-heritage-green mb-4">Internal &amp; External Decoration</h4>
                        <p className="text-heritage-green/60 font-light leading-relaxed mb-8">
                            Comprehensive protection and aesthetic refinement, using heritage-standard paints and coatings designed for the British climate.
                        </p>
                        <a className="text-[10px] uppercase tracking-widest font-bold text-heritage-green border-b border-gold-accent pb-1 group-hover:text-gold-accent transition-colors" href="#">Inquire Today</a>
                    </div>
                    <div className="bg-off-white p-12 hover:bg-white transition-colors group">
                        <span className="text-gold-accent font-serif italic text-lg mb-4 block">03.</span>
                        <h4 className="text-2xl text-heritage-green mb-4">Specialist Render Spraying</h4>
                        <p className="text-heritage-green/60 font-light leading-relaxed mb-8">
                            Precision external rendering using modern spraying technology for a uniform, durable finish on large-scale facades.
                        </p>
                        <a className="text-[10px] uppercase tracking-widest font-bold text-heritage-green border-b border-gold-accent pb-1 group-hover:text-gold-accent transition-colors" href="#">Inquire Today</a>
                    </div>
                    <div className="bg-off-white p-12 hover:bg-white transition-colors group">
                        <span className="text-gold-accent font-serif italic text-lg mb-4 block">04.</span>
                        <h4 className="text-2xl text-heritage-green mb-4">Fine Internal Spraying</h4>
                        <p className="text-heritage-green/60 font-light leading-relaxed mb-8">
                            Achieving a factory-standard, flawless finish on cabinetry, trim, and architectural details for a truly premium interior feel.
                        </p>
                        <a className="text-[10px] uppercase tracking-widest font-bold text-heritage-green border-b border-gold-accent pb-1 group-hover:text-gold-accent transition-colors" href="#">Inquire Today</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
