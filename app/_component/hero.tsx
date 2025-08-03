'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, floatingAnimation } from "@/lib/animations";

export const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.section
            className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <motion.div
                        className="relative w-32 h-32 mx-auto mb-8"
                        variants={scaleIn}
                    >
                        <motion.div
                            className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 dark:from-purple-600 dark:to-violet-600 p-1"
                            variants={floatingAnimation}
                        >
                            <Image
                                src="/images/avatar.jpg"
                                alt="Hoàng Phúc"
                                width={120}
                                height={120}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-foreground mb-4"
                        variants={fadeInUp}
                    >
                        Hoàng Phúc
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-muted-foreground mb-6"
                        variants={fadeInUp}
                    >
                        Sinh viên CNTT - Kỹ thuật Phần mềm
                    </motion.p>

                    <motion.p
                        className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        Trường Đại học Đà Lạt • Đam mê tạo ra các giải pháp phần mềm sáng tạo
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        variants={fadeInUp}
                    >
                        <Button
                            size="lg"
                            onClick={() => scrollToSection('projects')}
                            className="bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 transform hover:scale-105 transition-all duration-200"
                        >
                            Xem Công việc của Tôi
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => scrollToSection('contact')}
                            className="transform hover:scale-105 transition-all duration-200"
                        >
                            Liên hệ
                        </Button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}