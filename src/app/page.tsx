import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import { Analytics } from './components/analytics';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <Analytics />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
