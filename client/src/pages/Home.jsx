import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';

const Home = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInFromBelow = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="overflow-x-hidden h-full w-screen">
      <Navbar />
      <HeroSection />

      {/* Trusted Partners Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="trustedPartnerspictures flex flex-wrap space-x-5 justify-center -mt-52 md:mt-12 w-full"
      >
        {["1", "2", "3", "4", "5", "6", "7", "8"].map((image) => (
          <img
            key={image}
            src={`./images/${image}.webp`}
            className="h-[55px] md:h-[130px] md:max-w-[750px]"
            alt={`Trusted Partner ${image}`}
          />
        ))}
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="text-[#090909] text-[20px] mx-7 md:text-[24px] mt-7 text-center"
      >
        Trusted by teachers in{" "}
        <span className="text-[#6c4298]">90% of U.S. Schools</span> and{" "}
        <span className="text-[#6c4298]">150+ countries.</span>
      </motion.p>


      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <p className='md:text-[48px] text-[31px] mt-7 text-[#090909] font-bold md:w-[75vw] text-center mx-auto md:mt-16'>Now we support every part of your lesson. Here&apos;s how it works</p>
      </motion.p>

      {/* Section 01 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="firstSection flex md:flex-row flex-col justify-between w-screen md:mt-14"
      >
        <motion.div variants={fadeIn} className="left mt-7">
          <div className="spacer flex items-center">
            <div className="hidden sm:block relative">
              <div className="spacer h-[1px] block border border-blue-600 w-[43vw] "></div>
              <div className="circle h-[20px] w-[20px] border rounded-full border-blue-600 bg-white absolute -top-[10px] left-[570px] md:mr-2 flex items-center justify-center">
                <div className="innerCircle w-[12px] h-[12px] bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="content mx-auto w-[80vw] md:ml-28 md:w-[25vw]">
            <div className="number text-[70px] md:text-[110px] font-[800] text-[#69a3d9]">01</div>
            <div className="detail text-[27.5px] md:text-[32px] leading-[120%] text-[#666]">
              Adapt anything in your curriculum with an assist from AI when you
              want it.
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="flex flex-col items-center">
          <div className="right border-8 border-blue-600 mt-7 md:left-[20px] md:-mt-2 md:w-[50vw] w-[90vw] h-[250px] md:h-[400px] md:mr-24 rounded-3xl relative overflow-hidden bg-[#E3EEF7]">
            <video
              className="absolute top-0 left-0 w-full h-full"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://cf.quizizz.com/videos/webflow/Adapt_Updated_V2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="hidden sm:block">
            <div className="h-[60px] w-[2px] bg-blue-600 md:ml-40 md:mt-3"></div>
            <div className="rightImage w-[350px] mx-auto">
              <img
                src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/66b9fcc6212e3228ae4ead46_Twitter%20Testimonial%201.webp"
                alt=""
              />
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex relative">
              <svg className='mr-[242px] mt-[-14px] md:mr-[270px]' width="260" height="121" viewBox="0 0 260 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M258.998 0V76.5C259.164 82.0294 250.598 115.75 214.998 118.488C179.398 121.226 111.666 119.629 0.5 118.488" stroke="#90D6DD" strokeWidth="2" />
              </svg>
              <div className="circle absolute left-[-20px] top-[94px] h-[20px] w-[20px] border rounded-full border-[#90D6DD] bg-white mr-2 flex items-center justify-center">
                <div className="innerCircle w-[12px] h-[12px] bg-[#90D6DD] rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Section 02 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="secondContainer flex flex-col items-center w-screen md:mt-[-80px]"
      >
        <div className="flex md:flex-row flex-col justify-between w-full">
          <motion.div variants={fadeIn} className="left mt-7">
            <div className="leftVideo border-8 border-[#1FA9B4] md:-mt-[30px] mx-auto mt-56 md:w-[45vw] w-[90vw] h-[250px] md:h-[400px] md:ml-16 rounded-3xl relative overflow-hidden bg-[#612958]">
              <video
                className="absolute top-0 left-0 w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://cf.quizizz.com/videos/webflow/Intro_1K_Updated.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col items-center">
            <div className="rightContent mt-16">
              <div className="md:ml-[-550px] md:-mt-[4px] -mt-[570px]">
                <div className="content w-[80vw] md:w-[25vw]">
                  <div className="number text-[70px] md:text-[110px] font-[800] text-[#90D6DD]">02</div>
                  <div className="detail text-[27.5px] md:text-[32px] leading-[120%] text-[#666]">
                    Deliver differentiated instruction that&apos;s as unique as your students.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical line positioned below the video */}
        <div className="hidden sm:block">
          <div className="h-[60px] w-[2px] bg-blue-600 mt-1 ml-[-750px] md:mt-[10px] md:ml-12"></div>
          <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/66ba2472405c289ae87f63ce_Twitter%20Testimonial%202%20(1).webp" className='w-[350px]
          ml-[-750px] md:-ml-[130px]' alt="" />
          <div className="flex relative">
            <svg className='md:ml-10 mr-[465px] mt-[-14px]' width="288" height="150" viewBox="0 0 288 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999969 0.5L3.99997 91C4.3333 96 7.49827 116.044 31 131C64 152 128.975 146.71 175 148C216.96 149.176 247 149 288 149" stroke="#FDD79D" strokeWidth="2" />
            </svg>
            <div className="circle absolute left-[275px] md:ml-9 top-[124px] h-[20px] w-[20px] border rounded-full border-[#FDD79D] bg-white mr-2 flex items-center justify-center">
              <div className="innerCircle w-[12px] h-[12px] bg-[#FDD79D] rounded-full"></div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </motion.div>


      {/* Section 03 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="thirdContainer flex flex-col items-center w-screen md:mt-[-40px] -mt-[72px]"
      >
        {/* <div className="thirdContainer flex flex-col items-center w-screen mt-[-40px]"> */}
        <div className="flex md:flex-row flex-col justify-between w-full">
          <motion.div variants={fadeIn} className="left mt-7">
            <div className="leftContent ">
              <div className="content md:ml-64 md:-mt-[30px] md:w-[20vw] w-[80vw] mx-auto">
                <div className="number text-[70px] md:text-[110px] font-[800] text-[#FED28F]">03</div>
                <div className="detail text-[27.5px] md:text-[32px] leading-[120%] text-[#666]">
                  Get results. Witness joy. Repeat.
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col items-center">
            <div className="rightVideo mt-8 md:mt-[-30px] border-8 border-[#EB9800] md:w-[45vw] w-[90vw] h-[250px] mx-auto md:h-[390px] md:mr-32 rounded-3xl relative overflow-hidden bg-[#3D1739]">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://cf.quizizz.com/videos/webflow/Joy_Updated_V2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
        {/* </div> */}
      </motion.div>

      {/* Testimonial Section */}
      <div className="flex w-screen justify-center items-center md:justify-center space-x-7">
        <div className="hidden sm:block">
          <motion.div
            className="card w-[324px] h-[341px] rounded-lg mt-28 border-2 border-[#2d9da6]"
            style={{ boxShadow: '-7px 7px 0px 0px #2D9DA6' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex space-x-5 mt-5">
              <div className="left ml-5">
                <img
                  src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/64f990b123415b2421ee8b60_63340993ed6180e5f066d265_David.webp"
                  className="border rounded-[12px] max-w-[84px] max-h-[84px]"
                  alt="show pic"
                />
              </div>
              <div className="flex flex-col w-[10vw]">
                <div className="right">David Sheffield</div>
                <span>8th Grade Math Teacher</span>
              </div>
            </div>
            <div className="Details w-[250px] mx-auto mt-3">
              <span className="text-[#2d9da6]">
                "Just today, I was able to use an already created ByteQuiz
              </span>
              <p>
                on slope-intercept form to see if my students were ready for their summative assessment on Thursday .... Because of the data from the ByteQuiz, I was able to support and meet the needs of these students.”
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="card w-[310px] md:w-[324px] mx-auto h-[324px] rounded-lg mt-10 md:mt-28 border-2 border-[#EFA929]"
          style={{ boxShadow: '-7px 7px 0px 0px #EFA929' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex space-x-5 mt-5">
            <div className="left ml-5">
              <img
                src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/64f99175abf0f547876c8a6b_63340b156a4b662888ff9ccb_Sarah.webp"
                className="border rounded-[12px] max-w-[84px] max-h-[84px]"
                alt="show pic"
              />
            </div>
            <div className="flex flex-col md:w-[10vw]">
              <div className="right">Sarah Edinger</div>
              <span>8th Grade Algebra Teacher</span>
            </div>
          </div>
          <div className="Details text-[17px] w-[300px] md:w-[250px] mx-auto mt-3">
            <p>
              “I had a visually impaired student in distance learning ....{" "}
              <span className="text-[#efa929]">
                With ByteQuiz, I was able to keep him on track
              </span>{" "}
              ... and he successfully moved to the next course of accelerated math with all the foundational pieces in place that he needed to know!”
            </p>
          </div>
        </motion.div>

        <div className="hidden sm:block">
          <motion.div
            className="card w-[324px] h-[341px] rounded-xl mt-28 border-2 border-[#9A4292]"
            style={{ boxShadow: '-7px 7px 0px 0px #9A4292' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex space-x-5 mt-5">
              <div className="left ml-5">
                <img
                  src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/64f9937beead48d3461fe8b1_63340b0493f21a09cf62e0bf_Lisa.webp"
                  className="border rounded-[12px] max-w-[84px] max-h-[84px]"
                  alt="show pic"
                />
              </div>
              <div className="flex flex-col w-[20vw]">
                <div className="right">Lisa Anderson</div>
                <span>Sr. Manager of Academic Instructional Technology</span>
              </div>
            </div>
            <div className="Details w-[250px] mx-auto mt-3">
              <p>
                <span className="text-[#9a4292]">
                  “I can't express how valuable it has been
                </span>{" "}
                in keeping students engaged in their learning whether through instructor paced, individual/team quiz, or as a homework assignment to review together the next day!”
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* After testimal grid background */}
      <motion.div
        className="lastSection flex w-[90vw] md:w-[85vw] mt-14 md:mt-20 mx-auto bg-[#E2D1FF] h-[420px] rounded-3xl"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeInFromBelow}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="left w-full md:w-[70vw] pt-[20px] md:pt-[80px] px-[30px] md:pl-[80px] h-full"
          variants={fadeInFromBelow}
          transition={{ duration: 0.7 }}
        >
          <div className="heading text-[27px] md:text-[40px] leading-[1.35] font-[500]">
            Start adapting your curriculum in minutes.
          </div>
          <p className="md:text-[20px] sm:w-[70vw] text-[17px] leading-[156%]">
            The best way to create, adapt, and deliver resources differentiated
            for every student.
          </p>
          <motion.div
            className="buttons flex md:flex-row flex-col space-y-5 md:space-x-5 md:items-center justify-start md:mt-12 mt-4"
            variants={fadeInFromBelow}
            transition={{ duration: 0.9 }}
          >
            {/* Teacher Button */}
            <button
              className="py-[10px] px-[20px] min-w-[200px] bg-[#8854c0] text-white rounded-xl shadow-lg transform transition 
             hover:translate-y-1 hover:shadow-none active:translate-y-2 active:shadow-sm"
              style={{
                boxShadow: "0 5px 0 #6C4298",
              }}
            >
              <div className="flex flex-col items-start">
                <span className="font-bold text-lg text-[#B493D7] text-left">
                  Teachers
                </span>
                <span className="text-white text-lg font-bold flex items-center">
                  Sign up for free{" "}
                  <MdOutlineKeyboardArrowRight className="ml-1 font-medium text-xl" />
                </span>
              </div>
            </button>

            {/* Admin Button */}
            <button
              className="py-[10px] px-[20px] min-w-[200px] bg-white text-[#6c4298] rounded-xl shadow-lg transform transition 
             hover:translate-y-1 hover:shadow-none active:translate-y-2 active:shadow-sm"
              style={{
                boxShadow: "0 5px 0 #CCCCCC",
              }}
            >
              <div className="flex flex-col items-start">
                <span className="text-left text-lg text-gray-600 font-bold">
                  Admins
                </span>
                <span className="text-[#6c4298] text-lg font-bold flex items-center">
                  Learn more{" "}
                  <MdOutlineKeyboardArrowRight className="ml-1 font-medium text-xl" />
                </span>
              </div>
            </button>
          </motion.div>
        </motion.div>

        <div className="hidden sm:block">
          <motion.div
            className="rightImage w-[20vw] h-full"
            variants={fadeInFromBelow}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/661f9c8c397e5be4b0c959cd_Grid%20Pattern%20Final%20CTA.png"
              className="bg-auto h-full"
              alt=""
            />
          </motion.div>
        </div>
      </motion.div>


      <Footer />


    </div >
  );
};

export default Home;
