                 
import { FileSearch, FileText, Code, TestTube2, FileSignature, HeartHandshake } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <FileSearch className="w-12 h-12 text-white" />, 
      title: "Free Initial Consultation",
      description: "Identify the client's point of contact and discuss project goals",
      phase: "Phase 1",
    },
    {
      icon: <FileText className="w-12 h-12 text-white" />, 
      title: "Requirement Gathering",
      description: "Collect detailed requirements and refine them for clarity",
      phase: "Phase 2",
    },
    {
      icon: <FileSignature className="w-12 h-12 text-white" />, 
      title: "Proposal & Agreement",
      description: "Create a customized proposal and finalize partnership agreement",
      phase: "Phase 3",
    },
    {
      icon: <TestTube2 className="w-12 h-12 text-white" />, 
      title: "Development",
      description: "Start coding, develop the solution, and integrate seamlessly",
      phase: "Phase 4",
    },
    {
      icon: <Code className="w-12 h-12 text-white" />, 
      title: "Testing & Optimization",
      description: "Thoroughly test and optimize for robust performance",
      phase: "Phase 5",
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-white" />, 
      title: "Delivery & Support",
      description: "Deliver solutions and provide ongoing support",
      phase: "Phase 6",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Working Process</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A systematic approach to delivering excellence, from {" "}
            <span className="text-white font-semibold">consultation to support</span>
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative flex flex-col items-center bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 z-10 border border-gray-700 hover:border-white hover:scale-105"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm font-semibold py-1 px-3 rounded-full shadow-md">
                  {step.phase}
                </div>
                
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;




