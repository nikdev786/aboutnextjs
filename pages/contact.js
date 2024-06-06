import { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
   
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="bg-slate-900">
        <div className="container mx-auto bg-slate-900">
          <div className="container my-2 px-6 mx-6">
            <section className=" text-center text-white text-bold">
              <div className="max-w-[700px] mx-auto px-3 ">
                <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput7"
                      name="name"
                      value={formData.name}
                      placeholder="Name"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      className="form-control block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput8"
                      name="email"
                      value={formData.email}
                      placeholder="Email address"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      className="
                          form-control
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                      id="exampleFormControlTextarea13"
                      name="message"
                      value={formData.message}
                      rows="3"
                      placeholder="Message"
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="
                        w-full
                        px-6
                        py-2.5
                        my-5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Send</button>
                    </form>
                  </div>
                </section>
               
              
              </div>
              </div>
              </div>
              <Footer/>
              </>
                )
              }
              
              export default Contact;