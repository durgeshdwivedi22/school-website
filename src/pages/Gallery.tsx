import { Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder images for gallery
  const events = [
    { id: 1, title: "Annual Day 2023", category: "Events" },
    { id: 2, title: "Sports Day", category: "Sports" },
    { id: 3, title: "Science Exhibition", category: "Academic" },
    { id: 4, title: "Independence Day", category: "Events" },
    { id: 5, title: "Cultural Program", category: "Events" },
    { id: 6, title: "Prize Distribution", category: "Academic" },
    { id: 7, title: "Yoga Day", category: "Activities" },
    { id: 8, title: "Tree Plantation", category: "Activities" },
    { id: 9, title: "Republic Day", category: "Events" },
    { id: 10, title: "Art Competition", category: "Academic" },
    { id: 11, title: "Basketball Tournament", category: "Sports" },
    { id: 12, title: "Teachers Day", category: "Events" },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl opacity-90">Capturing memorable moments from our school life</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">School Events & Activities</h2>
            <p className="text-muted-foreground">A glimpse into our vibrant school community</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer">
                <div className="relative aspect-square bg-secondary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-16 w-16 text-muted-foreground group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="font-semibold text-foreground">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.category}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-3 sm:hidden">
                  <h3 className="font-semibold text-sm">{event.title}</h3>
                  <p className="text-xs text-muted-foreground">{event.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              * Photos are placeholders. Replace with actual school event photos.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Want to Share Your Photos?</h2>
          <p className="text-muted-foreground mb-6">
            If you have photos from school events that you'd like to share, please contact our administration office.
            We love to celebrate and showcase our school community's special moments!
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
