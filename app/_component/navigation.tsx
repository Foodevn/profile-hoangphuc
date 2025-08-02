export const Navigation = () =>{
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
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
    )
}