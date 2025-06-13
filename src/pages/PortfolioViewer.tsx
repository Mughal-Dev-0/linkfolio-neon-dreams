
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  User, 
  Briefcase, 
  Code, 
  DollarSign,
  ArrowUp,
  Sparkles
} from 'lucide-react';

interface PortfolioData {
  name: string;
  about: string;
  experience: string;
  skills: string;
  services: string;
  contact: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

const PortfolioViewer = () => {
  const location = useLocation();
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    name: '',
    about: '',
    experience: '',
    skills: '',
    services: '',
    contact: '',
    email: '',
    phone: '',
    github: '',
    linkedin: ''
  });
  const [currentSection, setCurrentSection] = useState('hero');
  const [typedText, setTypedText] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(location.search);
    const data: PortfolioData = {
      name: params.get('name') || 'Anonymous Developer',
      about: params.get('about') || 'Passionate developer creating amazing digital experiences.',
      experience: params.get('experience') || 'Building innovative solutions with modern technologies.',
      skills: params.get('skills') || 'React, JavaScript, Python, Node.js',
      services: params.get('services') || 'Web Development, UI/UX Design, Consulting',
      contact: params.get('contact') || 'Let\'s build something amazing together!',
      email: params.get('email') || '',
      phone: params.get('phone') || '',
      github: params.get('github') || '',
      linkedin: params.get('linkedin') || ''
    };
    setPortfolioData(data);

    // Typing animation for name
    const name = data.name;
    let i = 0;
    const typeWriter = () => {
      if (i < name.length) {
        setTypedText(name.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    setTimeout(typeWriter, 1000);
  }, [location.search]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      // Update current section based on scroll position
      const sections = ['hero', 'about', 'experience', 'skills', 'services', 'contact'];
      const currentPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (currentPos >= offsetTop && currentPos < offsetBottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skillsList = portfolioData.skills.split(',').map(skill => skill.trim());

  return (
    <div className="min-h-screen bg-cyber-dark cyber-grid relative">
      {/* Background animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-neon-pink/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-neon-purple/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/80 backdrop-blur-sm border-b border-neon-blue/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-orbitron text-xl font-bold neon-text-blue">{portfolioData.name}</h1>
            <div className="hidden md:flex space-x-6">
              {['about', 'experience', 'skills', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 ${
                    currentSection === section 
                      ? 'text-neon-blue' 
                      : 'text-gray-400 hover:text-neon-pink'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10">
          <div className="mb-8">
            <p className="text-neon-pink text-xl mb-4 animate-fade-in-up">Hi, I'm</p>
            <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-6 neon-text-blue">
              {typedText}<span className="typing-cursor"></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-1000">
              {portfolioData.about}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-1500">
            {portfolioData.email && (
              <Button
                onClick={() => window.open(`mailto:${portfolioData.email}`, '_blank')}
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-bold"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            )}
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="border-neon-pink text-neon-pink hover:bg-neon-pink/10"
            >
              Learn More About Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism neon-border animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-8 h-8 text-neon-blue" />
                  <h2 className="font-orbitron text-3xl font-bold neon-text-blue">About Me</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {portfolioData.about}
                </p>
                {portfolioData.contact && (
                  <p className="text-gray-400 mt-6">
                    {portfolioData.contact}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism neon-border animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-8 h-8 text-neon-pink" />
                  <h2 className="font-orbitron text-3xl font-bold neon-text-pink">Experience</h2>
                </div>
                <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {portfolioData.experience}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism neon-border animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-8 h-8 text-neon-purple" />
                  <h2 className="font-orbitron text-3xl font-bold neon-text-purple">Skills & Tools</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillsList.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple/50 rounded-full text-white font-medium hover:from-neon-purple/30 hover:to-neon-blue/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism neon-border animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-neon-green" />
                  <h2 className="font-orbitron text-3xl font-bold neon-text-green">Services</h2>
                </div>
                <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {portfolioData.services}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism neon-border animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-8 h-8 text-neon-yellow" />
                  <h2 className="font-orbitron text-3xl font-bold neon-text-yellow">Get In Touch</h2>
                </div>
                <p className="text-gray-300 text-lg mb-8">
                  Ready to work together? Let's create something amazing!
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolioData.email && (
                    <Button
                      onClick={() => window.open(`mailto:${portfolioData.email}`, '_blank')}
                      className="flex items-center gap-3 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-bold py-4"
                    >
                      <Mail className="w-5 h-5" />
                      {portfolioData.email}
                    </Button>
                  )}
                  {portfolioData.phone && (
                    <Button
                      onClick={() => window.open(`tel:${portfolioData.phone}`, '_blank')}
                      className="flex items-center gap-3 bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-bold py-4"
                    >
                      <Phone className="w-5 h-5" />
                      {portfolioData.phone}
                    </Button>
                  )}
                  {portfolioData.github && (
                    <Button
                      onClick={() => window.open(`https://${portfolioData.github}`, '_blank')}
                      variant="outline"
                      className="flex items-center gap-3 border-neon-purple text-neon-purple hover:bg-neon-purple/10 py-4"
                    >
                      <Github className="w-5 h-5" />
                      GitHub Profile
                    </Button>
                  )}
                  {portfolioData.linkedin && (
                    <Button
                      onClick={() => window.open(`https://${portfolioData.linkedin}`, '_blank')}
                      variant="outline"
                      className="flex items-center gap-3 border-neon-blue text-neon-blue hover:bg-neon-blue/10 py-4"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn Profile
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative z-10 border-t border-neon-blue/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            Made with <span className="text-neon-pink">❤️</span> using{' '}
            <span className="neon-text-blue font-orbitron">Linkfolio</span>
          </p>
          <Button
            onClick={() => window.open('/', '_blank')}
            variant="outline"
            className="border-neon-green text-neon-green hover:bg-neon-green/10"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Create Your Own Portfolio
          </Button>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white p-3 rounded-full shadow-neon-blue/50"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default PortfolioViewer;
