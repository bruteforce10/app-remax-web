import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Montserratt from "@/services/FontPremier";
import { MyContext } from "@/lib/AppContext";

const CountUp = ({ initialValue, targetValue, increase }) => {
  const [value, setValue] = useState(initialValue);
  const { anchor } = MyContext();

  useEffect(() => {
    const timer = setInterval(() => {
      if (value < targetValue && anchor === "ABOUT US") {
        setValue((prevValue) => prevValue + increase);
      }
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [targetValue, value, anchor]);

  const formattedValue = value.toLocaleString("id-ID");

  return (
    <AnimatePresence>
      <motion.h5
        className={`text-2xl font-extrabold ${Montserratt.className} text-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        {formattedValue}
      </motion.h5>
    </AnimatePresence>
  );
};

export default CountUp;
