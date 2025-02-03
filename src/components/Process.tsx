import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Data Assessment",
    description: "We analyze your current data infrastructure and identify opportunities for improvement."
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Our team creates a customized roadmap aligned with your business objectives."
  },
  {
    number: "03",
    title: "Implementation",
    description: "We deploy solutions using cutting-edge technologies and best practices."
  },
  {
    number: "04",
    title: "Optimization",
    description: "Continuous monitoring and refinement to ensure optimal performance."
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A systematic approach to transforming your data into valuable insights
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="text-blue-600 font-bold text-lg mb-3">{step.number}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;