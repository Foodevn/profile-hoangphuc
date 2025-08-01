"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Nền tảng Thương mại Điện tử",
    description: "Ứng dụng web thương mại điện tử full-stack với xác thực người dùng, tích hợp thanh toán và bảng điều khiển quản trị. Bao gồm các tính năng như danh mục sản phẩm, giỏ hàng, quản lý đơn hàng và theo dõi tồn kho thời gian thực.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
    status: "Hoàn thành",
    link: "#"
  },
  {
    title: "Hệ thống Quản lý Công việc",
    description: "Công cụ quản lý dự án cộng tác với cập nhật thời gian thực, tính năng cộng tác nhóm và theo dõi tiến độ. Bao gồm bảng Kanban, phân công nhiệm vụ và thông báo hạn chót.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "WebSocket", "Tailwind CSS"],
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

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"] },
  { category: "Backend", items: ["Node.js", "Java", "Spring Boot", "Express", "Python"] },
  { category: "Cơ sở dữ liệu", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  { category: "Công cụ & Khác", items: ["Git", "Docker", "AWS", "Firebase", "REST APIs"] }
];

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900">Hoàng Phúc</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Giới thiệu
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Dự án
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Liên hệ
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white text-4xl font-bold">
                HP
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hoàng Phúc
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Sinh viên CNTT - Kỹ thuật Phần mềm
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Trường Đại học Đà Lạt • Đam mê tạo ra các giải pháp phần mềm sáng tạo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700"
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

      {/* About Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dự án của Tôi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Đây là một số dự án tôi đã làm việc trong quá trình học tập và thời gian cá nhân. 
              Mỗi dự án đại diện cho một bước trong hành trình học tập của tôi và thể hiện các kỹ năng kỹ thuật khác nhau.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                    <Badge 
                      variant={project.status === 'Hoàn thành' ? 'default' : 'secondary'}
                      className={project.status === 'Hoàn thành' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Công nghệ sử dụng:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Xem Dự án
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Liên hệ</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tôi luôn sẵn sàng thảo luận về các cơ hội mới, hợp tác hoặc chỉ đơn giản là trò chuyện về công nghệ. 
              Hãy liên hệ với tôi!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">hoangphuc.student@dlu.edu.vn</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Vị trí</h3>
                      <p className="text-gray-600">Đà Lạt, Lâm Đồng, Việt Nam</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Kết nối với tôi</h3>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Hoàng Phúc. Được xây dựng với Next.js và Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}