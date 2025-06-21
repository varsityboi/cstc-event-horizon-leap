
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendarDays, Clock, MapPin, Users, Star, Award, Zap, Code, Database, Brain, Rocket, ArrowRight, Globe, Shield, Sparkles, ChevronDown } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    experience: '',
    interests: ''
  });

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'speakers', 'agenda', 'register'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    // Handle form submission logic here
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating animation particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  // Animated background grid
  const AnimatedGrid = () => (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'slide 20s linear infinite'
      }} />
    </div>
  );

  const speakers = [
    {
      name: "Dr. Aisha Rahman",
      title: "AI Research Director",
      company: "Tech Innovations Lab",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c2cd",
      bio: "Leading expert in machine learning and neural networks with 15+ years of experience.",
      expertise: ["AI/ML", "Deep Learning", "Computer Vision"]
    },
    {
      name: "Prof. Raj Patel",
      title: "Cybersecurity Specialist",
      company: "Digital Security Institute",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Renowned cybersecurity expert and author of multiple research papers on digital security.",
      expertise: ["Cybersecurity", "Blockchain", "Ethical Hacking"]
    },
    {
      name: "Ms. Priya Singh",
      title: "Full Stack Developer",
      company: "Innovation Hub",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Full-stack developer and tech entrepreneur with expertise in modern web technologies.",
      expertise: ["React", "Node.js", "Cloud Computing"]
    }
  ];

  const agenda = [
    {
      time: "09:00 - 09:30",
      title: "Registration & Welcome Coffee",
      description: "Network with fellow tech enthusiasts",
      icon: Users
    },
    {
      time: "09:30 - 10:30",
      title: "Keynote: The Future of AI in South Asia",
      description: "Dr. Aisha Rahman",
      icon: Brain
    },
    {
      time: "10:45 - 11:45",
      title: "Cybersecurity in the Digital Age",
      description: "Prof. Raj Patel",
      icon: Shield
    },
    {
      time: "12:00 - 13:00",
      title: "Modern Web Development Trends",
      description: "Ms. Priya Singh",
      icon: Code
    },
    {
      time: "13:00 - 14:00",
      title: "Networking Lunch",
      description: "Connect with industry professionals",
      icon: Users
    },
    {
      time: "14:00 - 15:30",
      title: "Hands-on Workshop: Building AI Applications",
      description: "Interactive coding session",
      icon: Rocket
    },
    {
      time: "15:45 - 16:30",
      title: "Panel Discussion: Tech Career Paths",
      description: "Q&A with all speakers",
      icon: Award
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Explore cutting-edge AI technologies and their applications"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Learn about digital security and protection strategies"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Master modern frameworks and development practices"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Harness the power of big data and analytics"
    },
    {
      icon: Globe,
      title: "Cloud Computing",
      description: "Understand scalable cloud architecture and deployment"
    },
    {
      icon: Rocket,
      title: "Innovation Labs",
      description: "Hands-on experience with emerging technologies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <style jsx>{`
        @keyframes slide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50px, -50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold gradient-text">CSTC Tech Summit</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Speakers', 'Agenda', 'Register'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <AnimatedGrid />
        <FloatingParticles />
        
        <div className={`text-center max-w-4xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400 animate-pulse">
              <Sparkles className="w-4 h-4 mr-2" />
              South Asian University • CSTC Department
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-float">
            Tech Summit
            <span className="block text-4xl md:text-6xl mt-4">2024</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Join the most innovative tech event in South Asia. Explore AI, Cybersecurity, 
            and cutting-edge technologies with industry leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center text-lg text-blue-400">
              <CalendarDays className="w-5 h-5 mr-2" />
              December 15, 2024
            </div>
            <div className="flex items-center text-lg text-blue-400">
              <Clock className="w-5 h-5 mr-2" />
              9:00 AM - 5:00 PM
            </div>
            <div className="flex items-center text-lg text-blue-400">
              <MapPin className="w-5 h-5 mr-2" />
              SAU Auditorium
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('register')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg animate-glow"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Attend Tech Summit 2024?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immerse yourself in the future of technology with hands-on workshops, 
              expert insights, and networking opportunities that will shape your career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border-0 card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Meet Our Speakers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from industry pioneers and thought leaders who are shaping the future of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="glass-effect border-0 card-hover">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-400">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-white">{speaker.name}</CardTitle>
                  <CardDescription className="text-blue-400 font-semibold">
                    {speaker.title}
                  </CardDescription>
                  <p className="text-sm text-gray-400">{speaker.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{speaker.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-blue-600/20 text-blue-400">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Event Agenda
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A full day packed with insights, workshops, and networking opportunities.
            </p>
          </div>
          
          <div className="space-y-6">
            {agenda.map((item, index) => (
              <Card key={index} className="glass-effect border-0 card-hover">
                <CardContent className="flex items-center p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                      <Badge variant="outline" className="text-blue-400 border-blue-400 mt-2 sm:mt-0">
                        {item.time}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Secure Your Spot
            </h2>
            <p className="text-xl text-gray-300">
              Limited seats available. Register now to be part of this transformative experience.
            </p>
          </div>
          
          <Card className="glass-effect border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">Event Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="university" className="text-white">University/Organization</Label>
                  <Input
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Enter your university or organization"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="experience" className="text-white">Experience Level</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="e.g., Beginner, Intermediate, Advanced"
                  />
                </div>
                
                <div>
                  <Label htmlFor="interests" className="text-white">Areas of Interest</Label>
                  <Textarea
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Tell us about your tech interests and what you hope to learn"
                    rows={4}
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg animate-glow"
                >
                  Register for Tech Summit 2024
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold gradient-text">CSTC Tech Summit 2024</span>
            </div>
            <p className="text-gray-400 mb-6">
              Organized by Computer Science & Technology Department, South Asian University
            </p>
            <div className="flex justify-center space-x-8 text-gray-400">
              <span>📧 cstc@sau.edu</span>
              <span>📞 +91 XX XXXX XXXX</span>
              <span>🌐 www.sau.edu</span>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-500">
                © 2024 South Asian University. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
