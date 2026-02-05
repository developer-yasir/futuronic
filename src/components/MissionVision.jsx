import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MissionVision = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative bg-[var(--bg-color)]" id="mission">

            {/* Sticky Visual Background */}
            <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
                <div className="absolute inset-0 bg-[var(--bg-color)]">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30" />

                    {/* Animated Geometric Overlay */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] mix-blend-screen" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] mix-blend-screen" />
                    </div>
                </div>
            </div>

            {/* Scrolling Content */}
            <div className="relative z-10 -mt-[100vh]">

                {/* Mission Section */}
                <div className="h-screen flex items-center justify-center p-6">
                    <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-[var(--bg-color)]/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-[var(--accent-color)]/10 shadow-2xl"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Our Mission</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold font-display text-[var(--text-color)] mb-8 leading-tight">
                                Democratizing <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-color)] to-[var(--text-contrast-color)]">Intelligence</span>
                            </h2>
                            <p className="text-lg text-[var(--text-contrast-color)] leading-relaxed mb-8">
                                To tear down the barriers of complexity and cost, making advanced Artificial Intelligence accessible to every visionary, creator, and enterprise. We are building the infrastructure for a smarter world.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[var(--accent-color)]/10">
                                <div>
                                    <div className="text-4xl font-bold text-[var(--text-color)] mb-2">10B+</div>
                                    <div className="text-sm text-[var(--text-contrast-color)] uppercase tracking-wider">Predictions Daily</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-[var(--text-color)] mb-2">99.9%</div>
                                    <div className="text-sm text-[var(--text-contrast-color)] uppercase tracking-wider">Uptime SLA</div>
                                </div>
                            </div>
                        </motion.div>
                        <div /> {/* Spacer for layout */}
                    </div>
                </div>

                {/* Vision Section */}
                <div className="h-screen flex items-center justify-center p-6">
                    <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div /> {/* Spacer for layout - switching sides */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-[var(--bg-color)]/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-[var(--accent-color)]/10 shadow-2xl"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
                                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Our Vision</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold font-display text-[var(--text-color)] mb-8 leading-tight">
                                A Symbiotic <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-color)] to-[var(--text-contrast-color)]">Future</span>
                            </h2>
                            <p className="text-lg text-[var(--text-contrast-color)] leading-relaxed mb-8">
                                We envision a world where AI doesn't replace human creativity but amplifies it. A future where technology becomes a natural extension of human intent, solving the unsolvable and creating the unimagined.
                            </p>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 text-[var(--text-contrast-color)]">
                                    <div className="w-2 h-2 rounded-full bg-secondary" />
                                    <span>Ethical AI Development</span>
                                </div>
                                <div className="flex items-center gap-4 text-[var(--text-contrast-color)]">
                                    <div className="w-2 h-2 rounded-full bg-secondary" />
                                    <span>Sustainable Computing</span>
                                </div>
                                <div className="flex items-center gap-4 text-[var(--text-contrast-color)]">
                                    <div className="w-2 h-2 rounded-full bg-secondary" />
                                    <span>Human-Centric Design</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionVision;
