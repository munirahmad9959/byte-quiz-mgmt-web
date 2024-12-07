import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div className="overflow-x-hidden h-full w-screen">
      <Navbar />
      <HeroSection />

      <div className='trustedPartnerspictures flex space-x-5 justify-center mt-12 w-full'>
        <img src="./images/1.webp" className='h-[130px] max-w-[750px]' alt="show pic1" />
        <img src="./images/2.webp" className='h-[130px] max-w-[750px]' alt="show pic1" />
        <img src="./images/3.webp" className='h-[130px] max-w-[750px]' alt="show pic1" />
        <img src="./images/4.webp" className='h-[130px] max-w-[750px]' alt="show pic1" />
        <img src="./images/5.webp" className='h-[130px] max-w-[750px]' alt="show pic1" />
        <img src="./images/6.webp" className='h-[130px] max-w-[750px]' alt="show pic1" />
        <img src="./images/7.webp" className='h-[130px] max-w-[750px]' alt="show pic1" />
      </div>
      <p className='text-[#090909] text-[24px] mt-7 text-center'>Trusted by teachers in <span className="text-[#6c4298]">90% of U.S. Schools</span> and <span className="text-[#6c4298]">150+ countries.</span></p>

      <p className='text-[48px] text-[#090909] font-bold w-[75vw] text-center mx-auto mt-16'>Now we support every part of your lesson. Here&apos;s how it works</p>

      <div className="firstSection flex justify-between w-screen mt-14">
        <div className="left mt-7">
          <div className="spacer flex items-center">
            <div className="spacer h-[1px] block border border-blue-600 w-[43vw]"></div>
            <div className="circle h-[20px] w-[20px] border rounded-full border-blue-600 bg-white mr-2 flex items-center justify-center">
              <div className="innerCircle w-[12px] h-[12px] bg-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="content ml-28 w-[25vw]">
            <div className="number text-[110px] font-[800] text-[#69a3d9]">01</div>
            <div className="detail text-[32px] leading-[120%] text-[#666]">
              Adapt anything in your curriculum with an assist from AI when you want it.
            </div>
          </div>
        </div>

        {/* right video and the below image */}
        <div className="flex flex-col items-center">
          {/* Video Container */}
          <div className="right border-8 border-blue-600 w-[50vw] h-[400px] mr-24 rounded-3xl relative overflow-hidden bg-[#E3EEF7]">
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

          {/* Vertical Line */}
          <div className="h-[60px] w-[2px] bg-blue-600"></div>

          {/* Image */}
          <div className="rightImage w-[350px] mx-auto">
            <img
              src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/66b9fcc6212e3228ae4ead46_Twitter%20Testimonial%201.webp"
              alt=""
            />
          </div>

          <div className="flex relative">
            <svg className='mr-[242px] mt-[-14px]' width="260" height="121" viewBox="0 0 260 121" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M258.998 0V76.5C259.164 82.0294 250.598 115.75 214.998 118.488C179.398 121.226 111.666 119.629 0.5 118.488" stroke="#90D6DD" strokeWidth="2" />
            </svg>

            <div className="circle absolute left-[-20px] top-[94px] h-[20px] w-[20px] border rounded-full border-[#90D6DD] bg-white mr-2 flex items-center justify-center">
              <div className="innerCircle w-[12px] h-[12px] bg-[#90D6DD] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="secondContainer flex flex-col items-center w-screen mt-[-80px]">
        <div className="flex justify-between w-full">
          <div className="leftVideo border-8 border-[#1FA9B4] w-[45vw] h-[400px] ml-28 rounded-3xl relative overflow-hidden bg-[#612958]">
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
          <div className="rightContent mt-16">
            <div className="ml-[-550px]">
              <div className="content w-[25vw]">
                <div className="number text-[110px] font-[800] text-[#90D6DD]">02</div>
                <div className="detail text-[32px] leading-[120%] text-[#666]">
                  Deliver differentiated instruction that&apos;s as unique as your students.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical line positioned below the video */}
        <div className="h-[60px] w-[2px] bg-blue-600 mt-1 ml-[-750px]"></div>

        <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/66ba2472405c289ae87f63ce_Twitter%20Testimonial%202%20(1).webp" className='w-[350px]
        ml-[-750px]' alt="" />

        <div className="flex relative">
          <svg className='mr-[505px] mt-[-14px]' width="260" height="121" viewBox="0 0 260 121" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00232 0V76.5C0.835654 82.0294 9.40231 115.75 45.0021 118.488C80.6019 121.226 148.334 119.629 259.5 118.488" stroke="#FDD79D" strokeWidth="3" />
          </svg>

          <div className="circle absolute left-[250px] top-[94px] h-[20px] w-[20px] border rounded-full border-[#FDD79D] bg-white mr-2 flex items-center justify-center">
            <div className="innerCircle w-[12px] h-[12px] bg-[#FDD79D] rounded-full"></div>
          </div>
        </div>
      </div>


      <div className="thirdContainer flex flex-col items-center w-screen mt-[-40px]">
        <div className="flex justify-between w-full">
          <div className="leftContent ">
            <div className="content ml-28 w-[20vw]">
              <div className="number text-[110px] font-[800] text-[#FED28F]">03</div>
              <div className="detail text-[32px] leading-[120%] text-[#666]">
                Get results. Witness joy. Repeat.
              </div>
            </div>
          </div>
          <div className="rightVideo mt-[-90px] border-8 border-[#EB9800] w-[45vw] h-[390px] mr-32 rounded-3xl relative overflow-hidden bg-[#3D1739]">
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
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="flex w-screen justify-center space-x-7 mb-12">
        <div className="card w-[324px] h-[341px] rounded-lg mt-28 border-2 border-[#2d9da6]"
          style={{
            boxShadow: '-7px 7px 0px 0px #2D9DA6',
          }}>
          <div className="flex space-x-5 mt-5">
            <div className="left ml-5">
              <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/64f990b123415b2421ee8b60_63340993ed6180e5f066d265_David.webp" className='border rounded-[12px] max-w-[84px] max-h-[84px]' alt="show pic" />
            </div>
            <div className="flex flex-col w-[10vw]">
              <div className="right">David Sheffield</div>
              <span>8th Grade Math Teacher</span>
            </div>
          </div>
          <div className="Details w-[250px] mx-auto mt-3">
            <span className='text-[#2d9da6]'>"Just today, I was able to use an already created Quizizz</span>
            <p> on slope-intercept form to see if my students were ready for their summative assessment on Thursday .... Because of the data from the Quizizz, I was able to support and meet the needs of these students.”</p>
          </div>
        </div>

        <div className="card w-[324px] h-[341px] rounded-lg mt-28 border-2 border-[#EFA929]"
          style={{
            boxShadow: '-7px 7px 0px 0px #EFA929',
          }}>
          <div className="flex space-x-5 mt-5">
            <div className="left ml-5">
              <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/64f99175abf0f547876c8a6b_63340b156a4b662888ff9ccb_Sarah.webp" className='border rounded-[12px] max-w-[84px] max-h-[84px]' alt="show pic" />
            </div>
            <div className="flex flex-col w-[10vw]">
              <div className="right">Sarah Edinger</div>
              <span>8th Grade Algebra Teacher</span>
            </div>
          </div>
          <div className="Details w-[250px] mx-auto mt-3">
            <p>“I had a visually impaired student in distance learning .... <span className='text-[#efa929]'>With Quizizz, I was able to keep him on track</span> ... and he successfully moved to the next course of accelerated math with all the foundational pieces in place that he needed to know!”</p>
          </div>
        </div>

        <div className="card w-[324px] h-[341px] rounded-xl mt-28 border-2 border-[#9A4292]"
          style={{
            boxShadow: '-7px 7px 0px 0px #9A4292',
          }}>
          <div className="flex space-x-5 mt-5">
            <div className="left ml-5">
              <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/64f9937beead48d3461fe8b1_63340b0493f21a09cf62e0bf_Lisa.webp" className='border rounded-[12px] max-w-[84px] max-h-[84px]' alt="show pic" />
            </div>
            <div className="flex flex-col w-[20vw]">
              <div className="right">Lisa Anderson</div>
              <span>Sr. Manager of Academic Instructional Technology</span>
            </div>
          </div>
          <div className="Details w-[250px] mx-auto mt-3">
            <p><span className='text-[#9a4292]'>“I can't express how valuable it has been</span> in keeping students engaged in their learning whether through instructor paced, individual/team quiz, or as a homework assignment to review together the next day!”</p>
          </div>
        </div>
      </div>

      <div
        className="lastSection flex w-[85vw] mt-12 mx-auto bg-[#E2D1FF] h-[380px] rounded-3xl">
        <div className="left w-[70vw] pt-[80px] pl-[80px] h-full">
          <div className="heading text-[40px] leading-[1.35] font-[500]">Start adapting your curriculum in minutes.</div>
          <p className='text-[20px] leading-[156%]'>The best way to create, adapt, and deliver resources differentiated for every student.</p>
          <div className="buttons flex space-x-5 justify-start mt-12">
            {/* Teacher Button */}
            <button
              className="py-[10px] px-[20px] min-w-[200px] bg-[#8854c0] text-white rounded-xl shadow-lg transform transition 
               hover:translate-y-1 hover:shadow-none active:translate-y-2 active:shadow-sm"
              style={{
                boxShadow: "0 5px 0 #6C4298"
              }}>
              <div className="flex flex-col items-start">
                <span className="font-bold text-lg text-[#B493D7] text-left">Teachers</span>
                <span className="text-white text-lg font-bold flex items-center">
                  Sign up for free <MdOutlineKeyboardArrowRight className="ml-1 font-medium text-xl" />
                </span>
              </div>
            </button>

            {/* Admin Button */}
            <button
              className="py-[10px] px-[20px] min-w-[200px] bg-white text-[#6c4298] rounded-xl shadow-lg transform transition 
               hover:translate-y-1 hover:shadow-none active:translate-y-2 active:shadow-sm"
              style={{
                boxShadow: "0 5px 0 #CCCCCC",

              }}>
              <div className="flex flex-col items-start">
                <span className="text-left text-lg text-gray-600 font-bold">Admins</span>
                <span className="text-[#6c4298] text-lg font-bold flex items-center">
                  Learn more <MdOutlineKeyboardArrowRight className="ml-1 font-medium text-xl" />
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="rightImage w-[20vw] h-full">
          <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/661f9c8c397e5be4b0c959cd_Grid%20Pattern%20Final%20CTA.png" className='bg-auto h-full' alt="" />
        </div>
      </div>
      <Footer />


    </div >
  );
};

export default Home;
