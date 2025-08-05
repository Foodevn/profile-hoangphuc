'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ReadingProgress() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            const percentage = Math.round(latest * 100);
            setScrollPercentage(percentage);
            setIsVisible(percentage > 10); // Hiển thị khi cuộn hơn 10%
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <button
                onClick={scrollToTop}
                className="relative w-16 h-16 bg-background/90 dark:bg-slate-900/90 backdrop-blur-md border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
                {/* Circular Progress */}
                <svg
                    className="absolute inset-0 w-16 h-16 transform -rotate-90"
                    viewBox="0 0 64 64"
                >
                    {/* Background Circle */}
                    <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-muted/20"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        style={{
                            pathLength: pathLength,
                            strokeDasharray: "0 1"
                        }}
                        className="drop-shadow-sm"
                    />

                    {/* Gradient Definition */}
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" className="dark:stop-color-purple-500" />
                            <stop offset="50%" stopColor="#06b6d4" className="dark:stop-color-violet-500" />
                            <stop offset="100%" stopColor="#10b981" className="dark:stop-color-fuchsia-500" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Arrow Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowUp className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Percentage Text */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <motion.div
                        className="bg-background/90 dark:bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-foreground border border-border shadow-sm whitespace-nowrap"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {scrollPercentage}%
                    </motion.div>
                </div>
            </button>
        </motion.div>
    );
}
