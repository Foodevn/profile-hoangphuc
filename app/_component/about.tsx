'use client';

import { Code, Database, ExternalLink, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, useIntersectionObserver } from "@/lib/animations";
import { useContent } from "@/lib/content";
import { useLanguage } from "@/lib/language";

export const About = () => {
    const [ref, isIntersecting] = useIntersectionObserver();
    const { content } = useContent();
    const { t } = useLanguage();
    const aboutContent = content.about;

    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"] },
        { category: "Backend", items: ["Node.js", "Java", "Spring Boot", "Express", "Python"] },
        { category: "Cơ sở dữ liệu", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
        { category: "Công cụ & Khác", items: ["Git", "Docker", "AWS", "Firebase", "REST APIs"] }
    ];

    return (
        <motion.section
            ref={ref}
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
            initial="initial"
            animate={isIntersecting ? "animate" : "initial"}
            variants={staggerContainer}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {aboutContent.title || t('about.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {aboutContent.description || t('about.description')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={fadeInLeft}>
                        <h3 className="text-2xl font-semibold text-foreground mb-6">Hành trình của Tôi</h3>
                        <div className="space-y-4 text-muted-foreground">
                            {aboutContent.journey.map((paragraph: string, index: number) => (
                                <motion.p key={index} variants={fadeInUp}>
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInRight}>
                        <h3 className="text-2xl font-semibold text-foreground mb-6">{t('about.skills')}</h3>
                        <div className="space-y-6">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <h4 className="font-medium text-foreground mb-3 flex items-center">
                                        {skillGroup.category === 'Frontend' && <Globe className="w-4 h-4 mr-2" />}
                                        {skillGroup.category === 'Backend' && <Code className="w-4 h-4 mr-2" />}
                                        {skillGroup.category === 'Cơ sở dữ liệu' && <Database className="w-4 h-4 mr-2" />}
                                        {skillGroup.category === 'Công cụ & Khác' && <ExternalLink className="w-4 h-4 mr-2" />}
                                        {skillGroup.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skillIndex}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-blue-50 text-blue-700 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-600/30 cursor-pointer transition-all duration-200"
                                                >
                                                    {skill}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}