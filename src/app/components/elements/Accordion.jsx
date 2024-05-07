import React from "react";

const Accordion = ({ heading, description }) => {
  return (
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title text-xl font-medium">{heading}</div>
      <div className="collapse-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
