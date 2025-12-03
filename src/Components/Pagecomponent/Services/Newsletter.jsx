"use client";
import Image from "next/image";
import healthh from '../../../assets/photos/healthh.jpg';

export default function Newsletter() {
    return (
        <div className="w-full  relative ">
            <div className="relative z-20">
                <div
                    className="
                        bg-white shadow-xl mx-auto max-w-6xl max-h-full
                        flex flex-col md:flex-row p-0 overflow-hidden
                        -mb-24
                    "
                >
                    <div className="flex w-full md:w-full">
                        <div className="w-1/2 h-full">
                            <Image
                                src={healthh}
                                alt="Testimonial"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-1/2 p-8 md:p-10 flex flex-col justify-center">
                            <div className="text-4xl text-amber-500 font-bold"></div>

                            <p className="text-gray-400 mt-4 leading-relaxed text-md">
                                At <span className="font-semibold text-amber-600 text-2xl">Gastro Hospital</span>,
                                we provide world-class digestive care with compassion and advanced
                                medical expertise. Your health, comfort, and recovery are our top priorities.
                            </p>


                            <p className="text-gray-400 mt-4 leading-relaxed text-md">
                                From diagnosis to treatment, we ensure that every patient receives
                                personalized care tailored to their unique health needs. Our team of
                                gastro specialists is dedicated to guiding you through every step of your
                                healing journey.
                            </p>


                            <div className="mt-6 flex flex-col gap-3">
                                <h4 className="text-xl font-bold text-blue-600">
                                    Dr. Anant Sharma
                                </h4>
                                <p className="text-md text-blue-600">Gastroenterologist</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-blue-600 pt-32 pb-14 px-6 md:px-20 relative z-10 h-full">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="md:w-1/2 flex flex-col gap-2.5">
                        <h2 className="text-3xl font-semibold text-white tracking-tight uppercase">
                            Subscribe to our newsletter
                        </h2>

                        <p className="text-sm text-gray-300 mt-2 max-w-xl">
                            Stay updated with the latest health tips, gastro care services,
                            and new treatments from Gastro Hospital.
                        </p>
                    </div>
                    <div className="md:w-1/2 md:h-full flex justify-end">

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                console.log("Submitted");
                            }}
                            className="flex w-full md:w-3/4 overflow-hidden rounded-md bg-white"
                        >
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                required
                                className="px-4 py-3 text-black/70 w-full outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 px-6 text-white font-semibold"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
}
