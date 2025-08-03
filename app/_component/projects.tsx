'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, useIntersectionObserver } from "@/lib/animations";

export const Projects = () => {
    const [ref, isIntersecting] = useIntersectionObserver();

    const projects = [
        {
            title: "Hệ thống làm việc nhóm ",
            description: "Công cụ quản lý dự án cộng tác với cập nhật thời gian thực, tính năng cộng tác nhóm và theo dõi tiến độ. Bao gồm bảng Kanban, phân công nhiệm vụ và thông báo hạn chót.",
            technologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
            status: "Hoàn thành",
            link: "https://realtime.hphucdev.id.vn/"
        },
        {
            title: "Nền tảng Thương mại Điện tử",
            description: "Ứng dụng web thương mại điện tử full-stack với xác thực người dùng, tích hợp thanh toán và bảng điều khiển quản trị. Bao gồm các tính năng như danh mục sản phẩm, giỏ hàng, quản lý đơn hàng và theo dõi tồn kho thời gian thực.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
            status: "Hoàn thành",
            link: "#"
        },
        {
            title: "Ứng dụng Dự báo Thời tiết",
            description: "Ứng dụng thời tiết đáp ứng cung cấp điều kiện hiện tại và dự báo 7 ngày. Bao gồm dữ liệu thời tiết theo vị trí, bản đồ tương tác và cảnh báo thời tiết nghiêm trọng.",
            technologies: ["React Native", "OpenWeather API", "Redux", "TypeScript", "Maps API"],
            status: "Hoàn thành",
            link: "#"
        },
        {
            title: "Hệ thống Quản lý Khóa học Đại học",
            description: "Hệ thống toàn diện để quản lý các khóa học đại học, đăng ký sinh viên và lịch trình học thuật. Bao gồm theo dõi điểm số, giám sát chuyên cần và tạo báo cáo tự động.",
            technologies: ["Java", "Spring Boot", "MySQL", "Angular", "Docker"],
            status: "Đang thực hiện",
            link: "#"
        }
    ];

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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dự án của Tôi</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Đây là một số dự án tôi đã làm việc trong quá trình học tập và thời gian cá nhân.
                        Mỗi dự án đại diện cho một bước trong hành trình học tập của tôi và thể hiện các kỹ năng kỹ
                        thuật khác nhau.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
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
                                            {project.technologies.map((tech, techIndex) => (
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