import { FileSearch, FileText, Code, TestTube2, FileSignature, HeartHandshake } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <FileSearch className="w-12 h-12 text-primary" />,
      title: "Free Initial Consultation",
      description: "Identify the client's point of contact and discuss project goals",
      phase: "Phase 1",
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Requirement Gathering",
      description: "Collect detailed requirements and refine them for clarity",
      phase: "Phase 2",
    },
    {
      icon: <FileSignature className="w-12 h-12 text-primary" />,
      title: "Proposal & Agreement",
      description: "Create a customized proposal and finalize partnership agreement",
      phase: "Phase 3",
    },
    {
      icon: <TestTube2 className="w-12 h-12 text-primary" />,
      title: "Development",
      description: "Start coding, develop the solution, and integrate seamlessly",
      phase: "Phase 4",
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Testing & Optimization",
      description: "Thoroughly test and optimize for robust performance",
      phase: "Phase 5",
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-primary" />,
      title: "Delivery & Support",
      description: "Deliver solutions and provide ongoing support",
      phase: "Phase 6",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Working Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach to delivering excellence, from{" "}
            <span className="text-primary font-semibold">consultation to support</span>
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark transform -translate-y-1/2" />
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative ${
                  index % 3 === 0 ? 'lg:-translate-y-8' : 
                  index % 3 === 1 ? '' : 
                  'lg:translate-y-8'
                }`}
              >
                {/* Connection dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 hidden lg:block">
                  <div className="w-full h-full bg-primary rounded-full animate-pulse" />
                </div>
                
                <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative z-10">
                  <div className="absolute -top-3 left-4 bg-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    {step.phase}
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
