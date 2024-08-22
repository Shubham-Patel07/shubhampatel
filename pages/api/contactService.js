import connectDB from "../../lib/mongodb";
import Contact from "../../models/contact";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullname, email, subject, message } = req.body;

    console.log("Full name", fullname);
    console.log("email", email);
    console.log("subject", subject);
    console.log("message", message);

    try {
      await connectDB();
      await Contact.create({ fullname, email, subject, message });

      res.status(200).json({
        msg: ["Message sent successfully"],
        success: true,
      });
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        let errorList = [];
        for (let e in error.errors) {
          errorList.push(error.errors[e].message);
        }
        console.log(errorList);
        res.status(400).json({ msg: errorList });
      } else {
        res.status(500).json({ msg: ["Unable to send message."] });
      }
    }
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
