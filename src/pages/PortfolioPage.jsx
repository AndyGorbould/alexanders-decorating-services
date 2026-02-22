import React from 'react';
import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
    return (
        <main className="min-h-[calc(100vh-6rem)] bg-stone transition-colors">
            <div className="pt-12 bg-stone">
                <Portfolio />
            </div>
        </main>
    );
}
