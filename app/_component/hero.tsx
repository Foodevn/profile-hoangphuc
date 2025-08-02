import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-8">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1">
                            <Image
                                src="/images/avatar.jpg"
                                alt="Hoàng Phúc"
                                width={120}
                                height={120}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                        Hoàng Phúc
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                        Sinh viên CNTT - Kỹ thuật Phần mềm
                    </p>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Trường Đại học Đà Lạt • Đam mê tạo ra các giải pháp phần mềm sáng tạo
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => scrollToSection('projects')}
                            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                        >
                            Xem Công việc của Tôi
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => scrollToSection('contact')}
                        >
                            Liên hệ
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}