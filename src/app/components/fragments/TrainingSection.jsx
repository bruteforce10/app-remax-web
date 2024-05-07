import React from "react";
import HeadingText from "../elements/HeadingText";
import Accordion from "../elements/Accordion";

const TrainingSection = ({ featureTrainings }) => {
  return (
    <section className=" py-20 relative overflow-hidden">
      <div className="container max-w-[1250px] mx-auto ">
        <div className="text-center space-y-3">
          <HeadingText text={"Pelatihan"} highlight={"Awal"} />
          <div className="w-20 h-0.5 rounded-full bg-blue-remax max-lg:mx-auto max-lg:mt-2 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 justify-center gap-6  mt-8 bg-red-50">
          <div className="join join-vertical w-full mt-12">
            {featureTrainings.map((item, index) => (
              <Accordion
                key={index}
                heading={item?.heading}
                description={item?.description}
              />
            ))}
          </div>

          <div className="grid gap-4 max-w-96">
            <div>
              <img
                className="h-auto max-w-96 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                alt=""
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <img
                  className="h-auto  rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto  rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto  rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
