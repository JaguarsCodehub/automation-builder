import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import ModalProvider from '@/providers/modal-provider';
import { ClerkProvider } from '@clerk/nextjs';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Automation Builder',
  description: 'Automation Builder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={font.className}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <ModalProvider>{children}</ModalProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
