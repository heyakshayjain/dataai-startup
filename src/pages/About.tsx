import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Users, Award, Trophy, Heart, Scale3D } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]">About Us</h1>
          
          <div className="mb-12 animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Team collaboration"
              className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg"
            />
            <p className="text-lg text-text/80 dark:text-gray-300 mb-6">
              At DalphoAI, we're more than just a technology company. We're your dedicated partner in digital transformation, combining cutting-edge AI solutions with a deep understanding of your business needs. Our mission goes beyond delivering services – we're committed to fostering lasting partnerships that drive mutual success.
            </p>
            <p className="text-lg text-text/80 dark:text-gray-300">
              Founded with the vision of making advanced AI accessible and impactful, we've helped numerous organizations across various industries unlock their true potential. Our approach is built on transparency, collaboration, and a genuine desire to see our clients succeed.
            </p>
          </div>

          <section className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-[#9b87f5] mb-4" />,
                  title: "Client First",
                  description: "Your success is our priority. We go above and beyond contract obligations to ensure exceptional results.",
                },
                {
                  icon: <Handshake className="w-8 h-8 text-[#9b87f5] mb-4" />,
                  title: "Partnership Approach",
                  description: "We build lasting relationships based on trust, transparency, and mutual growth.",
                },
                {
                  icon: <Trophy className="w-8 h-8 text-[#9b87f5] mb-4" />,
                  title: "Excellence",
                  description: "We maintain the highest standards in everything we do, delivering premium solutions.",
                },
              ].map((value, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 border-[#D6BCFA] border-opacity-50">
                  <CardContent className="pt-6 text-center">
                    <div className="flex flex-col items-center">
                      {value.icon}
                      <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">{value.title}</h3>
                      <p className="text-text/80 dark:text-gray-300">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]">Our Business Philosophy</h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-[#D6BCFA] border-opacity-50">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Scale3D className="w-8 h-8 text-[#9b87f5] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">Win-Win Approach</h3>
                    <p className="text-text/80 dark:text-gray-300">
                      We believe in creating value that benefits both parties. Our success is measured by your achievements and growth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-[#9b87f5] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">Long-term Partnership</h3>
                    <p className="text-text/80 dark:text-gray-300">
                      We invest in understanding your business deeply, becoming a trusted advisor rather than just a service provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]">Our Commitment</h2>
            <div className="bg-gradient-to-r from-[#F1F0FB] to-white dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg border border-[#D6BCFA] border-opacity-50">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-12 h-12 text-[#9b87f5]" />
              </div>
              <p className="text-lg text-text/80 dark:text-gray-300 text-center max-w-2xl mx-auto">
                We're committed to delivering more than what's promised. Our goal is to exceed expectations, 
                push boundaries, and ensure that every solution we provide contributes significantly to your 
                business success. When you win, we win – that's our promise.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;