
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Copy, Eye, Sparkles, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<PortfolioData>({
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

  const [generatedUrl, setGeneratedUrl] = useState('');

  const handleInputChange = (field: keyof PortfolioData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generatePortfolio = () => {
    const params = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim()) {
        params.append(key, value.trim());
      }
    });

    const url = `${window.location.origin}/view?${params.toString()}`;
    setGeneratedUrl(url);
    
    toast({
      title: "Portfolio Generated! ✨",
      description: "Your neon portfolio is ready to shine!",
    });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedUrl);
      toast({
        title: "Link Copied! 📋",
        description: "Share your portfolio with the world!",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the link manually",
        variant: "destructive"
      });
    }
  };

  const previewPortfolio = () => {
    if (generatedUrl) {
      window.open(generatedUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark cyber-grid relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-6">
            <span className="neon-text-blue">LINK</span>
            <span className="neon-text-pink">FOLIO</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Create stunning <span className="neon-text-purple">animated portfolios</span> in seconds
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-neon-yellow" />
              <span>Instant Generation</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-neon-green" />
              <span>Neon Animations</span>
            </div>
            <div className="flex items-center gap-2">
              <Copy className="w-4 h-4 text-neon-blue" />
              <span>Shareable Links</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Generator Form */}
          <Card className="glass-morphism neon-border animate-slide-in-right">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl neon-text-blue flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                Portfolio Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-neon-blue font-medium">Full Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Alex Chen"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-cyber-gray/50 border-cyan-500/30 focus:border-neon-blue text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="about" className="text-neon-pink font-medium">About Me</Label>
                <Textarea
                  id="about"
                  placeholder="Brief description about yourself and what you do..."
                  value={formData.about}
                  onChange={(e) => handleInputChange('about', e.target.value)}
                  className="bg-cyber-gray/50 border-pink-500/30 focus:border-neon-pink text-white placeholder:text-gray-400 min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-neon-purple font-medium">Experience & Work</Label>
                <Textarea
                  id="experience"
                  placeholder="Your work experience, projects, achievements..."
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="bg-cyber-gray/50 border-purple-500/30 focus:border-neon-purple text-white placeholder:text-gray-400 min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills" className="text-neon-green font-medium">Skills & Tools</Label>
                <Input
                  id="skills"
                  placeholder="React, Node.js, Python, Figma, etc."
                  value={formData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  className="bg-cyber-gray/50 border-green-500/30 focus:border-neon-green text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="services" className="text-neon-yellow font-medium">Services & Pricing</Label>
                <Textarea
                  id="services"
                  placeholder="What you offer and your rates..."
                  value={formData.services}
                  onChange={(e) => handleInputChange('services', e.target.value)}
                  className="bg-cyber-gray/50 border-yellow-500/30 focus:border-neon-yellow text-white placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-neon-blue font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-cyber-gray/50 border-cyan-500/30 focus:border-neon-blue text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-neon-pink font-medium">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="+1234567890"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-cyber-gray/50 border-pink-500/30 focus:border-neon-pink text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="github" className="text-neon-purple font-medium">GitHub</Label>
                  <Input
                    id="github"
                    placeholder="github.com/username"
                    value={formData.github}
                    onChange={(e) => handleInputChange('github', e.target.value)}
                    className="bg-cyber-gray/50 border-purple-500/30 focus:border-neon-purple text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-neon-green font-medium">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    placeholder="linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange('linkedin', e.target.value)}
                    className="bg-cyber-gray/50 border-green-500/30 focus:border-neon-green text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <Button
                onClick={generatePortfolio}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-pink hover:from-neon-pink hover:to-neon-purple text-black font-bold py-3 transition-all duration-300 shadow-lg hover:shadow-neon-blue/50"
                disabled={!formData.name.trim()}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Generate My Portfolio
              </Button>
            </CardContent>
          </Card>

          {/* Generated URL Display */}
          <Card className="glass-morphism neon-border animate-slide-in-right delay-300">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl neon-text-pink flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Your Portfolio Link
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {generatedUrl ? (
                <>
                  <div className="p-4 bg-cyber-gray/30 rounded-lg border border-neon-blue/30">
                    <p className="text-sm text-gray-400 mb-2">Generated URL:</p>
                    <p className="text-neon-blue break-all font-mono text-sm">{generatedUrl}</p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      className="flex-1 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Link
                    </Button>
                    <Button
                      onClick={previewPortfolio}
                      className="flex-1 bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-blue text-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-6 border-4 border-neon-blue/30 rounded-full flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-neon-blue/50" />
                  </div>
                  <p className="text-gray-400 text-lg">Fill out the form and generate your portfolio to see the magic happen!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="font-orbitron text-3xl font-bold mb-8 neon-text-purple">Why Choose Linkfolio?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-morphism p-6 rounded-lg neon-border hover:border-neon-blue/80 transition-all duration-300">
              <Zap className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h3 className="font-orbitron text-lg font-bold mb-2 text-neon-blue">Lightning Fast</h3>
              <p className="text-gray-400">Generate professional portfolios in seconds, not hours</p>
            </div>
            <div className="glass-morphism p-6 rounded-lg neon-border hover:border-neon-pink/80 transition-all duration-300">
              <Sparkles className="w-12 h-12 text-neon-pink mx-auto mb-4" />
              <h3 className="font-orbitron text-lg font-bold mb-2 text-neon-pink">Stunning Animations</h3>
              <p className="text-gray-400">Cyberpunk-inspired effects that make you stand out</p>
            </div>
            <div className="glass-morphism p-6 rounded-lg neon-border hover:border-neon-green/80 transition-all duration-300">
              <Copy className="w-12 h-12 text-neon-green mx-auto mb-4" />
              <h3 className="font-orbitron text-lg font-bold mb-2 text-neon-green">Easy Sharing</h3>
              <p className="text-gray-400">One link to rule them all - share anywhere instantly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
