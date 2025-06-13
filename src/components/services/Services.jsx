import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import Counter from "./Counter";
import WebsiteModelContainer from "./Website/WebsiteModelContainer"; // Updated import
import "./services.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const progressVariants = {
  initial: {
    width: 0,
  },
  animate: {
    width: "var(--progress-width)",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const services = [
  {
    id: 2,
    img: "/service1.png",
    title: "Web Development",
    progress: 60,
  },
  {
    id: 1,
    img: "/service2.png",
    title: "Software Development",
    progress: 70,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "IoT Development",
    progress: 40,
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          My Skills
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <div className="progress-bar-container">
                  <motion.div
                    className="progress-bar"
                    style={{ "--progress-width": `${service.progress}%` }}
                    variants={progressVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                  ></motion.div>
                  <span className="progress-label">{service.progress}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <WebsiteModelContainer /> // Updated to WebsiteModelContainer
        ) : (
          <ConsoleModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;