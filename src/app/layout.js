import Navbar from "@/Components/Navigation/Navbar";
import "./globals.css";
import Footer from "@/Components/Navigation/Footer";


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
