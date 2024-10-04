import Footer from "../../components/Footer/page";
import Nav from "../../components/Nav/page";
import "./globals.css";

export const metadata = {
  title: "The Sims 5",
  description: "A landing page about not created yet sims 5 game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
