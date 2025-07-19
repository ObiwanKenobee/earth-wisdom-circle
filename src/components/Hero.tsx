import { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import planetaryMandala from '@/assets/planetary-mandala.jpg';

const quotes = [
  {
    text: "We are not going to be able to operate our Spaceship Earth successfully nor for much longer unless we see it as a whole spaceship and our fate as common.",
    author: "Buckminster Fuller",
    role: "Visionary Architect"
  },
  {
    text: "The Earth does not belong to us; we belong to the Earth. All things are connected like the blood that unites one family.",
    author: "Chief Seattle",
    role: "Indigenous Elder"
  },
  {
    text: "Another world is not only possible, she is on her way. On a quiet day, I can hear her breathing.",
    author: "Arundhati Roy",
    role: "Voice of Justice"
  }
];

export const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* SEO Hidden Content for Better Indexing */}
      <div className="sr-only">
        <h1>Regenerative Planetary Forum - Sacred Civic Diplomacy for Earth Healing</h1>
        <p>
          Join 144 indigenous delegates, youth climate leaders, and earth guardians in healing our planet 
          through regenerative governance, sacred civic diplomacy, and indigenous wisdom. Our planetary 
          council bridges ancient earth knowledge with cutting-edge AI for collective intelligence and 
          bioregional democracy. Experience the convergence of indigenous technology, sacred activism, 
          and regenerative solutions for climate justice and earth stewardship.
        </p>
        <p>
          Keywords: indigenous wisdom, regenerative governance, sacred civic diplomacy, planetary AI, 
          earth healing, climate solutions, indigenous technology, bioregional democracy, sacred activism, 
          earth stewardship, regenerative economics, indigenous rights, climate justice, earth wisdom, 
          sacred sites, planetary health, collective intelligence, indigenous elders, youth climate leadership, 
          regenerative culture, indigenous knowledge systems, earth regeneration, planetary healing, 
          sacred diplomacy, ecological restoration, indigenous voices, climate action, sustainable future, 
          earth alliance, regenerative movement, indigenous leadership, planetary consciousness, earth medicine, 
          sacred technology, regenerative democracy, indigenous sovereignty, earth justice, planetary wisdom, 
          sacred council, indigenous knowledge, earth healing ceremonies, regenerative solutions
        </p>
      </div>
      {/* Sacred Background */}
      <div className="absolute inset-0 bg-gradient-mandala opacity-30" />
      
      {/* Planetary Mandala */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 lg:w-[600px] lg:h-[600px] opacity-20">
          <img 
            src={planetaryMandala} 
            alt="Sacred Planetary Mandala" 
            className="w-full h-full object-cover rounded-full mandala-spin"
          />
        </div>
      </div>

      {/* Cosmic Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-sacred-gold rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Sacred Announcement */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-primary/20 mb-8">
          <Sparkles className="h-4 w-4 text-sacred-gold" />
          <span className="text-sm font-medium text-muted-foreground">
            RPF 01 • Sacred Sites Council • December 2024
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-sacred-gold">A New Covenant</span>
          <span className="block text-stellar-blue">With</span>
          <span className="block bg-gradient-earth bg-clip-text text-transparent pulse-sacred">
            Earth
          </span>
        </h1>

        {/* Sacred Subtitle */}
        <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Sacred Civic Diplomacy through Indigenous Wisdom, Regenerative Governance, 
          and Planetary AI for the healing of our world.
        </p>

        {/* Quote Carousel */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="sacred-card text-center min-h-[120px] flex flex-col justify-center">
            <blockquote className="text-lg italic text-foreground mb-4 transition-all duration-500">
              "{quotes[currentQuote].text}"
            </blockquote>
            <cite className="text-sacred-gold font-medium">
              — {quotes[currentQuote].author}
              <span className="text-muted-foreground ml-2">
                {quotes[currentQuote].role}
              </span>
            </cite>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button className="hero-button text-lg px-8 py-4">
            <span>Join the Covenant</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:border-primary">
            <Play className="mr-2 h-5 w-5" />
            <span>View Earth Scorecard</span>
          </Button>
        </div>

        {/* Sacred Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-regenerative-green mb-2">144</div>
            <div className="text-muted-foreground">Planetary Delegates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-stellar-blue mb-2">7</div>
            <div className="text-muted-foreground">Sacred Bioregions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ancestral-copper mb-2">∞</div>
            <div className="text-muted-foreground">Regenerative Potential</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};