import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const teamMembers = [
    {
        name: 'Sarah Chen',
        role: 'CEO & Founder',
        bio: 'Ex-Google AI Research Lead with 15 years of experience in deep learning.',
        image: 'https://placehold.co/400x400/030712/06b6d4?text=Sarah',
        socials: { twitter: '#', linkedin: '#', github: '#' },
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        name: 'David Rossi',
        role: 'CTO',
        bio: 'Architect behind our core "Predicto-AI" engine. Systems expert.',
        image: 'https://placehold.co/400x400/030712/8b5cf6?text=David',
        socials: { twitter: '#', linkedin: '#', github: '#' },
        gradient: "from-purple-500 to-pink-500"
    },
    {
        name: 'Dr. Emily Watson',
        role: 'Head of AI Ethics',
        bio: 'Ensuring our solutions are safe, unbiased, and compliant globally.',
        image: 'https://placehold.co/400x400/030712/ec4899?text=Emily',
        socials: { twitter: '#', linkedin: '#', github: '#' },
        gradient: "from-pink-500 to-rose-500"
    },
    {
        name: 'Michael Chang',
        role: 'VP of Engineering',
        bio: 'Leading cross-functional teams to deliver robust enterprise software.',
        image: 'https://placehold.co/400x400/030712/10b981?text=Michael',
        socials: { twitter: '#', linkedin: '#', github: '#' },
        gradient: "from-emerald-500 to-teal-500"
    }
];

const HolographicCard = ({ member, index }) => {
    const ref = useRef(null);
    const themeMode = useSelector((state) => state.theme.mode);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for tilt
    const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

    // Transform values for 3D tilt
    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative h-[420px] w-full max-w-sm mx-auto group perspective-1000"
        >
            <div
                style={{ transform: "translateZ(75px)" }}
                className="absolute inset-0 bg-[var(--surface-color)]/40 backdrop-blur-xl rounded-3xl border border-[var(--accent-color)]/10 shadow-2xl overflow-hidden"
            >
                {/* Holographic Gradient Overlay */}
                <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${member.gradient}`}
                />

                {/* Image Section */}
                <div className="relative h-2/3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-transparent z-10" />
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />

                    {/* Floating Roles */}
                    <div className="absolute bottom-4 left-4 z-20 translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${member.gradient} text-[var(--text-color)] uppercase tracking-wider shadow-lg`}>
                            {member.role}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative h-1/3 p-6 flex flex-col justify-between z-20 bg-gradient-to-b from-transparent to-[var(--bg-color)]/80">
                    <div>
                        <h3 className="text-2xl font-bold text-[var(--text-color)] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--text-color)] group-hover:to-[var(--text-contrast-color)] transition-all duration-300">
                            {member.name}
                        </h3>
                        <p className="text-sm text-[var(--text-contrast-color)] line-clamp-2 group-hover:text-[var(--text-contrast-color)] transition-colors">
                            {member.bio}
                        </p>
                    </div>

                    {/* Social Reveal */}
                    <div className="flex gap-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        {[
                            { Icon: FaTwitter, href: member.socials.twitter },
                            { Icon: FaLinkedinIn, href: member.socials.linkedin },
                            { Icon: FaGithub, href: member.socials.github }
                        ].map(({ Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                className="text-[var(--text-contrast-color)] hover:text-[var(--text-color)] transition-colors duration-200 hover:scale-110 transform"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Border Glow */}
            <div
                className={`absolute -inset-0.5 rounded-[26px] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${member.gradient} -z-10`}
            />
        </motion.div>
    );
};

const Team = () => {
    return (
        <section className="py-32 px-6 bg-[var(--bg-color)] relative overflow-hidden" id="team">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-display"
                    >
                        The <span className="text-gradient">Architects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-[var(--text-contrast-color)] max-w-2xl mx-auto"
                    >
                        Pioneers crafting the intelligence of tomorrow.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 perspective-2000">
                    {teamMembers.map((member, index) => (
                        <HolographicCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
