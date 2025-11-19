import { User, History, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const About = () => {
  const achievements = [{
    year: "2023",
    title: "Best Village School Award",
    description: "State Level Recognition"
  }, {
    year: "2022",
    title: "100% Pass Rate",
    description: "Class 10th Board Examinations"
  }, {
    year: "2021",
    title: "Sports Excellence",
    description: "District Level Champions"
  }, {
    year: "2020",
    title: "Digital Learning Initiative",
    description: "First Fully Digital School in District"
  }];
  return <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
          <p className="text-xl opacity-90">Learn about our journey, leadership, and achievements</p>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                Principal's Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center">
                    <User className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-center mt-2 font-medium">Dr. Mahesh Kumar</p>
                  <p className="text-center text-sm text-muted-foreground">Principal</p>
                </div>
                <div className="flex-1 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Dear Students, Parents, and Well-wishers,
                  </p>
                  <p className="leading-relaxed">
                    It gives me immense pleasure to welcome you to Village Public School. As Principal,
                    I am proud to lead an institution that has been a beacon of learning and character
                    building in our community for over three decades.
                  </p>
                  <p className="leading-relaxed">
                    Our school is built on the foundation of strong values, academic excellence, and
                    holistic development. We believe that education is not just about textbooks and
                    examinations, but about nurturing young minds to become responsible, compassionate,
                    and innovative individuals.
                  </p>
                  <p className="leading-relaxed">
                    We are committed to providing a safe, inclusive, and stimulating environment where
                    every child can discover their potential and pursue their dreams. Together with our
                    dedicated teachers and supportive parents, we continue to strive for excellence in
                    all that we do.
                  </p>
                  <p className="leading-relaxed font-medium">
                    With warm regards,<br />
                    Dr. Rajesh Kumar
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School History */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-6 w-6 text-primary" />
                Our History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Village Public School was established in 1990 with a vision to bring quality education
                to the rural areas of our district. What started as a small school with just 50 students
                has now grown into a thriving institution serving over 500 students from various villages.
              </p>
              <p className="leading-relaxed">
                Over the years, we have continuously evolved and adapted to meet the changing needs of
                education. From traditional classrooms to digital learning, from basic facilities to
                modern infrastructure, our journey has been one of constant growth and improvement.
              </p>
              <p className="leading-relaxed">
                Our dedicated teachers, supportive management, and active parent community have been
                instrumental in building this institution. We take pride in our alumni who have gone on
                to excel in various fields and contribute to society.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center p-4 bg-background rounded-lg">
                  <p className="text-3xl font-bold text-primary">34+</p>
                  <p className="text-sm">Years of Service</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm">Students</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <p className="text-3xl font-bold text-primary">30+</p>
                  <p className="text-sm">Teachers</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm">Pass Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Trophy className="h-8 w-8 text-primary" />
              Our Achievements
            </h2>
            <p className="text-muted-foreground">Celebrating our milestones and successes</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
    </div>;
};
export default About;