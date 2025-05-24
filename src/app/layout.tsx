import type { Metadata } from "next";
import { ClientBody } from "./ClientBody";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Pictory Clone - AI Video Creator",
  description: "Create professional videos from text in minutes with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
