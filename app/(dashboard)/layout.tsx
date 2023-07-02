import { Inter } from "next/font/google";
// import Sidebar from "@/components/Sidebar";
import clsx from "clsx";
import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type DashboardRootLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardRootLayout({
  children,
}: DashboardRootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={clsx(inter.variable, "dark")}>
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">
          {/* <Sidebar /> */}
          <main className="w-full pl-6 h-full">{children}</main>
        </GlassPane>
      </body>
    </html>
  );
}
