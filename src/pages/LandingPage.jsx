import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks.jsx";
import Footer from "./Footer.jsx";
import { GiBeveledStar } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";

const LandingPage = ({
  lightDark,
  toggle,
  switchClose,
  showNavbar,
  toggleNavbar,
}) => {
  return (
    <>
      <div className="p-6 md:px-28">
        <NavLinks
          lightDark={lightDark}
          showNavbar={showNavbar}
          toggleNavbar={toggleNavbar}
          switchClose={switchClose}
        />

        <div
          className={`${
            lightDark ? "text-color2" : "text-color1"
          } mt-20 md:ml-20`}
          onClick={switchClose}
        >
          <div
            className={`md:w-2/5 sm:w-full md:h-auto md:py-5 md:px-5 md:mb-[-450px] md:mt-[200px] md:relative md:bg-opacity-70 md:shadow-lg ${
              lightDark ? "md:bg-color1" : "md:bg-[black]"
            }  md:z-40`}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <h1 className="text-2xl font-bold  md:w-[70%]">
              We Help You actualize Your Dream{" "}
              <>
                <p className="inline">Home!</p>
                <img
                  src="line.png"
                  alt=""
                  className="ml-[70px] w-[100px] md:ml-[41%]"
                />
              </>
            </h1>
            <p className="mt-5 ">
              We offer the best services in architectural designs, real estate,
              construction, Interior and exterior designs. We employ latest
              technology and innovations to satisfy your architectural needs.
              Please contact us to get started!
            </p>
            <div className="flex mt-10 md:mt-2">
              <div className="bg-color5 rounded-xl w-1/2 mr-3 p-1 hover:bg-[#792815] md:w-1/3 md:text-sm md:flex md:items-center md:justify-center md:rounded md:hover:translate-y-0.5">
                <h1 className="text-color1 text-center">Request a Project</h1>
              </div>
              <div className="border-2 border-color5 rounded-xl w-1/2 p-1 md:w-1/3 md:text-sm md:flex md:items-center md:justify-center md:rounded md:hover:translate-y-0.5">
                <h1
                  className={`${
                    lightDark ? "text-color5" : "text-color1"
                  }  text-center`}
                >
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
          <a href="image1.png" target="_blank" rel="noreferrer">
            <div
              className="md:w-[70%] md:h-[500px] md:m-auto md:z-10"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <img
                src="image12.jpeg"
                alt=""
                className="m-auto mt-10 rounded md:w-[100%] md:h-[100%]"
              />
            </div>
          </a>
        </div>
        <div className="mt-10 md:flex md:items-center md:justify-around md:gap-10">
          <div
            className="md:w-1/3"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h1
              className={`${
                lightDark ? "text-color5" : "text-color1"
              } font-bold text-2xl`}
            >
              About NuelC
            </h1>
            <p
              className={`${
                lightDark ? "text-color2" : "text-color1"
              } text-md mt-5 mb-3 `}
            >
              We specialize in Architectural Planning, Designs and Real Estate
              offers.
            </p>
            <p
              className={`${
                lightDark ? "text-color2" : "text-color1"
              } text-sm md:text-justify mb-5`}
            >
              NuelC Studio is a company founded in 2015 by Architect Chinedu
              Emmanuel, which is specialized in architectural modelling of both
              commercial and private structures, Interior and exterior designs,
              buying and selling of real estate properties, consultations on
              construction works and so many others more...
            </p>
            <Link to="AboutUs"className="mt-10 mb-10 w-[140px] rounded md:hover:bg-[red] md:hover:translate-y-1 text-color1 text-md p-1 bg-color5">
              Read More
            </Link>
          </div>
          <a
            href="image2.png"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img
              src="image1.png"
              alt=""
              className="rounded mt-10 md:shadow-2xl md:w-full"
            />
          </a>
        </div>
        <div id="services" className="md:flex md:items-center md:gap-10 md:mt-10">
          <div
            className="mt-10 md:w-1/3 md:flex md:flex-col md:gap-5"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h1
              className={`font-bold text-2xl ${
                lightDark ? "text-color5" : "text-color1"
              } mb-5`}
            >
              Our Services
            </h1>
            <p
              className={`${
                lightDark ? "" : "text-color1"
              } flex items-center justify-between py-4 border-b-[1px] text-md mb-3`}
            >
              Free Consultation <BsArrowUpRight />
            </p>
            <p
              className={`${
                lightDark ? "" : "text-color1"
              } flex items-center justify-between py-4 border-b-[1px] text-md mb-3`}
            >
              Architectural Design <BsArrowUpRight />
            </p>
            <p
              className={`${
                lightDark ? "" : "text-color1"
              } flex items-center justify-between py-4 border-b-[1px] text-md mb-3`}
            >
              Real Estate <BsArrowUpRight />
            </p>
            <p
              className={`${
                lightDark ? "" : "text-color1"
              } flex items-center justify-between py-4 border-b-[1px] text-md mb-3`}
            >
              Interior Design <BsArrowUpRight />
            </p>
          </div>
          <div
            className="container mx-auto mt-10 md:w-2/4"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded  w-full">
                
                  <img src="image4.jpg" alt="" />
             
              </div>
              <div className="rounded  w-full col-span-2 row-span-2">
                <a href="image6.jpg" target="_blank" rel="noreferrer">
                  <img src="image6.jpg" alt="" />
                </a>
              </div>
              <div className="rounded  w-full ">
                <a href="image3.jpg" target="_blank" rel="noreferrer">
                  <img src="image3.jpg" alt="" />
                </a>
              </div>
              <div className="rounded  w-full col-span-2">
                <a href="image5.jpg" target="_blank" rel="noreferrer">
                  <img src="image5.jpg" alt="" />
                </a>
              </div>
              <div className="rounded  w-full">
                <a href="image6.jpg" target="_blank" rel="noreferrer">
                  <img src="image6.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10">
            <div className="md:flex md:items-center md:gap-28 md:justify-between" id="projects">
              <h1
                className={`font-bold ${
                  lightDark ? "text-color5" : "text-color1"
                } text-2xl`}
              >
                Our Latest Projects
              </h1>
              <ul
                className={`${
                  lightDark ? "" : "text-color1"
                } mt-5 flex flex-col gap-10 text-md md:text-lg md:flex md:flex-row`}
              >
                <li>Interior Design</li>
                <li>Architectural Design</li>
                <li>Real Estate</li>
                <li>3D Visualization</li>
              </ul>
            </div>
            <div className="md:flex md:items-center md:gap-5">
              <iframe
                src="https://www.youtube.com/embed/MRqZutLJErA"
                title="3D Animation"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="w-full h-60 mt-5 md:m-auto md:mt-10"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="2000"
              ></iframe>
              <div className="flex flex-col gap-5 mt-10 md:flex md:flex-row md:justify-between">
                <a href="image7.jpg" target="_blank" rel="noreferrer">
                  <img
                    src="image7.jpeg"
                    alt=""
                    className="md:shadow md:shadow-color2"
                    data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                  />
                </a>
                <a href="image8.jpg" target="_blank" rel="noreferrer">
                  <img
                    src="image8.jpg"
                    alt=""
                    className="md:shadow md:shadow-color2"
                    data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                  />
                </a>
                <a href="image9.jpg" target="_blank" rel="noreferrer">
                  <img
                    src="image9.jpg"
                    alt=""
                    className="md:shadow md:shadow-color2"
                    data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                  />
                </a>
              </div>
            </div>
            <div className="m-auto mt-5 mb-5 w-[140px] rounded-xl text-color1 text-center text-md p-1 bg-color5 md:w-[200px] md:rounded md:hover:bg-[red] md:hover:translate-y-1">
              View more
            </div>
          </div>
          <div className="md:flex md:flex-row-reverse md:items-center md:gap-20 md:ml-[150px] md:mt-10">
            <div
              className={`${lightDark ? "" : "text-color1"} md:w-1/2`}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <h1
                className={`${
                  lightDark ? "text-color5" : "text-color1"
                } font-bold text-2xl`}
              >
                Benefits
              </h1>
              <ul className="mt-5 flex flex-col gap-5 text-md md:text-lg">
                <li className="flex items-center gap-5">
                  {" "}
                  <GiBeveledStar />
                  Trust
                </li>
                <li className="flex items-center gap-5">
                  {" "}
                  <GiBeveledStar /> Best design as an investment
                </li>
                <li className="flex items-center gap-5">
                  {" "}
                  <GiBeveledStar /> Affordable for any budget
                </li>
                <li className="flex items-center gap-5">
                  {" "}
                  <GiBeveledStar /> Timely delivery
                </li>
              </ul>
            </div>
            <div
              className="mt-10 shadow p-1 md:w-2/3"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img src="image10.jpg" alt="" className="w-4/5" />
              <img
                src="image11.jpg"
                alt=""
                className="w-2/3 ml-[auto] mt-[-30px] "
              />
            </div>
          </div>
          <h1
            className={`font-bold ${
              lightDark ? "text-color5" : "text-color1"
            } text-2xl my-5 md:text-center md:mt-20`}
          >
            Our Upwork Reviews
          </h1>
          <div className="flex flex-col gap-5 md:flex md:flex-row">
            <div
              className={`flex items-center p-3 border gap-5 ${
                lightDark ? "" : "text-color1"
              } ${lightDark ? "bg-color1" : "bg-[#121212]"}  md:w-1/3`}
            >
              <div className="">
                <a
                  href="https://www.upwork.com/freelancers/~01c6d2d5ed93f5e5f7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1 className="font-bold text-md mb-3">
                    Project: Mama's Roll
                  </h1>
                  <p>
                    "Michael was very responsive throughout the entire process.
                    His attention to details is superb. I am surprised by his
                    customer service and his professionalism. More importantly,
                    he cares about the project. Thank you for your work and I
                    would one hundred percent recommend Michael for your next
                    project."
                  </p>
                </a>
              </div>
            </div>
            <div
              className={`flex items-center border p-3 gap-5 ${
                lightDark ? "" : "text-color1"
              } ${lightDark ? "bg-color1" : "bg-[#121212]"} md:w-1/3`}
            >
              <div>
                <a
                  href="https://www.upwork.com/freelancers/~01c6d2d5ed93f5e5f7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1 className="font-bold text-md mb-3">
                    Project: Redrawing House Plans
                  </h1>
                  <p>
                    "Did all that was asked and required. Would definitely
                    recommend"
                  </p>
                </a>
              </div>
            </div>
            <div
              className={`flex items-center border p-3 gap-5 ${
                lightDark ? "" : "text-color1"
              } ${lightDark ? "bg-color1" : "bg-[#121212]"} md:w-1/3`}
            >
              <div>
                <a
                  href="https://www.upwork.com/freelancers/~01c6d2d5ed93f5e5f7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1 className="font-bold text-md mb-3">
                    Project: Home Remodel + Additional Floor Plans
                  </h1>
                  <p>
                    "Michael was great to work with. He completed the job ahead
                    of schedule, was quick to respond to messages, and took care
                    of everything we needed. Would work with him again!"
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer lightDark={lightDark} toggle={toggle} />
    </>
  );
};

export default LandingPage;
