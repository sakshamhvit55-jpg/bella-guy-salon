import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import GoogleMap from "../components/GoogleMap";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <Faq />
      <Contact />
      <GoogleMap />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}