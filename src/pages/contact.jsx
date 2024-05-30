import { FaLocationPin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa6";
import { information } from "../assets/data";
import { useForm } from "react-hook-form";

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
  const onSubmit = (data) => {
    console.log(data);
    setValue("Name", "");
    setValue("Email", "");
    setValue("Subject", "");
    setValue("Message", "");
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
            onSubmit={handleSubmit(onSubmit)}
            // onSuccess={() => {
            //   alert("Your application is updated.");
            // }}
            // onError={() => {
            //   alert("Submission has failed.");
            // }}
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  // type="text"
                  // name="name"
                  // id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  {...register("Name", {
                    required: "Name is reqired!",
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
                  // type="email"
                  // name="email"
                  // id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  {...register("Email", {
                    required: "Email is reqired!",
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
                // type="text"
                // name="subject"
                // id="subject"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                {...register("Subject", {
                  required: "Subject is reqired!",
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
                // type="text"
                // name="message"
                // id="message"
                rows={8}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                {...register("Message", {
                  required: "Message is reqired!",
                  minLength: {
                    value: 10,
                    message: "Message is too short!",
                  },
                  maxLength: {
                    value: 300,
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
            <br />
            <button
              type="submit"
              className="flex m-auto rounded-full px-5 py-2 bg-primary hover:bg-white text-black"
            >
              Send Message
            </button>
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
                    <a href="mailto:tirthp.1128@icloud.com">{item?.email}</a>
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
            <a href="https://github.com/hellaanxiouss" target="_black">
              <IoLogoGithub className="size-5 hover:text-primary transition-all" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/n/tirthdhedhi/" target="_black">
              <IoLogoLinkedin className="size-5 hover:text-primary transition-all" />
            </a>
          </li>
          <li>
            <a
              href="https://discordapp.com/users/879740872051290232"
              target="_black"
            >
              <FaDiscord className="size-5 hover:text-primary transition-all" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tirrrthhh/" target="_black">
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
