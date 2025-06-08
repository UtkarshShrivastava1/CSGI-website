import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Testimonials from './components/Testimonial'
import HeroSection from './components/Hero'
import NewsTicker from './components/NewsTicker'
import PlacementStats from './components/PlacementStats'
import CompaniesVisited from './components/CompaniesVisited'
import VideoGallery from './components/VideoGallery'
import MediaCoverage from './components/MediaCoverage'
import GallerySection from './components/GallerySection'
import Infrastructure from './components/InfrastructureSection'
import Aboutas from './components/AboutSection'
import OurInstitute from './components/OurInstitute'


const App = () => {
  return (
    <>
    <Header />
    {/* <Navbar /> */}
    <HeroSection />
    <NewsTicker />
    <OurInstitute />
    <Aboutas />
    <Infrastructure />
    <GallerySection />
    <MediaCoverage />
    <VideoGallery />
    <CompaniesVisited />
    <PlacementStats />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App