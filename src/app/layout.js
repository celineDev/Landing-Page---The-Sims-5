import Footer from "../../components/Footer/page"
import Nav from "../../components/Nav/page"
import "./globals.css"

export const metadata = {
  title: "Sims",
  description: "Immerse yourself in a virtual world where you can build, control, and live the life of your Sims",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
