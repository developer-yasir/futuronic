import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const faqs = [
    {
        id: 1,
        question: "How long does a typical integration take?",
        answer: "Our standard integration timeline ranges from 2-4 weeks for basic implementations, while complex enterprise solutions may take 8-12 weeks. We provide a detailed roadmap during our initial consultation."
    },
    {
        id: 2,
        question: "Is my data secure with Futuronic?",
        answer: "Absolutely. Security is our top priority. We are ISO 27001 certified and GDPR compliant. All data is encrypted at rest and in transit, and we never use your proprietary data to train our public models without explicit consent."
    },
    {
        id: 3,
        question: "Do you offer custom AI model training?",
        answer: "Yes! Our 'Enterprise' plan includes custom model fine-tuning on your specific dataset. This ensures the AI understands your industry jargon, brand voice, and specific business logic."
    },
    {
        id: 4,
        question: "What kind of support is included?",
        answer: "All plans include email support. The 'Professional' plan adds priority chat support, while 'Enterprise' clients receive a dedicated technical account manager and 24/7 phone access for critical issues."
    },
    {
        id: 5,
        question: "Can I upgrade or downgrade my plan later?",
        answer: "Yes, our plans are flexible. You can scale up or down at any time. If you upgrade, the changes take effect immediately. If you downgrade, the new rate starts at your next billing cycle."
    },
    {
        id: 6,
        question: "How does the pricing model work?",
        answer: "We offer a tiered pricing model based on API usage and feature access. You can start with our 'Starter' plan and scale as your needs grow. Contact sales for a custom quote."
    }
];

const FAQItem = React.forwardRef(({ faq, isOpen, onClick }, ref) => {
    const themeMode = useSelector((state) => state.theme.mode);

    const faqItemClasses = isOpen
        ? 'bg-primary/5 border-primary/30 shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]'
        : (themeMode === 'dark' ? 'bg-white/5 border-white/5 hover:border-white/10' : 'bg-black/5 border-black/5 hover:border-black/10');

    const questionTextColor = isOpen ? 'text-primary' : (themeMode === 'dark' ? 'text-white group-hover:text-primary/80' : 'text-black group-hover:text-primary/80');

    const buttonBorderAndTextColor = isOpen
        ? 'border-primary bg-primary text-white rotate-180'
        : (themeMode === 'dark' ? 'border-white/10 text-white/50 group-hover:border-primary/50 group-hover:text-primary' : 'border-black/10 text-black/50 group-hover:border-primary/50 group-hover:text-primary');

    const answerBorderColor = themeMode === 'dark' ? 'border-white/10' : 'border-black/10';


    return (
        <motion.div
            ref={ref}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${faqItemClasses}`}
        >
            <button
                onClick={onClick}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
            >
                <span className={`text-lg font-medium transition-colors duration-300 ${questionTextColor}`}>
                    {faq.question}
                </span>
                <span className={`p-3 rounded-full border transition-all duration-300 ${buttonBorderAndTextColor}`}>
                    <FaMinus size={12} className={`transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 absolute'}`} />
                    <FaPlus size={12} className={`transition-all duration-300 ${isOpen ? 'opacity-0 absolute' : 'opacity-100'}`} />
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className={`px-6 pb-6 pt-0 text-[var(--text-contrast-color)] border-t border-dashed ${answerBorderColor} mt-2`}>
                            <div className="pt-4 leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
});
FAQItem.displayName = 'FAQItem';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const themeMode = useSelector((state) => state.theme.mode);

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const searchIconColor = themeMode === 'dark' ? 'text-white/30' : 'text-black/30';
    const searchInputClasses = themeMode === 'dark'
        ? 'w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all shadow-lg backdrop-blur-sm'
        : 'w-full bg-black/5 border border-black/10 rounded-full py-4 pl-12 pr-6 text-black placeholder:text-black/30 focus:outline-none focus:border-primary/50 focus:bg-black/10 transition-all shadow-lg backdrop-blur-sm';


    return (
        <section className="py-24 px-6 bg-[var(--bg-color)] relative overflow-hidden" id="faq">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold font-display mb-6"
                    >
                        Questions? <span className="text-gradient">Solved.</span>
                    </motion.h2>
                    <p className="text-lg text-[var(--text-contrast-color)] mb-8">
                        Explore our knowledge base or reach out to our team.
                    </p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative max-w-lg mx-auto"
                    >
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <FaSearch className={searchIconColor} />
                        </div>
                        <input
                            type="text"
                            placeholder="Ask the AI Core..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={searchInputClasses}
                        />
                    </motion.div>
                </div>

                <motion.div
                    layout
                    className="flex flex-col gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <FAQItem
                                    key={faq.id}
                                    faq={faq}
                                    isOpen={faq.id === openIndex} // Use ID for tracking open state correctly with filter
                                    onClick={() => setOpenIndex(faq.id === openIndex ? -1 : faq.id)}
                                />
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12 text-[var(--text-contrast-color)]"
                            >
                                No answers found in the database.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
