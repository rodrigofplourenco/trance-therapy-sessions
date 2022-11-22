import Hero from "../components/Hero"
import NextEvents from "../components/NextEvents"
import PastEvents from "../components/PastEvents"

const Home = () => {
  return (
    <main>
      <Hero />

      <NextEvents />
      <PastEvents />
    </main>
  )
}

export default Home