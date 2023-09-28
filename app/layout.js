import Navbar from '@/components/Navbar/Navbar';
import { LoadingProvider } from '@/context/LoadingContext';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Joy',
    description: 'Fronted Web Developer',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <LoadingProvider>
                    <Navbar />
                    {children}
                </LoadingProvider>
            </body>
        </html>
    );
}
