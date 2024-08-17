import React, { useState, useEffect } from "react";
import axios from "axios";

// icons
import {
  FaJava,
  FaDocker,
  FaJenkins,
  FaAws,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiHeroku,
  SiFlux,
  SiCypress,
  SiNextdotjs,
  SiMysql,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "DevOps",
        icons: [
          <FaDocker />,
          <SiKubernetes />,
          <FaAws />,
          <FaJenkins />,
          <SiHeroku />,
          <SiFlux />
        ],
      },
      {
        title: "Web Development",
        icons: [
          <FaJava />,
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiMysql />,
          <FaReact />,
          <SiNextdotjs />,
          <SiCypress />
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Hackathon Winner - TIAA",
        stage: "2023 - 2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer Intern - Nasdaq INC. ",
        stage: "2010 - 2012",
      },
    ],
  },
  {
    title: "Qualifications",
    info: [
      {
        title: "Computer Science and Engineering - Symbiosis Institute Of Technology, PNQ, IN",
        stage: "2024",
      },
      {
        title: "Cloud Computing Specialization - Symbiosis International University, PNQ, IN ",
        stage: "2024",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  const [mergedPullRequests, setMergedPullRequests] = useState(0);
  const [commitsCount, setCommitsCount] = useState(0);

  useEffect(() => {
    const fetchMergedPullRequests = async () => {
      try {
        console.log('Fetching merged pull requests...');
        const response = await axios.get('/api/gitPullRequests');
        setMergedPullRequests(response.data.mergedPullRequestsCount);
      } catch (error) {
        console.error('Error fetching merged pull requests:', error);
      }
    };

    const fetchCommitsCount = async () => {
      try {
        const response = await axios.get('/api/gitCommits');
        setCommitsCount(response.data.totalCommits);
      } catch (error) {
        console.error("Error fetching commits count:", error);
      }
    };

    fetchMergedPullRequests();
    fetchCommitsCount();
  }, []);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[260px]"
      >
        <Avatar />
      </motion.div> */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="h2"
          >
            Robust <span className="text-accent">Code</span> forms the backbone
            of innovation.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I am a freelance developer, currently looking for opportunities to expand my experience. I am open to working remotely with agencies, providing consultation services for startups, and collaborating on the development of digital products for both business and consumer markets. My goal is to bring innovative solutions and a fresh perspective to every project I undertake.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 ">
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Completed Projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
              {/* commits */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={mergedPullRequests} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Total Pull Requests
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={commitsCount} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Total Commits
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex && "text-accent after:w-[100%]"
                } after:bg-accent after:transition-all after:duration-300 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex} className="text-3xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
