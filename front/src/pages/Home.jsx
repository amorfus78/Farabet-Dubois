import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Search from '../components/home/Search'

const Home = () => {
  return (
    <div className="bg-gray-100 font-sans text-gray-900">
      <Hero />
      <Features />
      <Search />
    </div>
  )
}

export default Home
