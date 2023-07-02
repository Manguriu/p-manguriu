import Script from "next/script";
import "./globals.css";
import { Footer, Navbar } from "@/components/ExportFile";

export const metadata = {
  title: "Manguriu Portfolio",
  description: "Created by the owner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <div>{children}</div>

        <Footer />
        <Script>
          {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64a1835f94cf5d49dc610f69/1h4beibho';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})()`}
        </Script>
      </body>
    </html>
  );
}
