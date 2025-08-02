import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Linkedin, Mail, MapPin } from "lucide-react";


export const Contact = () => {
    return (

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Liên hệ</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Tôi luôn sẵn sàng thảo luận về các cơ hội mới, hợp tác hoặc chỉ đơn giản là trò chuyện về công
                        nghệ.
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
                                        <h3 className="font-medium text-foreground">Email</h3>
                                        <p className="text-muted-foreground">2212442@dlu.edu.vn</p>
                                    </div>
                                </div>

                                <Separator />

                                <div className="flex items-center space-x-4">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <h3 className="font-medium text-foreground">Vị trí</h3>
                                        <p className="text-muted-foreground">Đà Lạt, Lâm Đồng, Việt Nam</p>
                                    </div>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="font-medium text-foreground mb-4">Kết nối với tôi</h3>
                                    <div className="flex space-x-4">
                                        <Button variant="outline" size="sm" onClick={() => window.open('https://github.com/Foodevn', '_blank')}>
                                            <Github className="w-4 h-4 mr-2" />
                                            GitHub
                                        </Button>
                                        <Button variant="outline" size="sm" onClick={() => window.open('https://www.facebook.com/phuc.hoang.841946/', '_blank')}>
                                            <Facebook className="w-4 h-4 mr-2" />
                                            Facebook
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

    )
}