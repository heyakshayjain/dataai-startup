import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const blogPosts = {
  "future-of-data-engineering": {
    title: "The Future of Data Engineering",
    content: `Data engineering is rapidly evolving with the rise of AI and machine learning technologies. This transformation is reshaping how businesses handle, process, and analyze their data infrastructure.

    Modern data engineering practices are increasingly focused on:
    
    • Real-time data processing
    • Automated ETL pipelines
    • Machine learning operations (MLOps)
    • Scalable cloud infrastructure
    
    As we look to the future, data engineers will need to adapt to new tools and methodologies while maintaining robust and efficient data systems.`,
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  "maximizing-business-value-with-ai": {
    title: "Maximizing Business Value with AI",
    content: `Artificial Intelligence is revolutionizing how businesses operate across all sectors. From automated customer service to predictive analytics, AI is creating new opportunities for growth and efficiency.

    Key areas where AI is driving business value:
    
    • Customer experience optimization
    • Process automation
    • Predictive maintenance
    • Data-driven decision making
    
    Companies that successfully implement AI solutions are seeing significant improvements in productivity and competitive advantage.`,
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  "data-security-in-ai-era": {
    title: "Data Security in the AI Era",
    content: `As AI systems become more prevalent, data security has never been more critical. Organizations must balance innovation with robust security measures to protect sensitive information.

    Essential considerations for AI data security:
    
    • Data encryption and protection
    • Access control and authentication
    • Compliance with regulations
    • Regular security audits
    
    Implementing strong security measures is crucial for maintaining trust and protecting valuable assets in the AI era.`,
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Post not found</h1>
            <Button onClick={() => navigate("/blog")} variant="outline">
              <ArrowLeft className="mr-2" /> Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <article className="max-w-3xl mx-auto">
          <Button 
            onClick={() => navigate("/blog")} 
            variant="outline"
            className="mb-8"
          >
            <ArrowLeft className="mr-2" /> Back to Blog
          </Button>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="text-sm text-slate-600 mb-4">{post.date}</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-8">{post.title}</h1>
          
          <div className="prose prose-slate max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;