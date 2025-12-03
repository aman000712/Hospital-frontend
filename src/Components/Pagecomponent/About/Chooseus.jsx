import { IoPhonePortraitOutline, IoPersonOutline } from "react-icons/io5";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";

export default function Chooseus() {
    const data = [
        {
            icon: <IoPhonePortraitOutline />,
            title: "Online Appointments",
            para: "Easily book appointments with our specialists through our user-friendly online system, available 24/7 for your convenience.",
        },
        {
            icon: <IoPersonOutline />,
            title: "All Specialists",
            para: "Our hospital boasts a comprehensive range of specialists across various medical fields, ensuring expert care for all your health needs.",
        },
        {
            icon: <LiaNotesMedicalSolid />,
            title: "Medical Record",
            para: "Securely access and manage your medical records online, allowing for seamless communication with healthcare providers and continuity of care.",
        },
        {
            icon: <BiSupport />,
            title: "24/7 Service",
            para: "Our dedicated team is available around the clock to provide you with emergency care and support whenever you need it.",
        },
    ];

    return (
        <div className="flex flex-col gap-3 max-w-7xl mx-auto px-4 md:px-20 py-14 bg-gray-50">
            <h2 className="md:text-5xl font-bold text-center tracking-tighter text-black/80">
                Why Choose Us
            </h2>
            <p className="text-center text-md text-gray-500 opacity-80 mb-8 w-8/12 mx-auto">
                At our hospital, we are committed to providing exceptional care .
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
                {data.map((val, i) => (
                    <div
                        key={i}
                        className="flex flex-col bg-white items-center text-center shadow-lg p-6 rounded-2xl hover:shadow-[0_6px_20px_-5px_rgba(59,130,246,0.7)] transition-shadow duration-300 cursor-pointer"
                    >
                        <div className="text-4xl text-blue-700 mb-4 bg-blue-200 rounded-full px-4 py-4">
                            {val.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-amber-700 cursor-pointer transform transition-all duration-300">{val.title}</h3>
                        <p className="text-gray-500 text-sm flex  items-center">{val.para}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
