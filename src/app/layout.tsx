import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import Providers from "./Providers";

export const metadata: Metadata = {
  title: "CBS - Content Builder for SocialMedia",
  description: "A platform designed to enhance content engagement across multiple social media channels. It allows users to link their blog platforms or YouTube channels to our website, which then automatically generates and posts short-form content snippets for Twitter, LinkedIn, Facebook, and more. Using AI-driven natural language processing and summarization, CBS empowers content creators to expand their reach with minimal effort, ensuring greater audience engagement across social platforms.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
