import { Link } from "@tanstack/react-router";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { ModeToggle } from "../ui/toggleMode";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMdCopy } from "react-icons/io";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleCopy = (textToCopy: string) => {
    copy(textToCopy);
    alert("Copied to clipboard!");
  };
  return (
    <>
      <div className="mx-2 sm:mx-0 space-y-5 my-5 bg-white dark:bg-[#272730] rounded-xl flex justify-between items-center text-black dark:text-white p-0 border border-[#4a5349]">
        <button
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
          onClick={toggleDrawer}
          className="bg-[#e5e7eb] dark:bg-[#32323b] p-6 rounded-l-xl h-full m-0 hover:cursor-pointer "
        >
          <RxHamburgerMenu size={20} className="dark:text-white text-black" />
        </button>
        <Link to="/" className="m-0 flex justify-center items-center gap-x-2">
          <img
            src="/images/dev.svg"
            alt="dev_logo"
            className="hidden min-[420px]:block"
          />
          <span className="text-sm min-[420px]:text-lg">
            Akhil Anitha Gregory
          </span>
        </Link>
        <ul className="hidden md:flex space-x-6 m-0">
          {/* <li>Blog</li> */}
          {/* <li>Gallery</li> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Works</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
        <ul className="hidden lg:flex space-x-4 m-0">
          <a
            href="https://www.linkedin.com/in/akhil-anitha-gregory-35a75a181"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/AkhilAnithaGregory"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </ul>
        <div className="bg-[#e5e7eb] dark:bg-[#32323b] p-4 rounded-r-xl h-full m-0 hover:cursor-pointer hover:bg-[#e5e7eb]">
          <ModeToggle />
        </div>
      </div>
      <div
        id="drawer-example"
        className={`fixed top-0 left-0 z-50 bg-white dark:bg-black h-screen p-4 overflow-y-auto transition-transform -translate-x-full animate-all duration-1000 w-full sm:w-1/2 border-e border-default ${isDrawerOpen ? "translate-x-0" : ""}`}
        aria-labelledby="drawer-label"
      >
        <div className="border-b border-default pb-4 mb-5 flex items-center">
          <h5
            id="drawer-label"
            className="inline-flex items-center text-lg font-medium text-body"
          >
            Get in touch
          </h5>
          <button
            type="button"
            onClick={toggleDrawer}
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center"
          >
            <IoClose size={18} color="#a8ff53" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <p className="mb-3 text-sm text-body">
          I'm always excited to take on new projects and collaborate with
          innovative minds.
        </p>
        <ul className="mb-5 text-sm text-body space-y-6 mt-4">
          <li className="block md:hidden">
            <h2 className="text-xl">Links</h2>
            <div className="flex justify-between mt-4">
              <Link to="/">Home</Link> <Link to="/work">Works</Link>{" "}
              <Link to="/contact">Contact Me</Link>
            </div>
          </li>
          <li>
            <h4 className="text-gray-400">Email</h4>
            <label
              className="flex items-center"
              onClick={() => handleCopy("akhilanithagregory@gmail.com")}
            >
              akhilanithagregory@gmail.com <IoMdCopy />
            </label>
          </li>
          <li>
            <h4 className="text-gray-400">Github</h4>
            <label
              className="flex items-center"
              onClick={() =>
                handleCopy("https://github.com/AkhilAnithaGregory")
              }
            >
              https://github.com/AkhilAnithaGregory <IoMdCopy />
            </label>
          </li>
          <li>
            <h4 className="text-gray-400">LinkedIn</h4>
            <label
              className="flex items-center"
              onClick={() =>
                handleCopy(
                  "https://www.linkedin.com/in/akhil-gregory-35a75a181",
                )
              }
            >
              https://www.linkedin.com/in/akhil-gregory-35a75a181 <IoMdCopy />
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
