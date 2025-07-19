import { Globe, Heart, TreePine } from 'lucide-react';

const footerSections = [
  {
    title: 'Sacred Pathways',
    links: [
      { name: 'The Covenant', href: '/covenant' },
      { name: 'Circle of 144', href: '/circle' },
      { name: 'Earth Scorecard', href: '/scorecard' },
      { name: 'Forum Events', href: '/events' }
    ]
  },
  {
    title: 'Regenerative Tech',
    links: [
      { name: 'Planetary DAO', href: '/governance' },
      { name: 'Regenerative Labs', href: '/labs' },
      { name: 'Sacred Academy', href: '/academy' },
      { name: 'AI Wisdom Cloud', href: '/wisdom' }
    ]
  },
  {
    title: 'Community',
    links: [
      { name: 'Indigenous Voices', href: '/indigenous' },
      { name: 'Youth Council', href: '/youth' },
      { name: 'Tech Elders', href: '/elders' },
      { name: 'Bioregional Networks', href: '/bioregions' }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Sacred Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="h-8 w-8 text-primary mandala-spin" />
              <div className="text-xl font-bold">
                <span className="text-sacred-gold">RPF</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sacred civic diplomacy for planetary healing through indigenous wisdom, 
              regenerative governance, and collective intelligence.
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <TreePine className="h-4 w-4 text-regenerative-green" />
              <span>Carbon Negative Platform</span>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sacred Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © 2024 Regenerative Planetary Forum. Built with sacred intention.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Data Sovereignty
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Sacred Terms
            </a>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>Made for Earth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};