import { BookOpen, Users, BarChart3, Calendar, Vote, Lightbulb, GraduationCap, Globe } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'The Living Codex',
    description: 'Sacred principles of regenerative governance, written in collaboration with indigenous elders and planetary wisdom keepers.',
    gradient: 'bg-gradient-earth'
  },
  {
    icon: Users,
    title: 'Circle of 144',
    description: 'Planetary delegates representing bioregions, indigenous nations, youth voices, and tech elders in sacred council.',
    gradient: 'bg-gradient-cosmic'
  },
  {
    icon: BarChart3,
    title: 'Earth Scorecard',
    description: 'Real-time planetary health metrics guided by AI wisdom and indigenous earth knowledge systems.',
    gradient: 'bg-gradient-sacred'
  },
  {
    icon: Vote,
    title: 'Planetary DAO',
    description: 'Decentralized governance protocols for regenerative proposals, powered by collective wisdom and blockchain democracy.',
    gradient: 'bg-gradient-earth'
  },
  {
    icon: Lightbulb,
    title: 'Regenerative Labs',
    description: 'Innovation ecosystem for biomimicry, clean technology, and regenerative solutions inspired by nature.',
    gradient: 'bg-gradient-cosmic'
  },
  {
    icon: GraduationCap,
    title: 'Sacred Academy',
    description: 'Learning pathways combining ancient wisdom traditions with cutting-edge regenerative technologies.',
    gradient: 'bg-gradient-sacred'
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-primary/20 mb-6">
            <Globe className="h-4 w-4 text-sacred-gold" />
            <span className="text-sm font-medium text-muted-foreground">
              Sacred Technologies for Planetary Healing
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">The Architecture of </span>
            <span className="bg-gradient-sacred bg-clip-text text-transparent">
              Regeneration
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging ancient wisdom with regenerative technology to create 
            governance systems that honor both Earth and human dignity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="sacred-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-lg ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Sacred Accent */}
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Sacred Call to Action */}
        <div className="text-center mt-16">
          <div className="sacred-card inline-block p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join the Regenerative Renaissance?
            </h3>
            <p className="text-muted-foreground mb-6">
              Become part of the planetary council working to heal our world through 
              sacred civic diplomacy and indigenous wisdom.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="hero-button">
                <span>Explore the Covenant</span>
              </button>
              <button className="px-6 py-3 border border-primary/30 rounded-full text-foreground hover:border-primary transition-colors">
                View Sacred Council
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};