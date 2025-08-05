import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeScript } from '@/components/theme-script';
import { AuthProvider } from '@/lib/auth';
import { ContentProvider } from '@/lib/content';
import { LanguageProvider } from '@/lib/language';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hoàng Phúc - Sinh viên CNTT',
  description: 'Portfolio cá nhân của Hoàng Phúc - Sinh viên Kỹ thuật Phần mềm tại Đại học Đà Lạt',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning className="dark">
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <AuthProvider>
            <ContentProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem={false}
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </ContentProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}