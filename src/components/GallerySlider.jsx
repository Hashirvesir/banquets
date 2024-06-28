import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

const GallerySlider = () => {
    const images = [
        {id:1,url:"/slider1.png",name:"Blissful Haven Events"},
        {id:2,url:"/slider2.png",name:"Radiant Union Halls"},
        {id:3,url:"/slider3.png",name:"Elegance Banquets"},
        {id:4,url:"/slider4.png",name:"Grand Harmony Estates"},
        {id:5,url:"/slider3.png",name:"Majestic Love Pavilion"},
        {id:6,url:"/slider4.png",name:"Radiant Union Halls"},
        {id:7,url:"/slider5.png",name:"Elegance Banquets"}
      ]
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 2,
        },
    };
    return (
        <div className="">
           
            <Carousel
                responsive={responsive}
                containerClass=""
                itemClass="px-[10px] flex"
            >
                {images.map((e,index)=>{
                    return(
                        <div key={index} className='w-[380px] h-[180px] rounded-xl '>
                        <Image src={e.url} className="w-full h-full" width={280} height={180} alt={e.name}/>
                    </div>
                    )
                })

                }
          
            </Carousel>
        </div>
    );
  
}

export default GallerySlider