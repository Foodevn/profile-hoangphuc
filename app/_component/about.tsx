import {Code, Database, ExternalLink, Globe} from "lucide-react";
import {Badge} from "@/components/ui/badge";

export const About = () => {

    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"] },
        { category: "Backend", items: ["Node.js", "Java", "Spring Boot", "Express", "Python"] },
        { category: "Cơ sở dữ liệu", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
        { category: "Công cụ & Khác", items: ["Git", "Docker", "AWS", "Firebase", "REST APIs"] }
    ];
    
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Giới thiệu về Tôi</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Tôi là một sinh viên Công nghệ Thông tin tận tâm tại Trường Đại học Đà Lạt, chuyên ngành Kỹ thuật Phần mềm.
                        Đam mê của tôi là phát triển các giải pháp phần mềm sáng tạo và luôn cập nhật với các công nghệ mới nổi.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hành trình của Tôi</h3>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Hiện đang theo học bằng Cử nhân ngành Kỹ thuật Phần mềm tại Trường Đại học Đà Lạt,
                                tôi đã xây dựng được nền tảng vững chắc về các nguyên lý khoa học máy tính và thực hành phát triển phần mềm.
                            </p>
                            <p>
                                Hành trình học tập của tôi đã trang bị cho tôi kiến thức toàn diện về các ngôn ngữ lập trình,
                                quản lý cơ sở dữ liệu, phát triển web và kiến trúc phần mềm. Tôi đặc biệt quan tâm đến
                                phát triển full-stack và các công nghệ mới nổi như điện toán đám mây và AI.
                            </p>
                            <p>
                                Thông qua các dự án và bài tập khác nhau, tôi đã có được kinh nghiệm thực tế trong việc xây dựng
                                các ứng dụng có thể mở rộng, làm việc với nhóm và giải quyết các thách thức kỹ thuật phức tạp.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kỹ năng Kỹ thuật</h3>
                        <div className="space-y-6">
                            {skills.map((skillGroup, index) => (
                                <div key={index}>
                                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                                        {skillGroup.category === 'Frontend' && <Globe className="w-4 h-4 mr-2" />}
                                        {skillGroup.category === 'Backend' && <Code className="w-4 h-4 mr-2" />}
                                        {skillGroup.category === 'Cơ sở dữ liệu' && <Database className="w-4 h-4 mr-2" />}
                                        {skillGroup.category === 'Công cụ & Khác' && <ExternalLink className="w-4 h-4 mr-2" />}
                                        {skillGroup.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <Badge key={skillIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}