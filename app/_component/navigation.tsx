'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { ScrollProgress } from '@/components/scroll-progress';
import { useLanguage } from '@/lib/language';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/lib/animations';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <motion.nav
            className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"
            initial="initial"
            animate="animate"
            variants={slideInFromTop}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <motion.div
                        className="text-xl font-bold text-foreground"
                        whileHover={{ scale: 1.05 }}
                    >
                        Hoàng Phúc
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <motion.button
                            onClick={() => scrollToSection('about')}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('nav.about')}
                        </motion.button>
                        <motion.button
                            onClick={() => scrollToSection('projects')}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('nav.projects')}
                        </motion.button>
                        <motion.button
                            onClick={() => scrollToSection('contact')}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('nav.contact')}
                        </motion.button>
                        <div className="flex items-center space-x-2">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <LanguageToggle />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <ThemeToggle />
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center space-x-2">
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <LanguageToggle />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <ThemeToggle />
                        </motion.div>
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="ghost" size="icon">
                                        <Menu className="h-5 w-5" />
                                        <span className="sr-only">{t('nav.menu')}</span>
                                    </Button>
                                </motion.div>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col space-y-4 mt-8">
                                    <motion.button
                                        onClick={() => scrollToSection('about')}
                                        className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
                                        whileHover={{ x: 5 }}
                                    >
                                        {t('nav.about')}
                                    </motion.button>
                                    <motion.button
                                        onClick={() => scrollToSection('projects')}
                                        className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
                                        whileHover={{ x: 5 }}
                                    >
                                        {t('nav.projects')}
                                    </motion.button>
                                    <motion.button
                                        onClick={() => scrollToSection('contact')}
                                        className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
                                        whileHover={{ x: 5 }}
                                    >
                                        {t('nav.contact')}
                                    </motion.button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            {/* Scroll Progress Bar */}
            <ScrollProgress className="absolute bottom-0 left-0 right-0" />
        </motion.nav>
    )
}