import React from "react";
import { FileText, Lightbulb, Target, CheckSquare } from "lucide-react";
import PropTypes from "prop-types";

const WorkProcessStep = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 transition-transform duration-200 hover:scale-105">
      <Icon 
      loading="lazy"
       className="w-8 h-8 text-gray-600" aria-label={title} />
    </div>
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

// Define prop types for WorkProcessStep
WorkProcessStep.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const WorkProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "Briefing",
      description: "Gathering requirements to understand your needs.",
    },
    {
      icon: Lightbulb,
      title: "Idea Generating",
      description: "Brainstorming innovative strategies for your project.",
    },
    {
      icon: Target,
      title: "Processing",
      description: "Implementing solutions with precision and care.",
    },
    {
      icon: CheckSquare,
      title: "Finishing",
      description: "Final review and delivery of the project.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-white ">
      <div className="mb-12">
        <div className="flex flex-col md:flex-row  items-center justify-between mt-12 ">
          <h1 className="text-4xl lg:block flex items-center  justify-center  font-bold mb-4 md:mb-0">
            Our Work Process
          </h1>
          <p className="text-gray-600 flex justify-start items-center text-center max-w-md ">
            Discover a spectrum of cutting-edge digital marketing services
            tailored to elevate your online presence, drive engagement.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-8 md:space-y-0">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <WorkProcessStep {...step} />
            {index < steps.length - 1 && (
              <div className="border-l-2 border-dashed border-black w-20 mx-auto hidden md:block" />
            )}
            {index < steps.length - 1 && (
              <div className="border-l-2 border-dashed border-black h-12 mx-auto block md:hidden" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
