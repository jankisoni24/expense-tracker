import "@/app/globals.css";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { AxiosProvider } from "@/providers/AxiosProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <ReactQueryProvider>
          <AxiosProvider>
            {children}
            <Toaster richColors position="top-center" />
          </AxiosProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
