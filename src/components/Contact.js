import React from "react";
import "./Contact.css";
import MadeWithLove from "react-made-with-love";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-heading">
        <h1> Contact </h1>
        <h2> I'd love to hear </h2>
      </div>
      <div className="email">
        <h3>
          {" "}
          Email 👉🏾{" "}
          <span className="other-design"> satyachiratla77@gmail.com </span>
        </h3>
      </div>
      <div className="social">
          <a href="https://github.com/satyachiratla">
        <img
          src="https://img.icons8.com/color/64/000000/github--v3.png"
          alt="github"
        />
        </a>
        <a href="https://www.linkedin.com/in/satya-chiratla-378b31165/">
        <img
          src="https://img.icons8.com/color/64/000000/linkedin-circled--v2.png"
          alt="linkedin"
        />
        </a>
        <a href="https://www.instagram.com/v.i.v.e.k_c.h.o.w.d.a.r.y/">
        <img
          src="https://img.icons8.com/color/64/000000/instagram-new--v2.png"
          alt="instagram"
        />
        </a>
      </div>
      <div className="love">
        <MadeWithLove by="Vivek" emoji /> Copyright&copy;{" "}
        {new Date().getFullYear()}&nbsp; Reserved
      </div>
    </div>
  );
};

export default Contact;
