import { BookOpen, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Academics = () => {
  const classes = [
    {
      name: "Primary (Classes 1-5)",
      subjects: ["English", "Hindi", "Mathematics", "EVS", "Computer", "Art & Craft", "Physical Education"],
      strength: "200 Students",
    },
    {
      name: "Middle (Classes 6-8)",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer", "Physical Education"],
      strength: "180 Students",
    },
    {
      name: "Secondary (Classes 9-10)",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer", "Physical Education"],
      strength: "120 Students",
    },
  ];

  const timetable = [
    { period: "1st Period", time: "08:00 AM - 08:45 AM", mon: "English", tue: "Hindi", wed: "Math", thu: "Science", fri: "Social" },
    { period: "2nd Period", time: "08:45 AM - 09:30 AM", mon: "Math", tue: "Science", wed: "English", thu: "Hindi", fri: "Math" },
    { period: "3rd Period", time: "09:30 AM - 10:15 AM", mon: "Science", tue: "Math", wed: "Hindi", thu: "English", fri: "Science" },
    { period: "Break", time: "10:15 AM - 10:30 AM", mon: "Tea Break", tue: "Tea Break", wed: "Tea Break", thu: "Tea Break", fri: "Tea Break" },
    { period: "4th Period", time: "10:30 AM - 11:15 AM", mon: "Social", tue: "Computer", wed: "Science", thu: "Math", fri: "English" },
    { period: "5th Period", time: "11:15 AM - 12:00 PM", mon: "Computer", tue: "English", wed: "Social", thu: "P.E.", fri: "Computer" },
    { period: "Lunch", time: "12:00 PM - 12:30 PM", mon: "Lunch Break", tue: "Lunch Break", wed: "Lunch Break", thu: "Lunch Break", fri: "Lunch Break" },
    { period: "6th Period", time: "12:30 PM - 01:15 PM", mon: "Hindi", tue: "Social", wed: "Computer", thu: "Social", fri: "Hindi" },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl opacity-90">Comprehensive education for holistic development</p>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              Our Classes
            </h2>
            <p className="text-muted-foreground">Well-structured curriculum across all grades</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {classes.map((classInfo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{classInfo.name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {classInfo.strength}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-3 text-sm text-muted-foreground">Subjects:</p>
                  <div className="flex flex-wrap gap-2">
                    {classInfo.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Clock className="h-8 w-8 text-primary" />
              Sample Timetable (Class 10)
            </h2>
            <p className="text-muted-foreground">Monday to Friday Schedule</p>
          </div>
          <Card className="max-w-6xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-32">Period</TableHead>
                      <TableHead className="w-40">Time</TableHead>
                      <TableHead>Monday</TableHead>
                      <TableHead>Tuesday</TableHead>
                      <TableHead>Wednesday</TableHead>
                      <TableHead>Thursday</TableHead>
                      <TableHead>Friday</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {timetable.map((row, index) => (
                      <TableRow key={index} className={row.period.includes("Break") || row.period.includes("Lunch") ? "bg-muted/50" : ""}>
                        <TableCell className="font-medium">{row.period}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.time}</TableCell>
                        <TableCell>{row.mon}</TableCell>
                        <TableCell>{row.tue}</TableCell>
                        <TableCell>{row.wed}</TableCell>
                        <TableCell>{row.thu}</TableCell>
                        <TableCell>{row.fri}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-4">
            * Timetable may vary for different classes
          </p>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Academic Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Teaching Methodology</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Interactive classroom sessions</li>
                    <li>• Activity-based learning</li>
                    <li>• Regular assessments and feedback</li>
                    <li>• Digital learning resources</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Extra-Curricular Activities</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Sports and Physical Education</li>
                    <li>• Arts and Crafts</li>
                    <li>• Music and Dance</li>
                    <li>• Science Club and Debates</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Academics;
