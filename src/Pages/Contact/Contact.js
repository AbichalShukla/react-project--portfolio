import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { Rotate } from "react-reveal";
import { LightSpeed } from "react-reveal";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // handle submit buttot

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      toast.error("please provide all valid fields ");
    } else {
      toast.success("your messsage sent successfully");
      setName("");
      setEmail("");
      setMsg("");
    }
  };

  // try {
  //   if (!name || !email || !msg) {
  //     toast.error("please provide all valid fields ");
  //   }

  //     const res = await axios.post("/api/v1/portfolio/sendEmail ", {
  //       name,
  //       email,
  //       msg,
  //     });
  //     // success validation
  //     if (res.data.success) {
  //       toast.success(res.data.message);
  //       setName("");
  //       setEmail("");
  //       setMsg("");
  //     } else {
  //       toast.error(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // gpt codfe

  // const handleSubmitButton = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Make API request using Axios
  //     const response = await axios.post(
  //       "/api/v1/portfolio/sendEmail",

  //       {
  //         name,
  //         email,
  //         msg,
  //       }
  //     );

  //     if (response.data.success) {
  //       console.log(response.data.message);
  //       // Do something on success, e.g., show a success message to the user
  //     } else {
  //       console.error(response.data.message);
  //       // Handle error, e.g., show an error message to the user
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     // Handle other types of errors, e.g., network issues
  //   }
  // };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
                      alt="please wait"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-md-6">
              <Rotate>
                <div className="row">
                  <div className="card2 d-flex card-border-0 px-4 py-5">
                    <div className="row">
                      <h6>
                        Contact With
                        <a
                          href="https://www.linkedin.com/in/abichal-shukla-8096b2232/"
                          target="blank"
                        >
                          <FaLinkedin
                            color="blue"
                            size={30}
                            className="ms-2 "
                          ></FaLinkedin>
                        </a>
                        <a
                          href="https://www.abichalshula.github.com"
                          target="blank"
                        >
                          <FaGithub
                            color="black"
                            size={30}
                            className="ms-2 "
                          ></FaGithub>
                        </a>
                        <a
                          href="https://www.facebook.com/abichalshukla.abichalshukla"
                          target="blank"
                        >
                          <IoLogoFacebook
                            color="blue"
                            size={30}
                            className="ms-2 "
                          ></IoLogoFacebook>
                        </a>
                        <a
                          href="https://www.instagram.com/abichalshuklaabichal?igsh=MWpid3M0MnJ4NXNidA=="
                          target="blank"
                        >
                          <FaInstagramSquare
                            color="red"
                            size={30}
                            className="ms-2 "
                          ></FaInstagramSquare>
                        </a>
                      </h6>
                    </div>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Please Enter Your Email"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="Text"
                      name="msg"
                      placeholder="write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button
                      onClick={handleSubmitButton}
                      className="button"
                      type="submit "
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
