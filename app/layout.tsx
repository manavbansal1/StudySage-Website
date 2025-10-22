import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "StudySage Project",
  description: "AI-powered study companion project website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
