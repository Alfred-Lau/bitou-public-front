import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'PPB - Next.js',
  description: '初始化项目',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
