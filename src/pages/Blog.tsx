import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "The Future of Data Engineering",
    excerpt: "Explore how modern data engineering practices are evolving with the rise of AI and machine learning.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    date: "March 15, 2024",
    slug: "future-of-data-engineering"
  },
  {
    title: "Maximizing Business Value with AI",
    excerpt: "Learn how businesses are leveraging AI to drive growth and optimize operations across different sectors.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "March 10, 2024",
    slug: "maximizing-business-value-with-ai"
  },
  {
    title: "Data Security in the AI Era",
    excerpt: "Understanding the importance of data security and best practices for protecting sensitive information.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    date: "March 5, 2024",
    slug: "data-security-in-ai-era"
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Latest Insights</h1>
          
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <div className="text-sm text-slate-600 mb-2">{post.date}</div>
                    <h2 className="text-2xl font-semibold text-slate-900 mb-3">{post.title}</h2>
                    <p className="text-slate-600 mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`}>
                      <Button 
                        variant="outline" 
                        className="group hover:bg-blue-50"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;