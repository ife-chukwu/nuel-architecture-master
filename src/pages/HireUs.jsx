import React, { useState, useRef } from "react";
import { BiImage } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import Footer from "./Footer.jsx";
import NavLinks from "./NavLinks.jsx";
import emailjs from "@emailjs/browser";

export const HireUs = ({
  lightDark,
  toggle,
  switchClose,
  showNavbar,
  toggleNavbar,
}) => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef6 = useRef();
  const form = useRef();
  const buttonRef = useRef();

  const [formDisplay, setFormDisplay] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);
  const [fNameAlert, setFNameAlert] = useState("");
  const [lNameAlert, setLNameAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [success, setSuccess] = useState("");
  const [descriptionAlert, setDescriptionAlert] = useState("");
  const [submitButton, setSubmitButton] = useState(false);

  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    description: "",
    files: "",
  });
  const preventDefaultHandler = (e) => {
    e.preventDefault();
    console.log(input);

    emailjs
      .send("service_efi7rl7", "template_tateeav", input, "yKmBkpRKjxZCt_4Qw")
      .then(
        (res) => {
          console.log("Success", res);
        },
        (error) => {
          console.log("Failed", error);
        }
      );

    if (input.fname.trim() === "") {
      setFNameAlert("enter first name");
      inputRef1.current.style.color = "red";
    } else if (input.fname) {
      setFNameAlert("");
    }
    if (input.lname.trim() === "") {
      setLNameAlert("enter last name");
      inputRef2.current.style.color = "red";
    } else {
      setLNameAlert("");
    }
    if (input.email.trim() === "") {
      setEmailAlert("enter email address");
      inputRef3.current.style.color = "red";
    } else {
      setEmailAlert("");
    }

    if (input.description.trim() === "") {
      setDescriptionAlert(
        "we would like you to describe your dream home for us please "
      );
      inputRef4.current.style.color = "red";
    } else if (input.description.length < 20) {
      setDescriptionAlert("we would need you to describe more");
      inputRef4.current.style.color = "red";
    } else {
      setDescriptionAlert("");
    }

    if (input.fname && input.lname && input.email && input.description) {
      setSuccess(" thanks for hiring us");
    } else {
      setSuccess("");
    }
    if (input.description.length < 20) {
      setSuccess("");
    }

    if (input.fname && input.lname && input.email) {
      setDisabledButton(true);
      buttonRef.current.style.backgroundColor = "";
    } else {
      setDisabledButton(false);
      buttonRef.current.style.backgroundColor = "red";
    }
  };

  const sendHandler = () => {
    if (formDisplay) {
      setFormDisplay(false);
    }
  };
  const turnImageDisplayOn = () => {
    if (!formDisplay) {
      setFormDisplay(true);
    }
  };
  const fnameHandler = (e) => {
    e.persist();
    setInput((input) => ({
      ...input,
      fname: e.target.value,
    }));
    if (input.fname.length) {
      setFNameAlert("");
    }
  };
  const lnameHandler = (e) => {
    e.persist();
    setInput((input) => ({
      ...input,
      lname: e.target.value,
    }));
    if (input.lname.length) {
      setLNameAlert("");
    }
  };
  const numberHandler = (e) => {
    e.persist();
    setInput((input) => ({
      ...input,
      number: e.target.value,
    }));
  };
  const emailHandler = (e) => {
    e.persist();
    setInput((input) => ({
      ...input,
      email: e.target.value,
    }));
    if (input.email.length) {
      setEmailAlert("");
    }
  };
  const descriptionHandler = (e) => {
    e.persist();
    setInput((input) => ({
      ...input,
      description: e.target.value,
    }));

    if (input.description.length < 20) {
      setDescriptionAlert("Words should be more than 20 ");
    }

    if (input.fname && input.lname && input.email && input.description) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);
    }

    if (input.description.length < 20) {
      setSuccess("");
    }

    if (input.description) {
      setDescriptionAlert("");
    }
  };

  const imageHandler = (e) => {
    e.persist();
    setInput((input) => ({
      ...input,
      files: e.target.files,
    }));
  };

  return (
    <div>
      <div className="p-6 md:px-28">
        <NavLinks
          lightDark={lightDark}
          showNavbar={showNavbar}
          toggleNavbar={toggleNavbar}
          switchClose={switchClose}
        />
        <div className="flex justify-center items-end gap-2 pt-40">
          <h1 className=" text-[2rem] md:text-[3rem] font-bold text-color5">
            Hire Us
          </h1>
        </div>
        <div className="flex justify-center pt-10 ">
          <div className="min-w-[400px] md:min-w-[700px] lg:min-w-[800px] h-[500px] relative ">
            <img
              src="http://localhost:3000/image12.jpeg"
              alt=""
              className="w-full h-full rounded-sm"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="absolute mt-[-200px] bg-[#333232] p-[30px]  md:p-[40px] lg:p-[60px] rounded-2xl shadow-lg shadow-color3 ">
            <form
              ref={form}
              className=" flex flex-col gap-3 relative"
              onSubmit={preventDefaultHandler}
            >
              <div className="flex justify-center ">
                <p className="text-color1 text-[12px] md:text-md uppercase">
                  {success}
                </p>
              </div>
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className="py-2 text-[13px] md:text-[14px] w-[300px] md:w-[400px] lg:w-[500px] bg-[#f5f0f0] rounded-xl outline-none px-5 text-color2"
                value={input.fname}
                onChange={fnameHandler}
              />
              <p ref={inputRef1} className="text-[12px] md:text-[14px]">
                {fNameAlert}
              </p>
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                className="py-2 text-[13px] md:text-[14px] w-[300px] md:w-[400px] lg:w-[500px]  bg-[#f5f0f0] rounded-xl outline-none text-color2 px-5"
                value={input.lname}
                onChange={lnameHandler}
              />
              <p ref={inputRef2} className="text-[12px] md:text-[14px]">
                {lNameAlert}
              </p>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="py-2 text-[13px] md:text-[14px] w-[300px] md:w-[400px] lg:w-[500px] bg-[#f5f0f0] rounded-xl outline-none text-color2 px-5"
                value={input.email}
                onChange={emailHandler}
              />
              <p ref={inputRef3} className="text-[12px] md:text-[14px]">
                {emailAlert}
              </p>
              <textarea
                name="description"
                id=""
                cols="20"
                rows="5"
                placeholder="How would you describe your project?"
                className="w-[300px] text-[13px] md:text-[14px] md:w-[400px] lg:w-[500px]  bg-[#f5f0f0] text-color2 outline-none pt-3 px-5 rounded-xl relative"
                value={input.description}
                onChange={descriptionHandler}
              ></textarea>
              <div className="w-60 text-[12px] md:text-[14px]">
                <p ref={inputRef4}>{descriptionAlert}</p>
              </div>
              {submitButton && (
                <button
                  ref={buttonRef}
                  disabled={disabledButton}
                  className="bg-[#1b1a1a] py-4 text-color1 font-bold text-lg w-[300px] md:w-[400px] lg:w-[500px] rounded-xl"
                >
                  Hire Us
                </button>
              )}
              <div className="flex items-center justify-between pt-5">
                <div className="flex gap-3 py-2 items-center ">
                  <h1 className="text-color1 text-[12px] md:text-md note-parent  cursor-pointer relative">
                    Reply us from your Gallery
                    <div className="w-[150px] md:w-[200px] hidden note bg-[#222222] p-3 md:p-5 rounded-xl mt-2 absolute">
                      <p className="text-[9px] md:text-[10px]">
                        Click this image icon to show us the kind of house
                        structure you would love from your device gallery
                      </p>
                    </div>
                  </h1>
                  <div className="text-color1 bg-[#1b1a1a] p-1 md:p-2 rounded-full icon">
                    <label htmlFor="img">
                      {" "}
                      <BiImage
                        onClick={turnImageDisplayOn}
                        title=" Click this image icon to show us the kind of house
                        structure you would love from your device gallery"
                        className="text-lg md:text-2xl cursor-pointer scale-100"
                      />{" "}
                    </label>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    id="img"
                    name="files"
                    className="hidden"
                    onChange={imageHandler}
                  />
                </div>
                {!formDisplay && (
                  <div className="">
                    <figure className="w-20 h-20 md:w-[120px] md:h-[120px] parent-text">
                      <img
                        src={input.files[0].name}
                        alt=""
                        className="w-full h-full rounded-full "
                      />
                      <div className="w-[140px] bg-[#474646] p-5 rounded-2xl text hidden">
                        <p className=" text-color1 text-[12px] ">
                          we will take a look at your picture now
                        </p>
                      </div>
                    </figure>
                  </div>
                )}
              </div>
              {formDisplay && (
                <>
                  {input.files && (
                    <div className="w-[361px] md:w-[480px] lg:w-[620px] h-[670px] absolute ml-[-30px] md:ml-[-40px] lg:ml-[-60px] mt-[-40px] lg:mt-[-60px] bg-[#4b4949]  rounded-2xl">
                      <figure className="h-[400px] w-full">
                        <img
                          src={input.files[0].name}
                          alt=""
                          className="w-full h-full relative rounded-t-2xl"
                        />
                        <div className=" flex justify-end ">
                          <GiCancel
                            className="absolute mt-[-390px] mr-5 text-2xl text-[#cfcaca]"
                            onClick={sendHandler}
                          />
                        </div>
                        <div className="flex justify-center items-end mt-[-10px] ">
                          <button
                            onClick={sendHandler}
                            className="font-bold text-xl absolute bg-[#ee9e0a] p-3 rounded-full text-[#7e571d] shadow-[black] shadow-md"
                            title="Click here to send"
                          >
                            <MdSend className="relative text-2xl" />
                            <p className="text-[10px] absolute mt-[-13px]  text-[#7e571d]">
                              send
                            </p>
                          </button>
                        </div>
                      </figure>
                      <label
                        htmlFor="img"
                        className="flex justify-end items-center pt-5 pr-5"
                      >
                        {" "}
                        <div className=" flex flex-col parent-change">
                          <BiImage className=" text-3xl md:text-2xl cursor-pointer relative text-[#e9e7e7] bg-[#5f5c5c] h-10 w-20 rounded-full " />
                          <p className="hidden change text-color1  text-[12px] bg-[#252222] p-2 rounded-2xl absolute mt-11">
                            Change Image
                          </p>
                        </div>
                      </label>

                      <div className="flex justify-center mt-10">
                        <input
                          ref={inputRef6}
                          type="number"
                          name="number"
                          placeholder="+2349045675809"
                          className="outline-none px-10 lg:px-40 text-[#c2bfbf] transparent border-[#706f6f] w-[300px] md:w-[420px] h-[100px] lg:w-[540px] border rounded-[100px]"
                          value={input.number}
                          onChange={numberHandler}
                        />
                      </div>
                      <div className="flex justify-center">
                        <p className="text-[12px] text-color1 mt-4  md:text-[14px">
                          Phone Number
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="relative top-[500px]">
        <Footer lightDark={lightDark} toggle={toggle} />
      </div>
    </div>
  );
};
