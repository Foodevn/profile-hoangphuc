'use client';

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export const Footer = () => {
    return (
        <motion.footer
            className="py-8 px-4 sm:px-6 lg:px-8 bg-muted"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <div className="max-w-7xl mx-auto text-center">
                <motion.p
                    className="text-muted-foreground"
                    whileHover={{ scale: 1.02 }}
                >
                    © 2025 Hoàng Phúc. Được xây dựng với Next.js và Tailwind CSS.
                </motion.p>
            </div>
        </motion.footer>
    )
}