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
  const [loading, setLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

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
      setLoading(false);

      if (success) {
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      setError(["Failed to parse response from server."]);
      setLoading(false);
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
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6"></div> // Loader (spinner)
              ) : (
                <>
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Let's talk
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </>
              )}
            </button>
            {/* error message */}
            {(error.length > 0 || success) && (
              <div
                className={`relative w-full px-5 py-2 border ${
                  success
                    ? "border-green-500 bg-green-10 text-green-700"
                    : "border-accent bg-accent/10 text-accent"
                } opacity-60 hover:opacity-90`}
              >
                {/* Close button */}
                <button
                  onClick={() => {
                    setError([]);
                    setSuccess(false);
                  }}
                  className="absolute top-1 right-1 text-xl leading-none hover:text-red-500 transition-colors duration-200"
                >
                  &times;
                </button>
                {/* Success or Error messages */}
                {success ? (
                  <div>Message sent successfully!</div>
                ) : (
                  error.map((e, index) => <div key={index}>{e}</div>)
                )}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
