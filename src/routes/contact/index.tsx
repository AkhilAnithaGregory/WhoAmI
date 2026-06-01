import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import CardDesign from "@/components/ui/cardDesign";
import { useForm } from "react-hook-form";
import emailService from "@/lib/api";
import reindeer from "../../../public/json/reindeer.json";
import Lottie from "lottie-react";

export const Route = createFileRoute("/contact/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const dataResponse = (await emailService(data)) as { status: number };
    if (dataResponse.status === 200) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      setIsLoading(false);
      reset();
    }
  };

  return (
    <CardDesign
      content={
        <section id="contact" className=" items-center gap-x-4 rounded-2xl">
          <h1 className="bg-linear-to-r text-center pb-4 from-white via-blue-400 to-purple-500 bg-clip-text font-black tracking-tight text-transparent text-3xl lg:text-6xl">
            Contact Me
          </h1>
          <div id="contact" className="p-4">
            <div className="text-center text-xl xl:text-4xl text-black dark:text-white">
              Whatever you thinking right now just shoot!
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:px-20 py-10 gap-y-5 sm:gap-y-7 gap-x-5">
                <div>
                  <h4 className="text-black dark:text-white">Name</h4>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="bg-transparent  focus:outline-none border rounded-lg p-2 w-full text-black dark:text-white transform-all duration-500"
                  />
                  {errors.name && (
                    <p className="m-2 text-red-600" role="alert">
                      Enter Name
                    </p>
                  )}
                </div>
                <div>
                  <h4 className="text-black dark:text-white">Email</h4>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="bg-transparent focus:outline-none border rounded-lg p-2 w-full text-black dark:text-white  transform-all duration-500"
                  />
                  {errors.email && (
                    <p className="m-2 text-red-600" role="alert">
                      Please enter Email
                    </p>
                  )}
                </div>
                <div>
                  <h4 className="text-black dark:text-white">Subject</h4>
                  <select
                    {...register("subject", { required: true })}
                    className="bg-transparent  focus:outline-none border rounded-lg p-2 w-full text-black dark:text-white  transform-all duration-500"
                  >
                    <option
                      value="Freelance Work Enquiry"
                      className="text-black"
                    >
                      Freelance Work Enquiry
                    </option>
                    <option value="Support From My Side" className="text-black">
                      Support From My Side
                    </option>
                    <option value="Just for Fun :)" className="text-black">
                      Just for Fun :)
                    </option>
                  </select>
                  {errors.subject && (
                    <p className="m-2 text-red-600" role="alert">
                      Please Choose Subject
                    </p>
                  )}
                </div>
                <div>
                  <h4 className="text-black dark:text-white">Number</h4>
                  <input
                    {...register("number", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    type="text"
                    className="bg-transparent  focus:outline-none border rounded-lg p-2 w-full text-black dark:text-white transform-all duration-500"
                  />
                  {errors.number && (
                    <p className="m-2 text-red-600">
                      Please enter a valid phone number
                    </p>
                  )}
                </div>
                <div className="col-span-1 md:col-span-2">
                  <h4 className="text-black dark:text-white">Message</h4>
                  <textarea
                    rows={5}
                    {...register("message", {
                      required: "Enter your enquiry",
                    })}
                    className="bg-transparent  focus:outline-none border rounded-lg p-2 w-full text-black dark:text-white transform-all duration-500"
                  />
                </div>
              </div>
              <button
                disabled={true}
                type="submit"
                className="bg-blue-600 px-10 py-2 rounded-lg m-auto flex justify-center text-white"
              >
                {/* {isLoading ? "It take some time..." : "Submit"} */}
                {isLoading
                  ? "Currently backend work ongoing..."
                  : "Cannot send at this time..."}
              </button>
            </form>
            {/* <div className="mt-2">
                  {showAlert && (
                    <Alert severity="success">
                      Message sent succefully, Feel free to message any time!
                    </Alert>
                  )}
                </div> */}
          </div>
          <div className="absolute bottom-0 -left-5 sm:left-0 w-32">
            <Lottie animationData={reindeer} />
          </div>
        </section>
      }
    />
  );
}
