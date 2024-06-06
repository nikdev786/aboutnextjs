import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion"; // Don't forget to import motion from framer-motion

function About() {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-900 mt-1 mb-1">
        <motion.h1
          className="text-center text-2xl text-teal-500"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        <hr />
      </div> 
      <div className="col-md-10 bg-slate-950 text-yellow-100 px-10 py-5">
      <div>
      <div className="flex justify-center items-center">
  <img className="h-40" src="https://images.pexels.com/photos/16748292/pexels-photo-16748292.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="own pic"></img>
</div>

      <motion.h2
      className="text-center text-xl"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        Nikhil Dubey
      </motion.h2>
    </div>
        <h5 className="text-muted text-xl">Web Developer</h5>
        <motion.p
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        >
          I am a passionate web developer with over 2 years of experience in creating modern and responsive web applications. My expertise includes front-end development using HTML5, CSS3, and JavaScript, as well as back-end development using PHP and MySQL. I have successfully completed numerous projects for clients around the world, ranging from small business websites to large-scale web applications.
        <br/> <br/>
          In addition to my technical skills, I am also well-versed in user experience (UX) design principles and believe in creating intuitive and user-friendly web interfaces. I am committed to staying updated with the latest web development trends and continuously enhancing my skills to deliver high-quality results.
          <br/> <br/>
          Feel free to contact me for your web development needs or to discuss potential projects. I am always excited to work with new clients and help them achieve their online goals.
        </motion.p>
        
      </div>
      <Footer />
    </div>
  );
}

export default About;

