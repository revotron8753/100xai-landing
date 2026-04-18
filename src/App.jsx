import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Graduates from './components/Graduates'
import FeaturedIn from './components/FeaturedIn'
import ToolsGrid from './components/ToolsGrid'
import Curriculum from './components/Curriculum'
import Bonuses from './components/Bonuses'
import Instructors from './components/Instructors'
import Previews from './components/Previews'
import WhyUs from './components/WhyUs'
import WorkshopCTA from './components/WorkshopCTA'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Graduates />
      <FeaturedIn />
      <ToolsGrid />
      <Curriculum />
      <Bonuses />
      <Instructors />
      <Previews />
      <WhyUs />
      <WorkshopCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
