import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}