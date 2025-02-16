import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import DataEngineering from "./pages/services/DataEngineering";
import DataAnalytics from "./pages/services/DataAnalytics";
import MachineLearning from "./pages/services/MachineLearning";
import AIAutomation from "./pages/services/AIAutomation";
import SubmitTestimonial from "./pages/SubmitTestimonial";
import Services from './components/Services';
import BookMeeting from './pages/BookMeeting';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" enableSystem>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/data-engineering" element={<DataEngineering />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/machine-learning" element={<MachineLearning />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/submit-testimonial" element={<SubmitTestimonial />} />
            <Route path="/book-meeting" element={<BookMeeting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
