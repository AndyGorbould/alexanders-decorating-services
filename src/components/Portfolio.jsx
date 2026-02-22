import React from 'react';

export default function Portfolio() {
    return (
        <section className="py-24" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div>
                        <span className="text-gold-accent text-xs uppercase tracking-[0.4em] font-bold">Project Gallery</span>
                        <h3 className="text-4xl text-heritage-green mt-4 font-serif">The Art of Decoration</h3>
                    </div>
                    <button className="mt-8 md:mt-0 text-[10px] uppercase tracking-widest font-bold text-heritage-green border border-stone px-8 py-4 hover:bg-heritage-green hover:text-white transition-all">
                        Full Portfolio
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="overflow-hidden bg-stone aspect-[3/4]">
                            <img alt="Project 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEKAMWC5xqvwARnEL75um3VZ2ATP7ulBCFbfd5yztCjHQKW_mVEWvssZ4deQrPNWI8SMhPr6aFmPaiqop-Wku0rxMrplc1T9vq9EXKB07NIY2kP_qVicHxj2k4DptglSuSEKjZbw8AH_IYZnP46wGMh0fm5uPKG1_i5DQouoDr73nfIx5-rfrhgmG4-IHzk9rAnPbscH8cYur1G_hWA4VS8JgxO2AFKHfNUpU-VPD5i_FUXqN5eQ-TMV-MvaucZWCJDrLJKUhqxwg" />
                        </div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gold-accent">Oxfordshire</p>
                        <h5 className="text-xl text-heritage-green">Georgian Manor Restoration</h5>
                    </div>
                    <div className="space-y-4 pt-12">
                        <div className="overflow-hidden bg-stone aspect-[3/4]">
                            <img alt="Project 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt7fZOu9OoSsnGS4Iz4ctdxFVF0bOIVfwetMLTRJgFD7JVHxdwPdtgTXVGpTtKkmleOoldMg_OVxQUm_hPvsQ8P68lsAJ2c-2UINUkp1xj0DhO5J4W2MSXSzqTmL4uXnq66SH1cLyIURfKRWZlsRsnH1OkM_nU46tnzKVqBRSvCQ5EaFWbgOztKbB2CxKheG4gI4IaslBrxFzsfPAyGd8giJwfyS8YyTd8eTU4ky0bIKX_xM5Gh2F3NBKcoqajCEd-dNRERqOgODk" />
                        </div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gold-accent">London Chelsea</p>
                        <h5 className="text-xl text-heritage-green">Bespoke Kitchen Refinish</h5>
                    </div>
                    <div className="space-y-4">
                        <div className="overflow-hidden bg-stone aspect-[3/4]">
                            <img alt="Project 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVuq5_kY8ZWaieRYFh0nidmWu1kfqDVbTuUT6gWU-RlRDO1BZYo6m3kkXo-pELiAj-thSPKoatMqAw1-DE68T8UJTHngd-ylz92QNlX8Ks83hiJ6Jp8Ra8xxEUfqeyw7fBM_Hk8hmT5SeWluHJMH-w7MHxF_bEDweoh1e-VqG11eGgHPbUMFrl6VGdBLS206PJTs8hD_s8Y2YJSG3edunhJn2AaYa5yZCg-jdv0IJ70F0iWHuuHljoyvKXa-nBfe-byVc3kPxKaKM" />
                        </div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gold-accent">Surrey Hills</p>
                        <h5 className="text-xl text-heritage-green">Modern Facade Transformation</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}
