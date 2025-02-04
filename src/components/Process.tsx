import { FileSearch, FileText, Code, TestTube2 } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <FileSearch className="w-12 h-12 text-blue-600" />,
      title: "Free Consultation",
      description: "Start with a FREE consultation to discuss your project goals and requirements",
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "Planning & Proposal",
      description: "Detailed requirement gathering and custom proposal preparation",
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Development",
      description: "Expert development and seamless integration of your solution",
    },
    {
      icon: <TestTube2 className="w-12 h-12 text-blue-600" />,
      title: "Delivery & Support",
      description: "Thorough testing, optimization, and ongoing support",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Working Process</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start with a <span className="text-blue-600 font-semibold">FREE consultation</span> and let us guide you through our proven process
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 -translate-y-1/2" />
          
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full hidden lg:block" />
                <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in z-10 relative">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white hidden lg:block" />
                </div>
                {index % 2 === 0 ? (
                  <div className="hidden lg:block absolute top-full left-1/2 h-8 w-px bg-blue-300" />
                ) : (
                  <div className="hidden lg:block absolute bottom-full left-1/2 h-8 w-px bg-blue-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;