import Image from "next/image";
import staff1 from '../../../assets/photos/staff1.jpg';
import client from '../../../assets/photos/client.jpg';

export default function Clientreviews() {
  return (
    <div className="w-full bg-white ">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2">

        <div className="relative h-[400px] md:h-[450px] w-full">
          <Image
            src={client}
            alt="doctor patient"
            fill
            className="object-cover shadow-md"
          />
        </div>

        <div className="h-[400px] md:h-[450px] bg-[#2855A4] text-white p-8 shadow-lg flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">
            What Our Happy Clients Say About Us
          </h2>

          <p className="flex text-base leading-relaxed opacity-90 mb-6 justify-center">
            “I had been suffering from persistent stomach pain and digestion issues for months.
            The gastro team here carefully diagnosed my condition and guided me through a
            personalized treatment plan. Within a few weeks, I experienced real relief and
            regained my normal routine. Their care and attention made all the difference.”
          </p>

          <div className="flex items-center gap-4">
            <Image
              src={staff1}
              alt="person"
              className="object-cover rounded-full h-16 w-16"
            />
            <div>
              <p className="text-lg font-semibold">Supriya Rana</p>
              <p className="text-sm opacity-75">cardiologist</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
