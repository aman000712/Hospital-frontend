'use client';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Appointmentsection() {

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    department: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    time: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const departments = [
    "Gastroenterology",
    "Liver Disease",
    "Digestive Disorders",
    "Endoscopy",
    "Abdominal Pain",
    "General Checkup",
  ];

  const openingHours = [
    { day: "Monday - Thursday", time: "08:00 - 20:00" },
    { day: "Friday", time: "09:00 - 19:00" },
    { day: "Saturday", time: "09:00 - 18:00" },
    { day: "Sunday", time: "09:00 - 18:00" },
  ];

  return (
    <section className="min-h-screen py-20 px-6 lg:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">
            Make an appointment
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Complete the form and we will send you a confirmation within 24 hours.
          </p>

          <p className="text-blue-500 font-semibold text-sm mb-8 cursor-pointer">
            Or Call Us <span className="underline">+977 9867880012</span>
          </p>

          <h3 className="font-semibold text-xl text-black mb-4">Opening Hours</h3>

          <ul className="space-y-4">
            {openingHours.map((item, index) => (
              <li key={index} className="flex justify-between border-b pb-2 text-gray-700">
                <span className="text-blue-600">{item.day}</span>
                <span className="font-medium text-blue-600">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-8 border-t-8 border-[#73c5d5]">

          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              department: "",
              date: "",
              time: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              alert("Appointment submitted!");
            }}
          >
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Field
                  name="name"
                  placeholder="Full Name*"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
              </div>
              <div>
                <Field
                  name="phone"
                  placeholder="Phone*"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
              </div>
              <div>
                <Field
                  name="email"
                  placeholder="Email*"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
              </div>
              <div>
                <Field
                  as="select"
                  name="department"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white "
                >
                  <option value="">Select Department</option>
                  {departments.map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </Field>
                <ErrorMessage name="department" component="p" className="text-red-500 text-sm" />
              </div>
              <div>
                <Field
                  type="date"
                  name="date"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <ErrorMessage name="date" component="p" className="text-red-500 text-sm" />
              </div>
              <div>
                <Field
                  type="time"
                  name="time"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <ErrorMessage name="time" component="p" className="text-red-500 text-sm" />
              </div>
              <div className="md:col-span-2">
                <Field
                  as="textarea"
                  rows="4"
                  name="message"
                  placeholder="Message*"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
                <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-[#023D47] text-white py-3 rounded-md text-lg font-bold transition-all"
                >
                  Submit Now
                </button>
              </div>

            </Form>
          </Formik>

        </div>
      </div>
    </section>
  );
}
