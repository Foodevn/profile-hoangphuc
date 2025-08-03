'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { useContent } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LogOut, Save, Home, User, FolderOpen, Mail, CheckCircle, Plus, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
    const { isAuthenticated, logout } = useAuth();
    const { content, updateContent } = useContent();
    const router = useRouter();
    const [saveStatus, setSaveStatus] = useState('');

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/admin');
        }
    }, [isAuthenticated, router]);

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    const handleSave = (section: keyof typeof content, data: any) => {
        updateContent(section, data);
        setSaveStatus('Đã lưu thành công!');
        setTimeout(() => setSaveStatus(''), 3000);
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-muted/40 dark:from-slate-900 dark:via-purple-900/30 dark:to-violet-900/20">
            {/* Header */}
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <div className="ml-16 mr-4 flex">
                        <h1 className="text-lg font-semibold">Bảng điều khiển Admin</h1>
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end mr-16">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => router.push('/')}
                            className="mr-2"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            Xem trang chính
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleLogout}>
                            <LogOut className="w-4 h-4 mr-2" />
                            Đăng xuất
                        </Button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto p-6">
                {saveStatus && (
                    <Alert className="mb-6">
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>{saveStatus}</AlertDescription>
                    </Alert>
                )}

                <Tabs defaultValue="hero" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="hero" className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Hero
                        </TabsTrigger>
                        <TabsTrigger value="about" className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Giới thiệu
                        </TabsTrigger>
                        <TabsTrigger value="projects" className="flex items-center gap-2">
                            <FolderOpen className="w-4 h-4" />
                            Dự án
                        </TabsTrigger>
                        <TabsTrigger value="contact" className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Liên hệ
                        </TabsTrigger>
                    </TabsList>

                    {/* Hero Section */}
                    <TabsContent value="hero">
                        <HeroEditor content={content.hero} onSave={(data) => handleSave('hero', data)} />
                    </TabsContent>

                    {/* About Section */}
                    <TabsContent value="about">
                        <AboutEditor content={content.about} onSave={(data) => handleSave('about', data)} />
                    </TabsContent>

                    {/* Projects Section */}
                    <TabsContent value="projects">
                        <ProjectsEditor content={content.projects} onSave={(data) => handleSave('projects', data)} />
                    </TabsContent>

                    {/* Contact Section */}
                    <TabsContent value="contact">
                        <ContactEditor content={content.contact} onSave={(data) => handleSave('contact', data)} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

// Hero Editor Component
function HeroEditor({ content, onSave }: { content: any; onSave: (data: any) => void }) {
    const [formData, setFormData] = useState(content);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Chỉnh sửa phần Hero</CardTitle>
                <CardDescription>Cập nhật thông tin cá nhân và giới thiệu chính</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="name">Tên</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label htmlFor="title">Chức danh</Label>
                        <Input
                            id="title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>
                </div>
                <div>
                    <Label htmlFor="description">Mô tả</Label>
                    <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={3}
                    />
                </div>
                <Button onClick={() => onSave(formData)}>
                    <Save className="w-4 h-4 mr-2" />
                    Lưu thay đổi
                </Button>
            </CardContent>
        </Card>
    );
}

// About Editor Component
function AboutEditor({ content, onSave }: { content: any; onSave: (data: any) => void }) {
    const [formData, setFormData] = useState(content);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Chỉnh sửa phần Giới thiệu</CardTitle>
                <CardDescription>Cập nhật thông tin về bản thân và hành trình học tập</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <Label htmlFor="about-title">Tiêu đề</Label>
                    <Input
                        id="about-title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>
                <div>
                    <Label htmlFor="about-description">Mô tả</Label>
                    <Textarea
                        id="about-description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={4}
                    />
                </div>
                <div>
                    <Label>Hành trình (các đoạn văn)</Label>
                    {formData.journey.map((paragraph: string, index: number) => (
                        <Textarea
                            key={index}
                            value={paragraph}
                            onChange={(e) => {
                                const newJourney = [...formData.journey];
                                newJourney[index] = e.target.value;
                                setFormData({ ...formData, journey: newJourney });
                            }}
                            rows={3}
                            className="mb-2"
                            placeholder={`Đoạn văn ${index + 1}`}
                        />
                    ))}
                </div>
                <Button onClick={() => onSave(formData)}>
                    <Save className="w-4 h-4 mr-2" />
                    Lưu thay đổi
                </Button>
            </CardContent>
        </Card>
    );
}

