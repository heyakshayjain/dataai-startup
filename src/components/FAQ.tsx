import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Find answers to common questions about our AI and data solutions
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What services does DalphoAI offer?</AccordionTrigger>
              <AccordionContent>
                DalphoAI offers comprehensive data engineering, AI solutions, machine learning implementation, and data analytics services. We help businesses transform their raw data into actionable insights and automated solutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can AI benefit my business?</AccordionTrigger>
              <AccordionContent>
                AI can automate repetitive tasks, provide deeper insights from your data, improve decision-making processes, and help identify new business opportunities. Our solutions are tailored to your specific industry and business needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What industries do you work with?</AccordionTrigger>
              <AccordionContent>
                We work across various industries including finance, healthcare, retail, manufacturing, and technology. Our solutions are adaptable to any industry that wants to leverage data and AI for growth.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do you ensure data security?</AccordionTrigger>
              <AccordionContent>
                We implement industry-leading security protocols and comply with all relevant data protection regulations. Your data security is our top priority, and we maintain strict confidentiality throughout our engagement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;