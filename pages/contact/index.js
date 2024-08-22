import { useState } from "react";

//components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

const Contact = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const handelSubmit = async (e) => {
    e.preventDefault();

    console.log("Fullname:", fullname);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    const res = await fetch("/api/contactService", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        subject,
        message,
      }),
    });
    const text = await res.text(); // Get the raw response text
    console.log("Raw response:", text);

    try {
      const data = JSON.parse(text); // Attempt to parse as JSON
      console.log("Parsed data:", data);
      const { msg, success } = data;
      setError(msg);
      setSuccess(success);

      if (success) {
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      setError(["Failed to parse response from server."]);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={handelSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                onChange={(e) => setFullName(e.target.value)}
                value={fullname}
                type="text"
                placeholder="name"
                className="input"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="email"
                className="input"
              />
            </div>
            <input
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              type="text"
              placeholder="subject"
              className="input"
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="message"
              className="textarea"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
