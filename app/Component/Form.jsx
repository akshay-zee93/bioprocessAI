"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { contactDetails } from "../actions/contactusActions";
import { useRouter } from "next/navigation";
import { demoDetails } from "../actions/demoAction";
import { toast } from "react-hot-toast";

const ContactUs = ({ title, displayAllFields = false }) => {
  const route = useRouter();
  const baseSchema = {
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().optional(),
    company: z.string().min(1, { message: "Company is required" }),
    title: z.string().min(1, { message: "Title is required" }),
  };

  const additionalFields = {
    reason: z.enum(
      ["See Demo", "Careers", "Feedback", "Collaboration", "Other"],
      { message: "Reason for contact is required" }
    ),
    comments: z.string().optional(),
  };

  const schema = z.object(
    displayAllFields ? { ...baseSchema, ...additionalFields } : baseSchema
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    if (displayAllFields) {
      const status = await contactDetails(data);
      if (status === 201) {
        toast.success(
          "Thank you for contacting us. We'll get back to you soon. "
        );
        route.push("/");
      }
    } else {
      const status = await demoDetails(data);
      if (status === 201) {
        toast.success(
          "Thank you for contacting us. We'll get back to you soon. "
        );
        route.push("/");
      }
    }
  };

  return (
    <div className="flex flex-col gap-9  justify-center items-center min-h-screen  w-screen bg-cover  bg-no-repeat bg-top">
      <h1 className=" text-xl lg:text-3xl font-semibold pt-4 text-black mb-4">
        {title}
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" p-6 rounded shadow-xl  w-full max-w-lg space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            className="mt-1 block  w-full p-2 border bg-white text-black  border-gray-300 rounded"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email")}
            className="mt-1   w-full p-2 border bg-white text-black border-gray-300 rounded"
          />
          {errors.email && (
            <span className="text-red-500  text-sm">
              {errors.email.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            {...register("phone")}
            className="mt-1 block w-full p-2 bg-white text-black  border border-gray-300 rounded"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            {...register("company")}
            className="mt-1 block w-full p-2 bg-white text-black  border border-gray-300 rounded"
          />
          {errors.company && (
            <span className="text-red-500  text-sm">
              {errors.company.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            {...register("title")}
            className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded"
          />
          {errors.title && (
            <span className="text-red-500  text-sm">
              {errors.title.message}
            </span>
          )}
        </div>

        {displayAllFields && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reason for Contact
            </label>
            <select
              {...register("reason")}
              className="mt-1 block w-full bg-white text-black  p-2 border border-gray-300 rounded"
            >
              <option value="">Select a reason</option>
              <option value="See Demo">See Demo</option>
              <option value="Careers">Careers</option>
              <option value="Feedback">Feedback</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
            {errors.reason && (
              <span className="text-red-500 text-sm">
                {errors.reason.message}
              </span>
            )}
          </div>
        )}

        {displayAllFields && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Comments/Questions
            </label>
            <textarea
              {...register("comments")}
              className="mt-1 block w-full bg-white text-black p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
        )}

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
