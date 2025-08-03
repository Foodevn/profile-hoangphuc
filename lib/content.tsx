'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface ContentData {
    hero: {
        name: string;
        title: string;
        description: string;
        university: string;
    };
    about: {
        title: string;
        description: string;
        journey: string[];
    };
    projects: {
        title: string;
        description: string;
        items: Array<{
            title: string;
            description: string;
            technologies: string[];
            status: string;
            link: string;
        }>;
    };
    contact: {
        title: string;
        description: string;
        email: string;
        location: string;
        github: string;
        facebook: string;
    };
}

interface ContentContextType {
    content: ContentData;
    updateContent: (section: keyof ContentData, data: any) => void;
}

const defaultContent: ContentData = {
    hero: {
        name: 'Hoàng Phúc',
        title: 'Sinh viên CNTT - Kỹ thuật Phần mềm',
        description: 'Trường Đại học Đà Lạt • Đam mê tạo ra các giải pháp phần mềm sáng tạo',
        university: 'Trường Đại học Đà Lạt'
    },
    about: {
        title: 'Giới thiệu về Tôi',
        description: 'Tôi là một sinh viên Công nghệ Thông tin tận tâm tại Trường Đại học Đà Lạt, chuyên ngành Kỹ thuật Phần mềm. Đam mê của tôi là phát triển các giải pháp phần mềm sáng tạo và luôn cập nhật với các công nghệ mới nổi.',
        journey: [
            'Hiện đang theo học bằng Cử nhân ngành Kỹ thuật Phần mềm tại Trường Đại học Đà Lạt, tôi đã xây dựng được nền tảng vững chắc về các nguyên lý khoa học máy tính và thực hành phát triển phần mềm.',
            'Hành trình học tập của tôi đã trang bị cho tôi kiến thức toàn diện về các ngôn ngữ lập trình, quản lý cơ sở dữ liệu, phát triển web và kiến trúc phần mềm. Tôi đặc biệt quan tâm đến phát triển full-stack và các công nghệ mới nổi như điện toán đám mây và AI.',
            'Thông qua các dự án và bài tập khác nhau, tôi đã có được kinh nghiệm thực tế trong việc xây dựng các ứng dụng có thể mở rộng, làm việc với nhóm và giải quyết các thách thức kỹ thuật phức tạp.'
        ]
    },
    projects: {
        title: 'Dự án của Tôi',
        description: 'Đây là một số dự án tôi đã làm việc trong quá trình học tập và thời gian cá nhân. Mỗi dự án đại diện cho một bước trong hành trình học tập của tôi và thể hiện các kỹ năng kỹ thuật khác nhau.',
        items: [
            {
                title: 'Hệ thống làm việc nhóm',
                description: 'Công cụ quản lý dự án cộng tác với cập nhật thời gian thực, tính năng cộng tác nhóm và theo dõi tiến độ. Bao gồm bảng Kanban, phân công nhiệm vụ và thông báo hạn chót.',
                technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
                status: 'Hoàn thành',
                link: 'https://realtime.hphucdev.id.vn/'
            },
            {
                title: 'Nền tảng Thương mại Điện tử',
                description: 'Ứng dụng web thương mại điện tử full-stack với xác thực người dùng, tích hợp thanh toán và bảng điều khiển quản trị.',
                technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'JWT'],
                status: 'Hoàn thành',
                link: '#'
            }
        ]
    },
    contact: {
        title: 'Liên hệ',
        description: 'Tôi luôn sẵn sàng thảo luận về các cơ hội mới, hợp tác hoặc chỉ đơn giản là trò chuyện về công nghệ. Hãy liên hệ với tôi!',
        email: '2212442@dlu.edu.vn',
        location: 'Đà Lạt, Lâm Đồng, Việt Nam',
        github: 'https://github.com/Foodevn',
        facebook: 'https://www.facebook.com/phuc.hoang.841946/'
    }
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
    const [content, setContent] = useState<ContentData>(defaultContent);

    useEffect(() => {
        // Load content từ localStorage nếu có
        const savedContent = localStorage.getItem('websiteContent');
        if (savedContent) {
            try {
                setContent(JSON.parse(savedContent));
            } catch (error) {
                console.error('Error loading saved content:', error);
            }
        }
    }, []);

    const updateContent = (section: keyof ContentData, data: any) => {
        const newContent = {
            ...content,
            [section]: { ...content[section], ...data }
        };
        setContent(newContent);
        localStorage.setItem('websiteContent', JSON.stringify(newContent));
    };

    return (
        <ContentContext.Provider value={{ content, updateContent }}>
            {children}
        </ContentContext.Provider>
    );
}

export function useContent() {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
}
