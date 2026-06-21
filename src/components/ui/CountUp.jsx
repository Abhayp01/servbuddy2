import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CountUp = ({ to, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (!inView) return;

    const end = parseFloat(to);
    if (isNaN(end)) {
      setCount(to);
      return;
    }

    const isFloat = to.toString().includes(".");
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      // easeOutQuad
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * end;

      if (step >= totalSteps) {
        clearInterval(timer);
        setCount(to);
      } else {
        setCount(isFloat ? currentVal.toFixed(1) : Math.floor(currentVal).toString());
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [to, duration, inView]);

  return (
    <span ref={ref} className="font-mono">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default CountUp;
