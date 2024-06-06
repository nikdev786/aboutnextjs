import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion";
import Link from "next/link"


function project() {
  return (
    <>
        <Navbar/>
      
        <div>
            <div className="text-center text-2xl text-teal-500">
      <motion.h1
        className="ml-4 text-decoration-underline mt-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Projects:-
      </motion.h1>
      </div>
      <br />
      <div className="text-yellow-100 px-10 py-5">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <motion.li>
            <motion.h2
            className="text-xl"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Weather-App:-
            </motion.h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              This project is helps to check the tempreture of cities of the different country.
            </motion.p>
            <Link className="text-yellow-500" href="https://weathertempreturesearchapp.netlify.app/">Click to open Weather App</Link>
          </motion.li>
          <br />

          <motion.li>
            <motion.h2
            className="text-xl"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              PDF-App:-
            </motion.h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              This Application helps to split and merge pdf and download them easily.
            </motion.p>
            <Link className="text-yellow-500" href="https://pdf-split-merge-app.netlify.app/">Click to open PDF App</Link>
          </motion.li>
          <br />


        <motion.li>
          <motion.h2
          className="text-xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            To-Do App React:-
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            This project is helps to list the task and delete the tast if not needed
          </motion.p>
          <Link className="text-yellow-500" href="https://github.com/kj920696/todoApp">To-do App Github link</Link>
        </motion.li>
        <br />
        <motion.li
          
        >
          <motion.h2
          className="text-xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Text-Utills App:-
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            This App helps to counts the number of words and letters in textbox and also writes those task in reverse manner
          </motion.p>
          <Link className="text-yellow-500" href="https://github.com/kj920696/textutils">Text-Utills App Github link</Link>
        </motion.li>
        <br />
        <motion.li
          
        >
          <motion.h2
          className="text-xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Calculator App:-
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            It helps to do the simple calculation
          </motion.p>
          <Link className="text-yellow-500" href="https://github.com/kj920696/Calculator">Calculatorn App Github link</Link>
        </motion.li>
        <br />
        <motion.li
          
        >
          <motion.h2
          className="text-xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio Application:-
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            It is my own portfolio application, I made it using react.js.
          </motion.p>
        </motion.li>
      </motion.ul>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default project