// Projects Editor Component
function ProjectsEditor({ content, onSave }: { content: any; onSave: (data: any) => void }) {
    const [formData, setFormData] = useState(content);

    const addProject = () => {
        const newProject = {
            title: '',
            description: '',
            technologies: [],
            status: 'Đang thực hiện',
            link: '#'
        };
        setFormData({
            ...formData,
            items: [...formData.items, newProject]
        });
    };

    const removeProject = (index: number) => {
        const newItems = formData.items.filter((_: any, i: number) => i !== index);
        setFormData({
            ...formData,
            items: newItems
        });
    };

    const updateProject = (index: number, field: string, value: any) => {
        const newItems = [...formData.items];
        newItems[index] = {
            ...newItems[index],
            [field]: value
        };
        setFormData({
            ...formData,
            items: newItems
        });
    };

    const updateProjectTechnologies = (index: number, techString: string) => {
        const technologies = techString.split(',').map(tech => tech.trim()).filter(tech => tech);
        updateProject(index, 'technologies', technologies);
    };

    return (
        <div className="space-y-6">
            {/* General Settings */}
            <Card>
                <CardHeader>
                    <CardTitle>Cài đặt chung</CardTitle>
                    <CardDescription>Tiêu đề và mô tả chung cho phần dự án</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="projects-title">Tiêu đề</Label>
                        <Input
                            id="projects-title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label htmlFor="projects-description">Mô tả</Label>
                        <Textarea
                            id="projects-description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={3}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Projects List */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Danh sách dự án</CardTitle>
                        <CardDescription>Quản lý các dự án của bạn</CardDescription>
                    </div>
                    <Button onClick={addProject} size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Thêm dự án
                    </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                    {formData.items.map((project: any, index: number) => (
                        <div key={index} className="p-4 border rounded-lg space-y-4">
                            <div className="flex justify-between items-start">
                                <h4 className="text-lg font-medium">Dự án #{index + 1}</h4>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => removeProject(index)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label>Tên dự án</Label>
                                    <Input
                                        value={project.title}
                                        onChange={(e) => updateProject(index, 'title', e.target.value)}
                                        placeholder="Nhập tên dự án"
                                    />
                                </div>
                                <div>
                                    <Label>Trạng thái</Label>
                                    <Select
                                        value={project.status}
                                        onValueChange={(value: string) => updateProject(index, 'status', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Hoàn thành">Hoàn thành</SelectItem>
                                            <SelectItem value="Đang thực hiện">Đang thực hiện</SelectItem>
                                            <SelectItem value="Tạm dừng">Tạm dừng</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <Label>Mô tả dự án</Label>
                                <Textarea
                                    value={project.description}
                                    onChange={(e) => updateProject(index, 'description', e.target.value)}
                                    placeholder="Mô tả chi tiết về dự án"
                                    rows={3}
                                />
                            </div>

                            <div>
                                <Label>Công nghệ sử dụng</Label>
                                <Input
                                    value={project.technologies.join(', ')}
                                    onChange={(e) => updateProjectTechnologies(index, e.target.value)}
                                    placeholder="React, Node.js, MongoDB (cách nhau bằng dấu phẩy)"
                                />
                                <p className="text-sm text-muted-foreground mt-1">
                                    Nhập các công nghệ cách nhau bằng dấu phẩy
                                </p>
                            </div>

                            <div>
                                <Label>Link dự án</Label>
                                <Input
                                    value={project.link}
                                    onChange={(e) => updateProject(index, 'link', e.target.value)}
                                    placeholder="https://... hoặc #"
                                />
                            </div>
                        </div>
                    ))}

                    {formData.items.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                            <FolderOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>Chưa có dự án nào. Nhấn "Thêm dự án" để bắt đầu.</p>
                        </div>
                    )}
                </CardContent>
            </Card>

            <Button onClick={() => onSave(formData)} className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Lưu tất cả thay đổi
            </Button>
        </div>
    );
}

// Contact Editor Component
function ContactEditor({ content, onSave }: { content: any; onSave: (data: any) => void }) {
    const [formData, setFormData] = useState(content);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Chỉnh sửa phần Liên hệ</CardTitle>
                <CardDescription>Cập nhật thông tin liên hệ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <Label htmlFor="contact-title">Tiêu đề</Label>
                    <Input
                        id="contact-title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>
                <div>
                    <Label htmlFor="contact-description">Mô tả</Label>
                    <Textarea
                        id="contact-description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={3}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label htmlFor="location">Địa điểm</Label>
                        <Input
                            id="location"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label htmlFor="github">GitHub URL</Label>
                        <Input
                            id="github"
                            value={formData.github}
                            onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label htmlFor="facebook">Facebook URL</Label>
                        <Input
                            id="facebook"
                            value={formData.facebook}
                            onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                        />
                    </div>
                </div>
                <Button onClick={() => onSave(formData)}>
                    <Save className="w-4 h-4 mr-2" />
                    Lưu thay đổi
                </Button>
            </CardContent>
        </Card>
    );
}
