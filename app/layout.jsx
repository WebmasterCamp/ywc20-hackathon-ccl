import { Prompt } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./components/CartContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Artco",
  description: "Artco is a platform for artists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${prompt.variable} antialiased`}
      >
        <CartProvider>
          <Navbar/>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
