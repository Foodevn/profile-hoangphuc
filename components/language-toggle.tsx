'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'vi' : 'en');
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="relative hover:bg-accent"
        >
            <Languages className="h-[1.2rem] w-[1.2rem]" />
            <motion.span
                key={language}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-1 -right-1 text-[0.6rem] font-bold bg-primary text-primary-foreground rounded-full px-1"
            >
                {language.toUpperCase()}
            </motion.span>
            <span className="sr-only">
                {language === 'en' ? 'Switch to Vietnamese' : 'Chuyển sang tiếng Anh'}
            </span>
        </Button>
    );
}
