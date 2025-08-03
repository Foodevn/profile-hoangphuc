'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, useIntersectionObserver } from "@/lib/animations";

export const Contact = () => {
    const [ref, isIntersecting] = useIntersectionObserver();

    return (
        <motion.section
            ref={ref}
            id="contact"
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Liên hệ</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Tôi luôn sẵn sàng thảo luận về các cơ hội mới, hợp tác hoặc chỉ đơn giản là trò chuyện về công
                        nghệ.
                        Hãy liên hệ với tôi!
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <motion.div variants={scaleIn}>
                        <Card className="hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="space-y-6">
                                    <motion.div
                                        className="flex items-center space-x-4"
                                        variants={fadeInUp}
                                        whileHover={{ x: 5 }}
                                    >
                                        <Mail className="w-6 h-6 text-blue-600 dark:text-purple-400" />
                                        <div>
                                            <h3 className="font-medium text-foreground">Email</h3>
                                            <p className="text-muted-foreground">2212442@dlu.edu.vn</p>
                                        </div>
                                    </motion.div>

                                    <Separator />

                                    <motion.div
                                        className="flex items-center space-x-4"
                                        variants={fadeInUp}
                                        whileHover={{ x: 5 }}
                                    >
                                        <MapPin className="w-6 h-6 text-blue-600 dark:text-purple-400" />
                                        <div>
                                            <h3 className="font-medium text-foreground">Vị trí</h3>
                                            <p className="text-muted-foreground">Đà Lạt, Lâm Đồng, Việt Nam</p>
                                        </div>
                                    </motion.div>

                                    <Separator />

                                    <motion.div variants={fadeInUp}>
                                        <h3 className="font-medium text-foreground mb-4">Kết nối với tôi</h3>
                                        <div className="flex space-x-4">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => window.open('https://github.com/Foodevn', '_blank')}
                                                    className="transition-all duration-200"
                                                >
                                                    <Github className="w-4 h-4 mr-2" />
                                                    GitHub
                                                </Button>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => window.open('https://www.facebook.com/phuc.hoang.841946/', '_blank')}
                                                    className="transition-all duration-200"
                                                >
                                                    <Facebook className="w-4 h-4 mr-2" />
                                                    Facebook
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}