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
  { id: 1, img: "/service2.png", title: "Software Development", progress: 70 },
  { id: 2, img: "/service1.png", title: "Web Development", progress: 60 },
  { id: 3, img: "/service3.png", title: "IoT Development", progress: 40 },
  { id: 4, img: "/python.png", title: "Python", progress: 80 },
  { id: 5, img: "/cpp.png", title: "C++", progress: 90 },
  { id: 6, img: "/django.png", title: "Django", progress: 75 },
  { id: 7, img: "/react.png", title: "React", progress: 85 },
  { id: 8, img: "/node.png", title: "Node.js", progress: 75 },
  { id: 9, img: "/flutter.png", title: "Flutter", progress: 65 },
  { id: 10, img: "/firebase.png", title: "Firebase", progress: 70 },
  { id: 11, img: "/aws.png", title: "AWS", progress: 50 },
  { id: 12, img: "/git.png", title: "Git & GitHub", progress: 80 },
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
