import { Users, BarChart2, Award, Globe2 } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clients Served",
    description: "Trusted by businesses worldwide"
  },
  {
    icon: BarChart2,
    value: "95%",
    label: "Success Rate",
    description: "In project delivery"
  },
  {
    icon: Award,
    value: "50+",
    label: "Industry Awards",
    description: "For innovation excellence"
  },
  {
    icon: Globe2,
    value: "24/7",
    label: "Support",
    description: "Round-the-clock assistance"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
              <h4 className="font-semibold text-slate-700 mb-1">{stat.label}</h4>
              <p className="text-slate-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;