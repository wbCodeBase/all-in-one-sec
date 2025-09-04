import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "All-in-one AI With Human Touch",
  description:
    "Experience powerful AI solutions combined with real human expertise. Our all-in-one platform helps you automate, connect, and grow while keeping a personal touch in every interaction.",
};



// export const metadata = {
//   // title: {
//   //   template: '%s',
//   //   default: 'WeOne AI - Intelligent Automation Solutions', // a default is required when creating a template
//   // },
//   // description: "AI-powered multi-service automation platform delivering intelligent solutions across chatbot, content, and voice domains",


//   robots: {
//     template: '%s',
//     default: 'noindex, nofollow'
//   }, // Ensures pages are marked as noindex

//   metadataBase: new URL('https://www.weoneai.com'),

//   // alternates: {
//   //   canonical: '/',
//   // },



// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
