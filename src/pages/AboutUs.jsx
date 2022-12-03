import React from "react";
import NavLinks from "./NavLinks";
import Footer from "./Footer";

const AboutUs = ({
  lightDark,
  toggle,
  switchClose,
  showNavbar,
  toggleNavbar,
}) => {
  return (
    <>
      <div className="md:p-6 md:px-28 px-10 pt-5">
        <NavLinks
          lightDark={lightDark}
          showNavbar={showNavbar}
          toggleNavbar={toggleNavbar}
        />
        <div onClick={switchClose}>
          <div
            className={`md:px-28 md:py-20 ${
              lightDark ? "text-color2" : "text-color1"
            } flex flex-col gap-10 text-justify mt-20`}
          >
            <h1 className="text-center text-color5 font-bold text-xl">
              About NuelC
            </h1>
            <p>
              {" "}
              NuelC Studio is a Professional Architectural company founded in
              2015 by Architect Chinedu Emmanuel, which is specialized in
              working with Individuals, builders, Investors, developers and
              companies in architectural modelling of both commercial and
              private structures, Interior and exterior designs, buying and
              selling of real estate properties, consultations on construction
              works and so many others more. We are the clients' advocate for
              crafting spaces, achieving sustainability and creating value while
              meeting the demands of the market place and linking the present
              with the past. NuelC achieves this with vision to reality
              planning.{" "}
            </p>
            <p>
              Furthermore, we believe that carefully listening to clients'
              desires helps tailor the design to a solution that offers
              successful results. NuelC has the knowledge, skills and experience
              to create and manage your project and help you achieve your goals.
              Also, we develop a project team of professional suited to your
              project. NuelC network team of Design, Engineering and
              Construction Professionals will focus on the clients' desires to
              achieve a successful project.{" "}
            </p>
            <p>
              Also, It is our internal policy to always employ the latest in
              design technology along with traditional design methods which in
              turn helps to communicate effectively during the design and
              construction process, which results in efficient and quality
              project delivery. At NuelC, we stress design excellence balanced
              by meticulous project management. We at NuelC offer productive
              personal attention to each client with fresh and creative ideas.
            </p>
            <p>
              We look forward to hearing from you to discuss your project ideas
              and dreams.
            </p>
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-2 flex flex-col gap-5 mt-10 mb-10">
            <img
              src="image13.jpeg"
              alt=""
              className="rounded  w-full col-span-2 row-span-2 shadow-lg"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
            <img
              src="image14.jpeg"
              alt=""
              className="rounded shadow-lg"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            />
            <img
              src="image15.jpeg"
              alt=""
              className="rounded shadow-lg"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            />
            <img
              src="image16.jpeg"
              alt=""
              className="rounded  w-full col-span-2 row-span-3 shadow-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
        </div>
        <div className="md:mt-28">
          <div className={`${
              lightDark ? "text-color2" : "text-color1"
            } flex flex-col-reverse md:flex md:flex-row md:justify-between md:items-center md:gap-10 `}>
            <figure className="md:w-1/3 h-[400px] bg-[#565454] p-2 rounded " data-aos="flip-left" data-aos-duration="1000">
              <img src="Face_passport.jpeg" alt="" className="w-full h-full" />
            </figure>
            <div className="md:w-1/2 w-full text-justify mb-10">
              <h1 className="text-color5 font-bold text-xl mb-5">Biography</h1>
              <p>
                Architect Chinedu Emmanuel Nweke was born in 1993 in the city of
                Onitsha, Anambra State, Nigeria. He graduated with a Bachelors
                of Science in Architecture from the prestigious Nnamdi Azikiwe
                University, Awka, Anambra State, Nigeria. Mr Emmanuel has always
                found Architecture and drawing in general very interesting and
                irresistible, thus, over the years he has improved his skills
                and knowledge of designing and building through numerous real
                life projects and experiences.{" "}
              </p>
            </div>
          </div>
          <div className={`md:px-28 md:py-20 ${
              lightDark ? "text-color2" : "text-color1"
            } flex flex-col gap-5 text-justify`}>
            <h1 className="text-color5 font-bold text-xl mt-20 text-center">Culture</h1>
            <p className="text-justify">
              How we work is inextricably linked to our belief in the power of
              design to do the greatest good for a place and its' people. At
              NuelC Studio, we design community-centered environments that
              connect people and place through design. We strive to elevate the
              human experience and the long term stewardship of our planet ny
              emphasizing the spirit of a place through quality and enduring
              architecture, sustainable design objectives, sensitivity to sites
              and landscapes, and design transformations that embodies a
              community's highest ambitions.
            </p>
            <h1 className="text-color5 font-bold text-xl mt-10 text-center">Commitment to Sustainability</h1>
            <p className="text-justify">
              No design is truly beautiful if it creates ugliness somewhere
              else. NUELC STUDIO believes good designs are ones that make the
              world a better place for this and future generations. As
              architects and global citizens, we have the opportunity and the
              responsibility to challenge conventional thinking, to push
              ourselves, our consultants, and our clients to achieve more than
              we think possible, and to demonstrate real and inspiring solutions
              to the problems we face today. Climate change, water scarcity, and
              resource depletion are real and immediate
              threats. It is within our collective power to restore the health
              of our communities and our planet, and to do so we make
              sustainability a fundamental driver of our work, our design
              process, and our culture as a firm.
            </p>
          </div>
        </div>
        <div className="mt-10">
            <div className="md:flex md:items-center md:gap-28 md:justify-between">
              <h1
                className={`font-bold ${
                  lightDark ? "text-color2" : "text-color5"
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
                data-aos-duration="1000"
              ></iframe>
              <div className="flex flex-col gap-5 mt-10 md:flex md:flex-row md:justify-between">
                <a href="image7.jpg" target="_blank" rel="noreferrer">
                  <img
                    src="image7.jpeg"
                    alt=""
                    className="md:shadow md:shadow-color2"
                    data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  />
                </a>
                <a href="image8.jpg" target="_blank" rel="noreferrer">
                  <img
                    src="image8.jpg"
                    alt=""
                    className="md:shadow md:shadow-color2"
                    data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  />
                </a>
                <a href="image9.jpg" target="_blank" rel="noreferrer">
                  <img
                    src="image9.jpg"
                    alt=""
                    className="md:shadow md:shadow-color2"
                    data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  />
                </a>
              </div>
            </div>
            <div className="m-auto mt-5 mb-5 w-[140px] rounded-xl text-color1 text-center text-md p-1 bg-color5 md:w-[200px] md:rounded md:hover:bg-[red] md:hover:translate-y-1">
              View more
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
      <Footer lightDark={lightDark} toggle={toggle} />
    </>
  );
};

export default AboutUs;
