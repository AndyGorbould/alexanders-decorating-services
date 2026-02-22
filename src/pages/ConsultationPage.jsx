import React from 'react';

export default function ConsultationPage() {
    return (
        <main className="min-h-[calc(100vh-6rem)] bg-stone py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl text-heritage-green font-serif mb-6 italic">Request a Consultation</h1>
                    <p className="text-stone/80 text-lg font-light max-w-2xl mx-auto">
                        Please detail your requirements below. Our specialists will review your project and contact you to arrange a comprehensive consultation.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-14 shadow-xl border border-stone/20">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="firstName" className="block text-xs uppercase tracking-widest text-racing-green font-bold mb-3">First Name</label>
                                <input type="text" id="firstName" className="w-full border-b-2 border-stone bg-transparent py-3 focus:outline-none focus:border-heritage-green transition-colors text-racing-green placeholder:text-stone/50" placeholder="John" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-xs uppercase tracking-widest text-racing-green font-bold mb-3">Last Name</label>
                                <input type="text" id="lastName" className="w-full border-b-2 border-stone bg-transparent py-3 focus:outline-none focus:border-heritage-green transition-colors text-racing-green placeholder:text-stone/50" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs uppercase tracking-widest text-racing-green font-bold mb-3">Email Address</label>
                            <input type="email" id="email" className="w-full border-b-2 border-stone bg-transparent py-3 focus:outline-none focus:border-heritage-green transition-colors text-racing-green placeholder:text-stone/50" placeholder="john@example.com" />
                        </div>

                        <div>
                            <label htmlFor="service" className="block text-xs uppercase tracking-widest text-racing-green font-bold mb-3">Service Required</label>
                            <select id="service" className="w-full border-b-2 border-stone bg-transparent py-3 focus:outline-none focus:border-heritage-green transition-colors text-racing-green appearance-none cursor-pointer">
                                <option value="" className="text-stone">Select a service...</option>
                                <option value="interior">Interior Decorating</option>
                                <option value="exterior">Exterior Painting</option>
                                <option value="commercial">Commercial Services</option>
                                <option value="specialist">Specialist Finishes</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-racing-green font-bold mb-3">Project Details</label>
                            <textarea id="message" rows="5" className="w-full border-b-2 border-stone bg-transparent py-3 focus:outline-none focus:border-heritage-green transition-colors resize-y text-racing-green placeholder:text-stone/50" placeholder="Please describe your property and requirements..."></textarea>
                        </div>

                        <button type="button" className="w-full bg-heritage-green text-off-white px-8 py-5 text-sm uppercase tracking-widest font-bold hover:bg-gold-accent transition-colors duration-500 mt-4">
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
