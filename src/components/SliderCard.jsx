import React from 'react'


const SliderCard = ({card}) => {

  return (
    <>
    <div className='md:h-[450px] md:w-[350px] h-[350px] w-[250px] '>
        <p className='text-white text-center text-[18px]'>{card.title}</p>
       <div
      key={card.id}
      className="group relative md:h-[450px] rounded-3xl md:w-[350px] h-[350px] w-[250px] cursor-pointer overflow-hidden bg-neutral-200"
    >
      <div
        style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      >

      </div>
    
    </div> 
    </div>
    </>
  )
}

export default SliderCard