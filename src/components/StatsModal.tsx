import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Calendar, Target, TrendingUp } from "lucide-react";

interface StatsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const StatsModal = ({ open, onOpenChange }: StatsModalProps) => {
  // Replace these with your actual usernames
  const LEETCODE_USERNAME = "SanAsh_2589";
  const HACKERRANK_USERNAME = "ash98906";

  // Mock data - replace with actual API calls
  const leetcodeStats = {
    totalSolved: 45,
    easy: 28,
    medium: 15,
    hard: 2,
    ranking: 125430,
    acceptanceRate: 68.5
  };

  const hackerrankStats = {
    totalPoints: 850,
    languages: ["Java", "C", "Python"],
    badges: 8,
    rank: "Silver"
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
            Coding Progress & Statistics
          </DialogTitle>
          <DialogDescription>
            Track my journey across coding platforms
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* LeetCode Stats */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-primary-foreground" />
                </div>
                LeetCode Progress
              </CardTitle>
              <CardDescription>Username: {LEETCODE_USERNAME}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {leetcodeStats.totalSolved}
                </div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Easy</span>
                  <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                    {leetcodeStats.easy}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Medium</span>
                  <Badge variant="secondary" className="bg-warning/20 text-warning border-warning/30">
                    {leetcodeStats.medium}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Hard</span>
                  <Badge variant="secondary" className="bg-destructive/20 text-destructive border-destructive/30">
                    {leetcodeStats.hard}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Acceptance Rate</span>
                  <span className="text-sm text-muted-foreground">{leetcodeStats.acceptanceRate}%</span>
                </div>
                <Progress value={leetcodeStats.acceptanceRate} className="h-2" />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-sm">Global Ranking</span>
                <span className="text-sm font-medium">#{leetcodeStats.ranking.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          {/* HackerRank Stats */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-secondary-foreground" />
                </div>
                HackerRank Progress
              </CardTitle>
              <CardDescription>Username: {HACKERRANK_USERNAME}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                  {hackerrankStats.totalPoints}
                </div>
                <div className="text-sm text-muted-foreground">Total Points</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Rank</span>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {hackerrankStats.rank}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Badges Earned</span>
                  <span className="text-sm font-medium">{hackerrankStats.badges}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-sm">Languages Mastered</span>
                <div className="flex flex-wrap gap-2">
                  {hackerrankStats.languages.map((lang) => (
                    <Badge key={lang} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-sm text-success">Actively Learning</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 p-4 bg-muted/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Recent Activity</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Data is updated regularly. Connect with me to see my latest achievements and coding journey!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};