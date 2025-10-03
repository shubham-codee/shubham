"use client";

import React from "react";
import { assets, serviceData } from "../../assets/assets.js";
import Image from "next/image.js";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.7,
        }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I offer comprehensive web development services, from building scalable
        full-stack applications to seamless API integrations. My expertise
        ensures robust, maintainable solutions tailored to bring your digital
        vision to life.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.9,
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 my-10"
      >
        {serviceData.map(
          ({ icon: Icon, iconColor, title, description }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              {/* Crimson background with white icon */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl mb-4"
                style={{ backgroundColor: iconColor }}
              >
                <Icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {description}
              </p>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
