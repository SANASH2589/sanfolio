import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TypingAnimation } from "@/components/TypingAnimation";
import { ProgressBar } from "@/components/ProgressBar";
import { ProjectCard } from "@/components/ProjectCard";
import { PieChart } from "@/components/PieChart";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { StatsModal } from "@/components/StatsModal";
import { CertificatesModal } from "@/components/CertificatesModal";
import { MessageModal } from "@/components/MessageModal";
import { EducationTimeline } from "@/components/EducationTimeline";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink,
  MessageCircle,
  Lightbulb,
  Users,
  Zap,
  Languages,
  Download
} from "lucide-react";
import { useState } from "react";
import profileImage from "@/assets/profile-image.jpg";

const Index = () => {
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [isCertificatesModalOpen, setIsCertificatesModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  
  const typingTexts = [
    "Tech Enthusiast",
    "Full-Stack Development",
    "Data Analytics",
    "Driving Innovation through Smart Solutions"
  ];

  const learningData = [
    { name: "Web Development", value: 40, color: "hsl(200 100% 50%)" },
    { name: "Full-Stack", value: 10, color: "hsla(67, 93%, 42%, 1.00)" },
    { name: "DSA/Problem Solving", value: 15, color: "hsl(300 100% 70%)" },
    { name: "Data Analytics", value: 25, color: "hsl(240 100% 65%)" },
    { name: "Others", value: 10, color: "hsl(142 71% 45%)" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary opacity-20 rounded-full animate-float" />
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-secondary opacity-20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-glow opacity-30 rounded-full animate-pulse-glow" />
          <div className="absolute top-80 right-30 w-24 h-24 bg-gradient-primary opacity-40 rounded-full animate-float" />
        </div>
        
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-gradient">
            Sanjai S
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
            <TypingAnimation texts={typingTexts} className="font-medium" />
          </div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Be resilient • Be consistent • Be collaborative
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary rounded-full shadow-glow mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I am a B.Tech Information Technology undergraduate with a strong passion for exploring and 
                innovating with emerging technologies. I continuously strive to learn, adapt, and apply new 
                concepts, combining creativity and imagination to bring ideas to life through technology.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2">Innovation</Badge>
                <Badge variant="secondary" className="px-4 py-2">Problem Solving</Badge>
                <Badge variant="secondary" className="px-4 py-2">Technology</Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative group">
                <img 
                  src={profileImage} 
                  alt="Sanjai S Profile" 
                  className="w-64 h-64 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-glow group-hover:shadow-glow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline Section */}
      <EducationTimeline />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-primary rounded-full shadow-glow mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Construction Material Selling Platform"
              description="A basic AWT-based project that allows sellers to add products with details and lets customers purchase them via separate portals after login (admin & customer)."
              techStack="Java, AWT, Visual Studio Code"
              githubLink="https://github.com/SANASH2589"
              liveLink="https://github.com/SANASH2589"
            />
            <ProjectCard
              title="Online Retail Management System"
              description="A web-based system that streamlines retail operations by enabling product browsing, order placement, purchase tracking, and secure payments for customers, while allowing administrators to manage inventory, monitor orders, and oversee transactions efficiently."
              techStack="HTML, CSS, PHP, XAMPP"
              githubLink="https://github.com/SANASH2589"
              liveLink="https://github.com/SANASH2589"
            />
          </div>
          <div className="text-center mt-8">
            <Button 
              onClick={() => window.open('https://github.com/SANASH2589?tab=repositories', '_blank')}
              className="btn-hero px-6 py-3 rounded-full"
            >
              <Github className="w-5 h-5 mr-2" />
              More Projects on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-36 h-1 bg-gradient-primary rounded-full shadow-glow mx-auto mt-4"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Technical Skills</CardTitle>
                <CardDescription>Programming languages and frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressBar skill="Java" percentage={70} delay={200} />
                <ProgressBar skill="HTML + CSS" percentage={70} delay={400} />
                <ProgressBar skill="C" percentage={50} delay={600} />
                <ProgressBar skill="Python" percentage={40} delay={800} />
                <ProgressBar skill="DSA (Learning)" percentage={30} delay={1000} />
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Soft Skills</CardTitle>
                <CardDescription>Communication and personal abilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Languages className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Languages</h4>
                    <p className="text-sm text-muted-foreground">English (W/R/S/U), Tamil (W/R/S/U), Malayalam (U)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Creative Thinking</h4>
                    <p className="text-sm text-muted-foreground">Problem-solving with innovative approaches</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Collaboration</h4>
                    <p className="text-sm text-muted-foreground">Effective teamwork and communication</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Adaptability</h4>
                    <p className="text-sm text-muted-foreground">Quick learning and adaptation to new technologies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning & Growth Section */}
      <section id="learning" className="py-20 px-6 bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Learning & Growth
            </h2>
            <div className="w-40 h-1 bg-gradient-primary rounded-full shadow-glow mx-auto mt-4"></div>
          </div>
          <div className="flex flex-col gap-12">
            {/* Learning Focus Pie Chart */}
            <Card className="bg-gradient-card border-border w-full max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Current Learning Focus</CardTitle>
                <CardDescription>Areas of active skill development</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <PieChart data={learningData} size={300} />
              </CardContent>
            </Card>

            {/* Growth Metrics */}
            <Card className="bg-gradient-card border-border w-full max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Growth Metrics</CardTitle>
                <CardDescription>Development progress and achievements</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">GitHub Contributions</h4>
                  <p className="text-sm text-muted-foreground">GitHub contribution graph to be integrated</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2 btn-ghost"
                    onClick={() => window.open('https://github.com/SANASH2589', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Coding Platforms</h4>
                  <p className="text-sm text-muted-foreground">LeetCode/HackerRank stats coming soon</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2 btn-ghost"
                    onClick={() => setIsStatsModalOpen(true)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Stats
                  </Button>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Certifications</h4>
                  <p className="text-sm text-muted-foreground">Workshops and certifications to be added</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2 btn-ghost"
                    onClick={() => setIsCertificatesModalOpen(true)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-28 h-1 bg-gradient-primary rounded-full shadow-glow mx-auto mt-4"></div>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Feel free to reach out for collaboration, opportunities, or just to say hello!
          </p>
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf'; // You'll need to add your resume PDF to the public folder
                link.download = 'Sanjai_S_Resume.pdf';
                link.click();
              }}
              className="btn-hero px-8 py-3 rounded-full"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            <Button 
              onClick={() => setIsMessageModalOpen(true)}
              variant="outline" 
              className="btn-ghost px-8 py-3 rounded-full"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="mailto:ash98906@gmail.com"
              className="group flex flex-col items-center p-6 bg-gradient-card border border-border rounded-xl card-hover"
            >
              <Mail className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email</span>
              <span className="text-sm text-muted-foreground">ash98906@gmail.com</span>
            </a>
            <a 
              href="https://github.com/SANASH2589"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-gradient-card border border-border rounded-xl card-hover"
            >
              <Github className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
              <span className="text-sm text-muted-foreground">SANASH2589</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/sanjai-s-b49a442b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-gradient-card border border-border rounded-xl card-hover"
            >
              <Linkedin className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn</span>
              <span className="text-sm text-muted-foreground">sanjai-s</span>
            </a>
            <a 
              href="tel:+917397139329"
              className="group flex flex-col items-center p-6 bg-gradient-card border border-border rounded-xl card-hover"
            >
              <Phone className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Phone</span>
              <span className="text-sm text-muted-foreground">+91 7397139329</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-muted/5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Sanjai S. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <StatsModal 
        open={isStatsModalOpen} 
        onOpenChange={setIsStatsModalOpen} 
      />
      <CertificatesModal 
        open={isCertificatesModalOpen} 
        onOpenChange={setIsCertificatesModalOpen} 
      />
      <MessageModal 
        open={isMessageModalOpen} 
        onOpenChange={setIsMessageModalOpen} 
      />
    </div>
  );
};

export default Index;
