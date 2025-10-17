import Navbar from "@/Navigation/Navbar";
import "./globals.css";
import Footer from "@/Navigation/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
       
      </body>
    </html>
  );
}
