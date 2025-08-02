'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-xl font-bold text-foreground">Hoàng Phúc</div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Giới thiệu
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Dự án
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Liên hệ
                        </button>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Mở menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col space-y-4 mt-8">
                                    <button
                                        onClick={() => scrollToSection('about')}
                                        className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
                                    >
                                        Giới thiệu
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('projects')}
                                        className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
                                    >
                                        Dự án
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
                                    >
                                        Liên hệ
                                    </button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}