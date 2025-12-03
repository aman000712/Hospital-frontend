import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { LuDot } from "react-icons/lu";
import staff1 from '../../../assets/photos/staff1.jpg';
import checkup from '../../../assets/photos/checkup.jpg'
import food from '../../../assets/photos/food.jpg';
import heart from '../../../assets/photos/heart.jpg';
import health from '../../../assets/photos/health.jpg';
import { FaSearch } from "react-icons/fa";

const blogs = [
    {
        id: 1,
        title: '5 Tips for a Healthy Heart',
        author: 'Dr. Ramesh Shahi',
        date: 'March 10, 2025',
        image: heart,
        desc: 'Discover essential tips to keep your heart healthy and strong. A simple change in lifestyle can make a big difference.',
        read: 'Read more'
    },
    {
        id: 2,
        title: 'Benefits of Regular Health Checkup',
        author: 'Dr. Harry Thapa',
        date: 'April 5, 2025',
        image: checkup,
        desc: 'Regular health checkups help in early detection and prevention of major diseases. Learn why consistency matters.',
        read: 'Read more'
    },
    {
        id: 3,
        title: 'The Importance of Mental Health',
        author: 'Dr. Emily Pun',
        date: 'May 2, 2025',
        image: health,
        desc: 'Mental health is as important as physical health. Here are some ways to maintain your emotional well-being.',
        read: 'Read more'
    },
    {
        id: 4,
        title: 'Healthy Diet for Busy Professionals',
        author: 'Dr. Sarah Ali',
        date: 'June 12, 2025',
        image: food,
        desc: 'A nutritious diet is key to a productive day. Learn how to plan balanced meals even with a tight schedule.',
        read: 'Read more'
    },
];
export default function LatestBlog() {    
    return (
        <div className="min-h-screen bg-gray-100 pt-16 py-12 px-6 lg:px-20">
            <h1 className="text-4xl font-bold text-center mb-10 text-[#017593]">
                Latest Blogs </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-full h-56 overflow-hidden rounded-t-lg">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4 ">
                                <div className="flex items-center text-gray-500 text-sm mb-2 leading-tight">
                                    <span>{blog.author}</span>
                                    <span className="mx-2 flex items-center "><LuDot size={20} /></span>
                                    <span>{blog.date}</span>
                                </div>

                                <h2 className="text-lg font-semibold text-gray-800 mb-2 hover:text-amber-600 cursor-pointer">
                                    {blog.title}
                                </h2>
                                <p className="text-gray-600 text-sm">{blog.desc}</p>
                                <button className="text-amber-600 text-sm mt-2 hover:underline">{blog.read}</button>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="flex flex-col space-y-8">
                    <div className="bg-brown-100 p-6 rounded-lg shadow-md">
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Type a keyword and hit enter"
                                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
                            />
                        </div>
                    </div>

                    <div className="relative bg-white border border-gray-300 rounded-lg shadow-md pt-6 pb-8 px-8 flex flex-col items-center text-center">
                        <div className="flex justify-center w-full">
                            <Image
                                src={staff1}
                                alt="Author"
                                width={80}
                                height={80}
                                className="rounded-full border-0 border-white object-cover bg-white shadow-md"
                            />
                        </div>

                        <h3 className="text-xl font-semibold text-gray-800 mt-3">Dr. Emily Pun</h3>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Pediatrician & Health Blogger at CareWell Hospital. Passionate about
                            spreading awareness on preventive healthcare and holistic living.
                        </p>

                        <button className="bg-[#017593] text-white px-5 py-2 rounded-md hover:bg-amber-700 transition duration-300">
                            Read my bio
                        </button>

                        <div className="flex justify-center space-x-4 mt-6 text-gray-600">
                            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
                            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                            <FaYoutube className="hover:text-red-600 cursor-pointer" />
                        </div>
                    </div>



                </div>

            </div>
        </div>


    );
};

