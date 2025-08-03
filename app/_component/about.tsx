'use client';

import { Code, Database, ExternalLink, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, useIntersectionObserver } from "@/lib/animations";

export const About = () => {
    const [ref, isIntersecting] = useIntersectionObserver();

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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Giới thiệu về Tôi</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Tôi là một sinh viên Công nghệ Thông tin tận tâm tại Trường Đại học Đà Lạt, chuyên ngành Kỹ thuật Phần mềm.
                        Đam mê của tôi là phát triển các giải pháp phần mềm sáng tạo và luôn cập nhật với các công nghệ mới nổi.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={fadeInLeft}>
                        <h3 className="text-2xl font-semibold text-foreground mb-6">Hành trình của Tôi</h3>
                        <div className="space-y-4 text-muted-foreground">
                            <motion.p variants={fadeInUp}>
                                Hiện đang theo học bằng Cử nhân ngành Kỹ thuật Phần mềm tại Trường Đại học Đà Lạt,
                                tôi đã xây dựng được nền tảng vững chắc về các nguyên lý khoa học máy tính và thực hành phát triển phần mềm.
                            </motion.p>
                            <motion.p variants={fadeInUp}>
                                Hành trình học tập của tôi đã trang bị cho tôi kiến thức toàn diện về các ngôn ngữ lập trình,
                                quản lý cơ sở dữ liệu, phát triển web và kiến trúc phần mềm. Tôi đặc biệt quan tâm đến
                                phát triển full-stack và các công nghệ mới nổi như điện toán đám mây và AI.
                            </motion.p>
                            <motion.p variants={fadeInUp}>
                                Thông qua các dự án và bài tập khác nhau, tôi đã có được kinh nghiệm thực tế trong việc xây dựng
                                các ứng dụng có thể mở rộng, làm việc với nhóm và giải quyết các thách thức kỹ thuật phức tạp.
                            </motion.p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInRight}>
                        <h3 className="text-2xl font-semibold text-foreground mb-6">Kỹ năng Kỹ thuật</h3>
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