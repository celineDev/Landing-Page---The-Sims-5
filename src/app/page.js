import About from "../../components/About/page";
import Articles from "../../components/Articles/page";
import Creations from "../../components/Creations/page";
import Creators from "../../components/Creators/page";
import Pricing from "../../components/Pricing/page";

export default function Home() {
  return (
    <main>
      <About />
      <Creations />
      <Creators />
      <Pricing />
      <Articles />
    </main>
  )
}
