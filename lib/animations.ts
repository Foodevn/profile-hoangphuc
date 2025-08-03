'use client';

import { useEffect, useRef, useState } from 'react';
import { Variants } from 'framer-motion';

export const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, { threshold: 0.1, ...options });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return [ref, isIntersecting] as const;
};

export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 60 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
};

export const fadeInLeft: Variants = {
    initial: { opacity: 0, x: -60 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
};

export const fadeInRight: Variants = {
    initial: { opacity: 0, x: 60 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
};

export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
};

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

export const slideInFromTop: Variants = {
    initial: { opacity: 0, y: -50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
    }
};

export const bounceIn: Variants = {
    initial: { opacity: 0, scale: 0.3 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.68, -0.55, 0.265, 1.55]
        }
    }
};

export const floatingAnimation: Variants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
