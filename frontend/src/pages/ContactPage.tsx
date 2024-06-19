import { useState } from 'react';
import CommonSection from "@/components/CommonSection";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";

const ContactPage = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Capture form data
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    
    // Log data to the console (simulate form submission)
    console.log(data);

    setMessageSent(true);
    // Reload the page after 3 seconds
   
  };

  return (
    <section className="pb-10">
      <CommonSection title="Contact" />
      <div className="container grid md:grid-cols-2">
        <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="p-2.5 border rounded-md"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            className="p-2.5 border rounded-md"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="p-2 border outline-none"
            required
          ></textarea>
          <button type="submit" className="px-6 py-2 border rounded-md">Send Message</button>
          {messageSent && <p className="text-white-500 mt-4">Your message has been sent to staff.</p>}
        </form>
        <div className="space-y-4 p-4">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p>Marsa Plaza North-Dubai Festival City</p>
          <p>Phone: +79227421412</p>
          <p>Email: kerolosashraf755@gmail.com</p>
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex items-center gap-4 mt-4">
              <FaFacebook className="size-3" color="#000d6b" />
              <BsTwitter className="size-3" color="#000d6b" />
              <LuLinkedin className="size-3" color="#000d6b" />
              <InstagramLogoIcon className="size-3" color="#000d6b" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
