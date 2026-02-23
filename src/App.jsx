import './App.css'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroText from './components/IntroText'
import Services from './components/Services'
import FeatureCarousel from './components/FeatureCarousel'
import CTA from './components/CTA'
import Editorial from './components/Editorial'
import Portfolio from './components/Portfolio'
import Newsletter from './components/Marquee'
import Footer from './components/Footer'

function App() {
  return (
    <SmoothScroll>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <IntroText />
          <Services />
          <FeatureCarousel />
          <CTA />
          <Editorial />
          <Portfolio />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
