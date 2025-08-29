import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Award, ExternalLink, Calendar } from "lucide-react";
import { useState } from "react";

interface CertificatesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CertificatesModal = ({ open, onOpenChange }: CertificatesModalProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add your certificates here - replace with actual certificate data
  const certificates = [
    {
      id: 1,
      title: "Java Programming Fundamentals",
      provider: "Udemy",
      date: "2023",
      description: "Comprehensive Java programming course covering OOP concepts, data structures, and best practices.",
      skills: ["Java", "OOP", "Data Structures"],
      imageUrl: "/certificates/java-cert.jpg", // Add your certificate images to public/certificates/
      verificationUrl: "https://www.udemy.com/certificate/example1"
    },
    {
      id: 2,
      title: "HTML & CSS Complete Course",
      provider: "YouTube / freeCodeCamp",
      date: "2023",
      description: "Complete web development fundamentals covering HTML5, CSS3, and responsive design principles.",
      skills: ["HTML5", "CSS3", "Responsive Design"],
      imageUrl: "/certificates/html-css-cert.jpg",
      verificationUrl: "https://example.com/cert2"
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      provider: "Udemy",
      date: "2024",
      description: "In-depth study of data structures and algorithms with practical implementation in multiple languages.",
      skills: ["DSA", "Problem Solving", "Algorithms"],
      imageUrl: "/certificates/dsa-cert.jpg",
      verificationUrl: "https://example.com/cert3"
    },
    {
      id: 4,
      title: "Workshop on Modern Web Development",
      provider: "College Technical Fest",
      date: "2024",
      description: "Attended workshop on modern web development trends and technologies.",
      skills: ["Web Development", "Modern Frameworks"],
      imageUrl: "/certificates/workshop-cert.jpg",
      verificationUrl: "https://example.com/cert4"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const currentCert = certificates[currentSlide];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden bg-gradient-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
            Certificates & Achievements
          </DialogTitle>
          <DialogDescription>
            My learning journey through courses and workshops
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative mt-6">
          {/* Certificate Display */}
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Certificate Image */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    {/* Placeholder for certificate image */}
                    <div className="text-center p-4">
                      <Award className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Certificate image will be displayed here
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Add image to: {currentCert.imageUrl}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{currentCert.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{currentCert.date}</span>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      {currentCert.provider}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentCert.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-ghost"
                    onClick={() => window.open(currentCert.verificationUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={certificates.length <= 1}
              className="btn-ghost"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {currentSlide + 1} of {certificates.length}
              </span>
              <div className="flex gap-1 ml-2">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide 
                        ? 'bg-primary' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={certificates.length <= 1}
              className="btn-ghost"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="mt-4 p-3 bg-muted/20 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            💡 Tip: Add your certificate images to the public/certificates/ folder and update the imageUrl paths
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};