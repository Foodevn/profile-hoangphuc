'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ScrollProgressProps {
    className?: string;
    showPercentage?: boolean;
    height?: string;
}

export function ScrollProgress({
    className = '',
    showPercentage = false,
    height = 'h-1'
}: ScrollProgressProps) {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            setScrollPercentage(Math.round(latest * 100));
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div className={`relative ${className}`}>
            {/* Progress Bar Background */}
            <div className={`w-full ${height} bg-muted/20 dark:bg-slate-800/50`}>
                {/* Progress Bar Fill */}
                <motion.div
                    className={`${height} bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 dark:from-purple-500 dark:via-violet-500 dark:to-fuchsia-500 origin-[0%] relative overflow-hidden`}
                    style={{ scaleX }}
                >
                    {/* Glow Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400/50 via-teal-400/50 to-emerald-400/50 dark:from-purple-400/50 dark:via-violet-400/50 dark:to-fuchsia-400/50"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Shimmer Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                            x: ['-100%', '100%'],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>

            {/* Percentage Display */}
            {showPercentage && (
                <motion.div
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="bg-background/90 dark:bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-foreground border border-border shadow-sm">
                        {scrollPercentage}%
                    </div>
                </motion.div>
            )}
        </div>
    );
}
