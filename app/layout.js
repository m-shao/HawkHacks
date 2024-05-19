import { Inter } from 'next/font/google';
import './globals.css';
import { client } from './backend/mongo/interface.js';

console.log(client);

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning={true} lang='en'>
            <body suppressHydrationWarning={true} className={inter.className}>
                {children}
            </body>
        </html>
    );
}
