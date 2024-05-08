"use client";
import React from "react";
import HeadingText from "../elements/HeadingText";
import Accordion from "../elements/Accordion";
import Image from "next/image";
import { MyContext } from "@/lib/AppContext";
import useSectionView from "@/lib/hook";
import { motion } from "framer-motion";

const TrainingSection = ({ featureTrainings }) => {
  const { accordion } = MyContext();
  const imageOne = featureTrainings.filter((item) => item?.idSort == accordion);
  const { ref } = useSectionView("WHY RE/MAX");

  return (
    <section id="training" ref={ref} className=" py-20  ">
      <div className="container max-w-[1250px] mx-auto ">
        <div className="text-center space-y-3">
          <HeadingText text={"Pelatihan"} highlight={"Awal"} />
          <div className="w-20 h-0.5 rounded-full bg-blue-remax max-lg:mx-auto max-lg:mt-2 mx-auto"></div>
        </div>
        <div className="flex justify-center flex-wrap gap-8  mt-12 ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="join join-vertical max-w-[28rem] "
          >
            {featureTrainings.map((item, index) => (
              <Accordion
                key={index}
                heading={item?.heading}
                description={item?.description}
                idSort={item?.idSort}
              />
            ))}
          </motion.div>

          <div className="grid gap-4 max-w-[28rem] lg:max-w-96   ">
            <div className="max-h-[250px] overflow-hidden rounded-lg">
              <Image
                className="-mt-8 max-sm:-mt-16 w-full "
                src={imageOne[0]?.image?.url}
                width={800}
                height={100}
                alt="bootcam-remax"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {featureTrainings.map(
                (item, index) =>
                  item?.idSort != imageOne[0]?.idSort && (
                    <div
                      key={index}
                      className="max-h-[100px] overflow-hidden rounded-lg "
                    >
                      <Image
                        className="h-auto w-full -mt-4 max-sm:-mt-12"
                        src={item?.image?.url}
                        width={800}
                        height={100}
                        alt="bootcam-remax"
                      />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
