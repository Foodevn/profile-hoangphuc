'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language = 'en' | 'vi';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Từ điển dịch thuật
const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'nav.menu': 'Open menu',

        // Hero
        'hero.title': 'Full-Stack Developer',
        'hero.subtitle': 'I create beautiful and functional web applications using modern technologies',
        'hero.cta': 'View My Work',

        // About
        'about.title': 'About Me',
        'about.description': 'I am a passionate full-stack developer with experience in building modern web applications. I love creating clean, efficient code and beautiful user interfaces.',
        'about.skills': 'Skills',

        // Projects
        'projects.title': 'My Projects',
        'projects.description': 'Here are some of the projects I\'ve worked on recently',
        'projects.viewProject': 'View Project',
        'projects.viewCode': 'View Code',
        'projects.status.completed': 'Completed',
        'projects.status.in-progress': 'In Progress',
        'projects.status.planned': 'Planned',

        // Contact
        'contact.title': 'Get In Touch',
        'contact.description': 'I\'m always interested in new opportunities and exciting projects. Let\'s connect!',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Send Message',
        'contact.sending': 'Sending...',

        // Footer
        'footer.rights': 'All rights reserved.',

        // Admin
        'admin.login': 'Admin Login',
        'admin.username': 'Username',
        'admin.password': 'Password',
        'admin.signin': 'Sign In',
        'admin.dashboard': 'Content Management Dashboard',
        'admin.logout': 'Logout',
        'admin.hero': 'Hero Section',
        'admin.about': 'About Section',
        'admin.projects': 'Projects',
        'admin.contact': 'Contact Section',
        'admin.save': 'Save Changes',
        'admin.add': 'Add New',
        'admin.edit': 'Edit',
        'admin.delete': 'Delete',
        'admin.cancel': 'Cancel',
        'admin.title': 'Title',
        'admin.subtitle': 'Subtitle',
        'admin.description': 'Description',
        'admin.cta': 'Call to Action',
        'admin.skills': 'Skills (comma separated)',
        'admin.projectName': 'Project Name',
        'admin.projectDescription': 'Project Description',
        'admin.technologies': 'Technologies (comma separated)',
        'admin.projectLink': 'Project Link',
        'admin.codeLink': 'Code Link',
        'admin.status': 'Status',
        'admin.contactInfo': 'Contact Information',
        'admin.email': 'Email',
        'admin.phone': 'Phone',
        'admin.address': 'Address',
    },
    vi: {
        // Navigation
        'nav.about': 'Giới thiệu',
        'nav.projects': 'Dự án',
        'nav.contact': 'Liên hệ',
        'nav.menu': 'Mở menu',

        // Hero
        'hero.title': 'Full-Stack Developer',
        'hero.subtitle': 'Tôi tạo ra các ứng dụng web đẹp và hiệu quả sử dụng công nghệ hiện đại',
        'hero.cta': 'Xem Các Dự Án',

        // About
        'about.title': 'Giới Thiệu',
        'about.description': 'Tôi là một full-stack developer đam mê với kinh nghiệm xây dựng các ứng dụng web hiện đại. Tôi yêu thích tạo ra code sạch, hiệu quả và giao diện người dùng đẹp mắt.',
        'about.skills': 'Kỹ Năng',

        // Projects
        'projects.title': 'Dự Án Của Tôi',
        'projects.description': 'Đây là một số dự án tôi đã làm gần đây',
        'projects.viewProject': 'Xem Dự Án',
        'projects.viewCode': 'Xem Code',
        'projects.status.completed': 'Hoàn thành',
        'projects.status.in-progress': 'Đang thực hiện',
        'projects.status.planned': 'Lên kế hoạch',

        // Contact
        'contact.title': 'Liên Hệ',
        'contact.description': 'Tôi luôn quan tâm đến những cơ hội mới và các dự án thú vị. Hãy kết nối với tôi!',
        'contact.name': 'Tên',
        'contact.email': 'Email',
        'contact.message': 'Tin nhắn',
        'contact.send': 'Gửi Tin Nhắn',
        'contact.sending': 'Đang gửi...',

        // Footer
        'footer.rights': 'Bảo lưu mọi quyền.',

        // Admin
        'admin.login': 'Đăng Nhập Admin',
        'admin.username': 'Tên đăng nhập',
        'admin.password': 'Mật khẩu',
        'admin.signin': 'Đăng Nhập',
        'admin.dashboard': 'Bảng Điều Khiển Quản Lý Nội Dung',
        'admin.logout': 'Đăng Xuất',
        'admin.hero': 'Phần Hero',
        'admin.about': 'Phần Giới Thiệu',
        'admin.projects': 'Dự Án',
        'admin.contact': 'Phần Liên Hệ',
        'admin.save': 'Lưu Thay Đổi',
        'admin.add': 'Thêm Mới',
        'admin.edit': 'Chỉnh Sửa',
        'admin.delete': 'Xóa',
        'admin.cancel': 'Hủy',
        'admin.title': 'Tiêu đề',
        'admin.subtitle': 'Tiêu đề phụ',
        'admin.description': 'Mô tả',
        'admin.cta': 'Nút hành động',
        'admin.skills': 'Kỹ năng (phân cách bằng dấu phẩy)',
        'admin.projectName': 'Tên Dự Án',
        'admin.projectDescription': 'Mô Tả Dự Án',
        'admin.technologies': 'Công Nghệ (phân cách bằng dấu phẩy)',
        'admin.projectLink': 'Link Dự Án',
        'admin.codeLink': 'Link Code',
        'admin.status': 'Trạng Thái',
        'admin.contactInfo': 'Thông Tin Liên Hệ',
        'admin.email': 'Email',
        'admin.phone': 'Điện thoại',
        'admin.address': 'Địa chỉ',
    }
};

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>('vi'); // Mặc định tiếng Việt

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'vi')) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations[typeof language]] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
