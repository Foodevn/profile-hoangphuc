'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, useIntersectionObserver } from "@/lib/animations";
import { useContent } from "@/lib/content";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    status: string;
    link: string;
}

export const Projects = () => {
    const [ref, isIntersecting] = useIntersectionObserver();
    const { content } = useContent();
    const projectsContent = content.projects;

    return (
        <motion.section
            ref={ref}
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
            initial="initial"
            animate={isIntersecting ? "animate" : "initial"}
            variants={staggerContainer}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{projectsContent.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {projectsContent.description}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projectsContent.items.map((project: Project, index: number) => (
                        <motion.div
                            key={index}
                            variants={scaleIn}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="hover:shadow-lg transition-all duration-300 h-full">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Badge
                                                variant={project.status === 'Hoàn thành' ? 'default' : 'secondary'}
                                                className={project.status === 'Hoàn thành' ? 'bg-green-100 text-green-800 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-yellow-100 text-yellow-800 dark:bg-amber-900/30 dark:text-amber-300'}
                                            >
                                                {project.status}
                                            </Badge>
                                        </motion.div>
                                    </div>
                                    <CardDescription className="text-muted-foreground">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <h4 className="font-medium text-foreground mb-2">Công nghệ sử dụng:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech: string, techIndex: number) => (
                                                <motion.div
                                                    key={techIndex}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Badge variant="outline" className="text-xs cursor-pointer">
                                                        {tech}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full transition-all duration-200"
                                            onClick={() => window.open(project.link, '_blank')}
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Xem Dự án
                                        </Button>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}