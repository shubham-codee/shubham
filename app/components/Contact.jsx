"use client";

import Image from "next/image.js";
import React, { useState } from "react";
import { assets } from "../../assets/assets.js";
import { motion } from "motion/react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "79f696b3-450d-4461-8e29-2405a9d2ce1c");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thanks for reaching out! I'll connect with you soon.");
        event.target.reset();
      } else {
        toast.error("Something went wrong. Please try again later.");
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Unable to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
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
        Contact with me
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
        Get in touch
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
        Let’s connect and collaborate to build impactful projects. I'm ready to
        partner, innovate, and create solutions that drive growth and transform
        vision into reality.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.9,
        }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.1,
            }}
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.2,
            }}
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.3,
          }}
          rows={6}
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-darkHover/30 dark:border-white/90"
        ></motion.textarea>
        <motion.button
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          transition={{ duration: 0.3 }}
          type="submit"
          disabled={isSubmitting}
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto duration-500 cursor-pointer ${
            isSubmitting
              ? "bg-gray-500 text-white"
              : "bg-black/80 text-white hover:bg-black dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit now"}
          {isSubmitting ? (
            <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
          ) : (
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          )}
        </motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
