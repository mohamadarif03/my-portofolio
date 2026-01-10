import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';
import { certificatesData } from '../data';

const AllCertificates = () => {
    
    // Function to generate random activity levels for the stats grid
    const getRandomLevel = () => {
        const levels = ['bg-slate-200 dark:bg-slate-800', 'bg-primary/20', 'bg-primary/40', 'bg-primary/60', 'bg-primary'];
        return levels[Math.floor(Math.random() * levels.length)];
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
            
            {/* Header Section */}
            <header className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[400px]">
                <div className="absolute inset-0 grid-pattern-radial opacity-40"></div>
                
                {/* Abstract Lines */}
                <div className="abstract-line w-[300px] h-[100px] -rotate-45 -top-10 -right-20 border-primary"></div>
                <div className="abstract-line w-[400px] h-[120px] -rotate-45 top-20 -right-40 border-purple-500 opacity-50"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col items-start gap-4">
                        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4 font-medium">
                            <span className="material-symbols-outlined text-lg">arrow_back</span>
                            Back to Home
                        </Link>
                        
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
                            Certifications<span className="text-primary">.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                            A showcase of professional credentials and specialized training programs I've completed to master my craft.
                        </p>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 pb-40 space-y-32">
                
                {certificatesData.map((cert, index) => (
                    <section key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Text Content - Alternates order */}
                        <div className={`lg:col-span-5 ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2 lg:pl-10'}`}>
                            <div className="mb-4">
                                <span className={`text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary`}>
                                    {cert.issuer}
                                </span>
                            </div>
                            <h2 className="text-4xl font-extrabold mb-6 dark:text-white leading-tight">
                                {cert.title}.
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                                Professional certification demonstrating proficiency in {cert.title} issued by {cert.issuer}.
                            </p>
                            <div className="flex items-center gap-4">
                                <a 
                                    href={cert.pdf} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-primary hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all glow-hover group"
                                >
                                    View Credential
                                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                                </a>
                                {cert.verificationLink && (
                                    <a 
                                        href={cert.verificationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-500 hover:text-primary transition-colors font-medium flex items-center gap-2"
                                    >
                                        Verify
                                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Image Showcase - Alternates order */}
                        <div className={`lg:col-span-7 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                            <div className="relative group">
                                <div className={`w-full aspect-[16/10] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-transform duration-500 group-hover:-translate-y-2 ${index % 2 === 0 ? 'group-hover:rotate-1' : 'group-hover:-rotate-1'}`}>
                                    {/* Browser Bar */}
                                    <div className="h-8 bg-slate-800/50 flex items-center px-4 gap-1.5 border-b border-white/5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                                    </div>
                                    {/* Content */}
                                    <div className="relative h-full bg-white dark:bg-card-dark flex items-center justify-center p-8">
                                        <img 
                                            src={cert.image} 
                                            alt={cert.title} 
                                            className="w-full h-full object-cover rounded-lg shadow-lg" 
                                        />
                                    </div>
                                </div>
                                
                                {/* Decorative Badge (Only show on first item or alternate) */}

                            </div>
                        </div>
                    </section>
                ))}
                
            </main>
        </div>
    );
};

export default AllCertificates;
