import { useState } from 'react';
import { Menu, X, Globe, Users, BarChart3, Calendar, BookOpen, Vote, Lightbulb, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { name: 'The Covenant', href: '/covenant', icon: BookOpen },
  { name: 'Circle of 144', href: '/circle', icon: Users },
  { name: 'Earth Scorecard', href: '/scorecard', icon: BarChart3 },
  { name: 'Forum Events', href: '/events', icon: Calendar },
  { name: 'Planetary DAO', href: '/governance', icon: Vote },
  { name: 'Regenerative Labs', href: '/labs', icon: Lightbulb },
  { name: 'Academy', href: '/academy', icon: GraduationCap },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sacred-nav fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Sacred Logo */}
          <div className="flex items-center space-x-3">
            <Globe className="h-8 w-8 text-primary mandala-spin" />
            <div className="text-xl font-bold text-foreground">
              <span className="text-sacred-gold">Regenerative</span>{' '}
              <span className="text-stellar-blue">Planetary</span>{' '}
              <span className="text-regenerative-green">Forum</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <item.icon className="h-4 w-4 group-hover:text-sacred-gold transition-colors" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            <Button className="hero-button">
              <span>Join the Covenant</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            <Button className="hero-button w-full mt-4">
              <span>Join the Covenant</span>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};