import headphone from '../assets/capture.jpg'

const Header = () => {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
            <img
              alt='feature'
              className='object-cover object-center h-full w-full'
              src={headphone}
            />
          </div>
          <div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center '>
            <div className='flex flex-col mb-10 lg:items-start items-center'></div>
            <div className='flex flex-col mb-10 lg:items-start items-center'>
              <div className='flex-grow ml-10'>
                <h2 className='text-[#EC3D2F] text-lg title-font font-medium mb-3 '>
                  In the spotlight
                </h2>
                <p className='leading-relaxed font-bold text-[24px] text-[#000000]'>
                  Your sound best
                  <br />
                  for your life
                </p>
                <p className='mt-3 mr-32 items-center'>
                  These have large ear cups that encompass the ears, providing
                  good sound isolation and often better sound quality.
                </p>
              </div>
              <div className='border ml-10  bg-[#EC3D2F] rounded mt-9 p-2 pt-0 cursor-pointer'>
                <a className='mt-2 text-[#FFFFFF] inline-flex items-center '>
                  Shop Now
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr></hr>
    </>
  )
}

export default Header
