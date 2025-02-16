import "./globals.css";
import {Header} from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextAgenda - O melhor para você",
  description: "Aplicação para organizar e gerenciar seus contatos.",
  openGraph: {
    title: "NextAgenda",
    description: "Aplicação para organizar e gerenciar seus contatos.",
    images: [
      {
        url: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flvcn43yn4iz7335qqc7i.png",
        width: 600,
        height: 312,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
     index: true,
     follow: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Header />
        
        {children}
      </body>
    </html>
  );
}
