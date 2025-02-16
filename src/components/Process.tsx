import { FileSearch, FileText, Code, TestTube2, FileSignature, HeartHandshake } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <FileSearch className="w-12 h-12 text-[#9b87f5]" />, 
      title: "Free Initial Consultation",
      description: "Identify the client's point of contact and discuss project goals",
      phase: "Phase 1",
    },
    {
      icon: <FileText className="w-12 h-12 text-[#9b87f5]" />, 
      title: "Requirement Gathering",
      description: "Collect detailed requirements and refine them for clarity",
      phase: "Phase 2",
    },
    {
      icon: <FileSignature className="w-12 h-12 text-[#9b87f5]" />, 
      title: "Proposal & Agreement",
      description: "Create a customized proposal and finalize partnership agreement",
      phase: "Phase 3",
    },
    {
      icon: <TestTube2 className="w-12 h-12 text-[#9b87f5]" />, 
      title: "Development",
      description: "Start coding, develop the solution, and integrate seamlessly",
      phase: "Phase 4",
    },
    {
      icon: <Code className="w-12 h-12 text-[#9b87f5]" />, 
      title: "Testing & Optimization",
      description: "Thoroughly test and optimize for robust performance",
      phase: "Phase 5",
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-[#9b87f5]" />, 
      title: "Delivery & Support",
      description: "Deliver solutions and provide ongoing support",
      phase: "Phase 6",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]">
            Our Process
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 hover:border-[#9b87f5] dark:hover:border-[#9b87f5] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <div className="space-y-2">
                <span className="text-sm font-medium text-[#9b87f5]">{step.phase}</span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;




