import { Header } from "./home/header";
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="vi">
        <body>
            <Header />
            {children}
        </body>
      </html>
    );
  }