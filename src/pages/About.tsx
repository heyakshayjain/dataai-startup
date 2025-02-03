import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Team at work"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <p className="text-lg text-text/80 mb-6">
              At DataAI, we're passionate about transforming raw data into actionable insights that drive business success. Our team of experts combines deep technical knowledge with business acumen to deliver solutions that make a real difference.
            </p>
            <p className="text-lg text-text/80">
              Founded with the mission to make advanced AI and data analytics accessible to businesses of all sizes, we've helped numerous organizations across various industries unlock the true potential of their data.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries to deliver cutting-edge solutions.",
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in everything we do.",
              },
              {
                title: "Partnership",
                description: "We work closely with our clients to ensure their success.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-text/80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;