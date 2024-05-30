import React, { useRef, useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa6";
import { information } from "../assets/data";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm({
    defaultValues: { Name: "", Email: "", Subject: "", Message: "" },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = "service_sktnpja";
  const templateId = "template_ivhuzu9";
  const publicKey = "kHqizR9W-if6lgArX";

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Tirth Dhedhi",
    message: message,
  };

  const form = useRef();

  const onSubmit = (data) => {
    console.log(data);
    setValue("Name", "");
    setValue("Email", "");
    setValue("Subject", "");
    setValue("Message", "");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact px-10 pt-10 w-full">
      <div className="mt-6">
        <p className="text-xs text-secondary">Get in touch</p>
        <h1 className="text-3xl font-bold underline decoration-primary underline-offset-8">
          Contact
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="px-6 pt-8 pb-4 text-left w-full md:w-1/2">
          <p className="pb-2 font-bold">Message Me</p>
          <form
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
              sendEmail();
            })}
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  {...register("Name", {
                    required: "Name is required!",
                    minLength: {
                      value: 3,
                      message: "Name is too short!",
                    },
                    maxLength: {
                      value: 50,
                      message: "Name is too Long!",
                    },
                  })}
                />
                {errors.Name && (
                  <p role="alert" className="text-red-400 text-xs">
                    {errors.Name.message}
                  </p>
                )}
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=""
                  {...register("Email", {
                    required: "Email is required!",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address!",
                    },
                    maxLength: {
                      value: 50,
                      message: "Email is too long!",
                    },
                  })}
                />
                {errors.Email && (
                  <p role="alert" className="text-red-400 text-xs">
                    {errors.Email.message}
                  </p>
                )}
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                {...register("Subject", {
                  required: "Subject is required!",
                  minLength: {
                    value: 10,
                    message: "Subject is too short!",
                  },
                  maxLength: {
                    value: 75,
                    message: "Subject is too long!",
                  },
                })}
                aria-invalid={errors.Subject ? true : false}
              />
              {errors.Subject && (
                <p role="alert" className="text-red-400 text-xs">
                  {errors.Subject.message}
                </p>
              )}
              <label
                htmlFor="subject"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={8}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                {...register("Message", {
                  required: "Message is required!",
                  minLength: {
                    value: 10,
                    message: "Message is too short!",
                  },
                  maxLength: {
                    value: 500,
                    message: "Message is too long!",
                  },
                })}
                aria-invalid={errors.Message ? true : false}
              />
              {errors.Message && (
                <p role="alert" className="text-red-400 text-xs">
                  {errors.Message.message}
                </p>
              )}
              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:bg-secondary disabled:bg-gray-500"
                // disabled={loading}
              >
                {/* {loading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"                     cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0116 0H4zm0 2a6 6 0 00-6 6H4zm16-12a8 8 0 01-16 0h2a6 6 0 006-6v2a1 1 0 002 0v-2a1 1 0 00-2 0zM8 6v2h4V6H8zm0 2v2h4V8H8zm-4 3a1 1 0 00-1 1v2a1 1 0 000 2v2a2 2 0 000 2h2a2 2 0 002-2V9a1 1 0 00-1-1H8v-2zm0 3v2h4v-2H8zm10 0v2h4v-2h-4zm0 3a1 1 0 00-1 1v2a1 1 0 000 2v2a2 2 0 000 2h2a2 2 0 002-2V13a1 1 0 00-1-1H18v-2zm0 3v2h4v-2h-4zm0 2v2h4v-2h-4zM8 6v2h4V6H8zm0 2v2h4V8H8zm10 0v2h4V6H18v-2zm0 3a1 1 0 00-1 1v2a1 1 0 000 2v2a2 2 0 000 2h2a2 2 0 002-2V9a1 1 0 00-1-1H18v-2zm0 3v2h4v-2h-4zm0 2v2h4v-2h-4z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )} */}
              </button>
            </div>
          </form>
        </div>
        <div className="px-4 pt-8 pb-4 text-left w-full md:w-1/2">
          <div className="pb-5">
            <p className="font-bold">Contact Information</p>
            <p className="text-tertiary pt-2">
              Open for opportunities, Let's connect and build something awesome
              together!
            </p>
          </div>
          <div className="flex pt-4">
            <div className="flex flex-col justify-center space-y-8 pr-4">
              <div>
                <FaUser className="text-primary size-7" />
              </div>
              <div>
                <FaLocationPin className="text-primary size-7" />
              </div>
              <div>
                <IoMdMail className="text-primary size-7" />
              </div>
            </div>
            <hr />
            {information?.map((item, index) => (
              <div key={index} className="space-y-3 pl-4 border-l">
                <div className="">
                  <p className="font-bold">Name</p>
                  <p className="text-tertiary">
                    {item?.fname} {item?.lname}
                  </p>
                </div>
                <div className="">
                  <p className="font-bold">Loaction</p>
                  <p className="text-tertiary">{item?.loaction}</p>
                </div>
                <div className="">
                  <p className="font-bold">Email</p>
                  <div className="text-primary underline">
                    <a href={`mailto:${item?.email}`}>{item?.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center px-4 py-4 pb-14">
        <ul className="flex items-center  gap-4">
          <div className="flex justify-center h-10">
            <li>____</li>
          </div>
          <li>
            <a
              href="https://github.com/hellaanxiouss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="size-5 hover:text-primary transition-all" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/n/tirthdhedhi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="size-5 hover:text-primary transition-all" />
            </a>
          </li>
          <li>
            <a
              href="https://discordapp.com/users/879740872051290232"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="size-5 hover:text-primary transition-all" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tirrrthhh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram className="size-5 hover:text-primary transition-all" />
            </a>
          </li>
          <div className="flex justify-center h-10">
            <li>____</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Contact;