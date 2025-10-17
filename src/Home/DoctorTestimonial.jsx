import Image from 'next/image';
import img1 from '../assets/photos/img1.jpg';
import img2 from '../assets/photos/img2.jpg';
import img3 from '../assets/photos/img3.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function DoctorTestimonial(){
  const test = [
    {
      title: "Testimonials",
      desc: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
      img: img1,
      name: "John Smith"
    },
    {
      title: "Testimonials",
      desc: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
      img: img2,
      name: "Christine Aguilar"
    },
    {
      title: "Testimonials",
      desc: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
      img: img3,
      name: "Robert Spears"
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='bg-pink-50 h-[450px] w-full pt-8'>
      <div className='w-11/12 mx-auto  p-8 rounded-lg'>
        <Carousel
          arrows={false}
          showDots={true}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          draggable
          swipeable
          responsive={responsive}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style "
          itemClass="carousel-item-padding-40-px"
          className='pb-12 '
        >
          {test.map((val, i) => (
            <div key={i} className='flex flex-col text-center px-6 mx-auto'>
              <div className='text-4xl pb-6'>{val.title}</div>
              <div className='  text-2xl w-9/12 h-fit mx-auto pb-8 font-thin tracking-wider italic text-[#647364]'>
                <span className=' '>{val.desc}</span>
              </div>
              <div className='flex items-center justify-center gap-4'>
                <Image src={val.img} alt='person' className='w-20 h-20 rounded-full object-cover ' />
                <span className='text-lg font-thin'>{val.name}</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};


