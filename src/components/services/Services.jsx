import "./services.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const listContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const listItemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
  { id: 1, img: "/service2.png", title: "Java", progress: 80 },
  { id: 2, img: "/service1.png", title: "Python", progress: 80 },
  { id: 3, img: "/service3.png", title: "C/C++", progress: 60 },
  { id: 4, img: "/python.png", title: "HTML", progress: 80 },
  { id: 5, img: "/cpp.png", title: "CSS", progress: 80 },
  { id: 6, img: "/django.png", title: "JavaScript", progress: 70 },
  { id: 7, img: "/react.png", title: "React", progress: 50 },
  { id: 8, img: "/node.png", title: "Node.js", progress: 50 },
  { id: 9, img: "/flutter.png", title: "MongoDB", progress: 50 },
  { id: 10, img: "/firebase.png", title: "SQL", progress: 70 },
  { id: 11, img: "/aws.png", title: "Arduino Programming", progress: 60 },
  { id: 12, img: "/git.png", title: "Iot Model Building", progress: 60 },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          My Skills
        </motion.h1>

        <motion.div
          className="serviceList"
          variants={listContainerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {services.map((service) => (
            <motion.div
              className="service"
              key={service.id}
              variants={listItemVariants}
            >
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
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
                  />
                  <span className="progress-label">{service.progress}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
