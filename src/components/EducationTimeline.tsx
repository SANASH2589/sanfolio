import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, School, BookOpen, Monitor } from "lucide-react";

export const EducationTimeline = () => {
  const timelineData = [
    {
      id: 1,
      title: "SSLC",
      institution: "RSK International School",
      location: "Venkatachalapuram, Thuraiyur",
      level: "8th-10th",
      duration: "(2018 - 2021)",
      icon: School,
      side: "left"
    },
    {
      id: 2,
      title: "Diploma",
      institution: "Dhanalakshmi Srinivasan Polytechnic College",
      location: "Perambalur",
      level: "DME (Diploma in Mechanical Engineering)",
      duration: "(2021 - 2024)",
      icon: GraduationCap,
      side: "right"
    },
    {
      id: 3,
      title: "Engineering",
      institution: "K Ramakrishnan College of Technology",
      location: "Samayapuram, Trichy",
      level: "B.Tech (Information Technology)",
      duration: "(2024 - Present)",
      icon: BookOpen,
      side: "left",
      current: true
    },
    {
      id: 4,
      title: "Online Courses",
      institution: "Udemy, YouTube & Other Platforms",
      location: "Self-Paced Learning",
      level: "Learning whenever I can learn",
      duration: "(DSA, C Language, HTML-CSS)",
      icon: Monitor,
      side: "right"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Education Journey
          </h2>
          <div className="w-32 h-1 bg-gradient-primary rounded-full shadow-glow mx-auto mt-4"></div>
          <p className="text-lg text-muted-foreground mt-4">
            My academic and learning path towards technology excellence
          </p>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-primary opacity-30" />
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              
              return (
                <div key={item.id} className={`relative flex items-center ${
                  item.side === 'left' ? 'justify-start' : 'justify-end'
                }`}>
                  {/* Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 ${
                    item.current 
                      ? 'bg-primary border-primary shadow-glow animate-pulse-glow' 
                      : 'bg-background border-primary'
                  }`} />
                  
                  {/* Content Card */}
                  <Card className={`w-5/12 ${
                    item.side === 'left' ? 'mr-6' : 'ml-6'
                  } bg-gradient-card border-border card-hover ${
                    item.current ? 'ring-2 ring-primary/20' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          item.current 
                            ? 'bg-primary text-primary-foreground shadow-glow' 
                            : 'bg-muted/30'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            {item.current && (
                              <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                          
                          <h4 className="font-medium text-primary mb-1">
                            {item.institution}
                          </h4>
                          
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.location}
                          </p>
                          
                          <p className="text-sm font-medium mb-2">
                            {item.level}
                          </p>
                          
                          <Badge variant="secondary" className="text-xs">
                            {item.duration}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Connecting Line */}
                  <div className={`absolute top-1/2 w-6 h-0.5 bg-gradient-primary opacity-50 ${
                    item.side === 'left' 
                      ? 'left-1/2 ml-2' 
                      : 'right-1/2 mr-2'
                  }`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-border text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Years of Learning</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Educational Institutions</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Continuous Learning</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};