import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA() {
    return (
        <section className="bg-heritage-green py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <pattern height="10" id="grid" patternUnits="userSpaceOnUse" width="10">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"></path>
                    </pattern>
                    <rect fill="url(#grid)" height="100" width="100"></rect>
                </svg>
            </div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl text-off-white font-serif mb-8 italic">Begin Your Property's Transformation</h2>
                <p className="text-stone/70 text-lg mb-12 font-light max-w-2xl mx-auto">
                    Consult with our experts to discuss your requirements. We offer complimentary estimates and detailed project planning for all high-end decorating services.
                </p>
                <Link to="/consultation" className="bg-gold-accent text-racing-green px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-white transition-all inline-block">
                    Arrange a Consultation
                </Link>
            </div>
        </section>
    );
}
