import type { Metadata } from "next/types";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Office Access Dashboard",
  description: "Intelligent office access management system dashboard",
    generator: 'v0.dev'
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // In a real application, you might fetch defaultOpen from a cookie or user preference
  // const cookieStore = await cookies();
  // const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
