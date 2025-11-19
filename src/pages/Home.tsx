import { GraduationCap, Target, Eye, Award, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const Home = () => {
  const notices = [{
    id: 1,
    title: "Annual Day Celebration - March 25, 2024",
    date: "Mar 15, 2024"
  }, {
    id: 2,
    title: "Parent-Teacher Meeting - March 20, 2024",
    date: "Mar 10, 2024"
  }, {
    id: 3,
    title: "Summer Vacation begins from April 1, 2024",
    date: "Mar 8, 2024"
  }];
  const features = [{
    icon: GraduationCap,
    title: "Quality Education",
    description: "Comprehensive curriculum designed for holistic development"
  }, {
    icon: Award,
    title: "Experienced Faculty",
    description: "Dedicated teachers committed to student success"
  }, {
    icon: Target,
    title: "Modern Facilities",
    description: "Well-equipped classrooms and learning resources"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Bal Bharti School</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Nurturing Young Minds, Building Bright Futures
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              At Village Public School, we are committed to providing quality education
              that empowers students to become responsible citizens and lifelong learners.
              Our dedicated faculty and modern facilities create an environment where
              every child can thrive and reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-6 w-6 text-primary" />
                Notice Board
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notices.map(notice => <div key={notice.id} className="flex items-start justify-between p-3 bg-secondary rounded-lg hover:bg-muted transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{notice.title}</p>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      {notice.date}
                    </Badge>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, high-quality education that nurtures intellectual
                  curiosity, moral values, and practical skills. We strive to create an
                  inclusive learning environment where every student can discover their
                  unique talents and contribute meaningfully to society.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-6 w-6 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading educational institution that transforms lives through
                  innovative teaching methods and holistic development. We envision our
                  students as confident, compassionate, and capable individuals ready to
                  face the challenges of tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>
    </div>;
};
export default Home;