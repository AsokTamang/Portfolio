"use client";
import toast from "react-hot-toast";
import React from "react";
import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const [state, handlesubmit] = useForm(process.env.NEXT_PUBLIC_formid!);
  React.useEffect(() => {
    if (state.succeeded) {
      setOpen(false);
      toast.success('Thanks for reaching out!');
    }
  }, [state.succeeded]);

  function FormTable() {
    return (
      <div className="max-w-md flex flex-col items-center justify-center p-5 mx-auto  rounded-2xl bg-primary backdrop-blur-lg ">
        <form onSubmit={(e) => handlesubmit(e)}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Bryan Adams"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="field-input field-input-focus"
              placeholder="bryan888@gmail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="field-input field-input-focus"
              placeholder="I want you to build me ......."
              required
            />
          </div>

          <button
            className="mt-0.5 bg-radial from-lavender to-royal w-full text-lg p-2"
            type="submit"
          >
            Send
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    );
  }

  return (
    <>
      <section className="relative flex items-center c-space section-spacing">
        <div className="max-w-md flex flex-col items-center justify-center p-5 mx-auto border border-white/10 rounded-2xl bg-primary ">
          <h2 className="text-heading">Let's talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking for building a fast,secure and scalable
            WebApp for your startup, improve your existing website, or bringing
            your company's unique ideas into life, I'm available to work.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-0.5 bg-radial from-lavender to-royal w-full text-lg p-2"
          >
            Hire me
          </button>
          {/**need to make the down page responsive */}
          {open && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <FormTable />
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
