import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <CTA />
        </main>
    );
}
