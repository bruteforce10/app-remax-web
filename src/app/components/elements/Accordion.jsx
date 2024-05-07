import { MyContext } from "@/lib/AppContext";
import Montserratt from "@/services/FontPremier";
import React, { useEffect } from "react";

const Accordion = ({ heading, description, idSort }) => {
  const { setAccordion } = MyContext();

  useEffect(() => {
    setAccordion(idSort);
  }, []);

  return (
    <div
      onClick={() => setAccordion(idSort)}
      className="collapse collapse-arrow join-item border border-base-300"
    >
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div
        className={`collapse-title text-xl font-medium ${Montserratt.className}`}
      >
        {heading}
      </div>
      <div className="collapse-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
