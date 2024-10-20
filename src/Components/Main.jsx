import headphone2 from '../assets/headphone2.jpg'
import iphone from '../assets/phone2.jpg'
import speaker from '../assets/speaker.jpg'
import tablet from '../assets/tablet.jpg'
import laptop from '../assets/laptop.jpg'
import tablet1 from '../assets/smarttablet.jpg'
import LED from '../assets/LED.jpg'
import headphone3 from '../assets/capture.jpg'
import airprods from '../assets/Airpords.jpg'
import phone1 from '../assets/standphone.jpg'
import img1 from '../assets/imag1.jpg'
import camera from '../assets/camera.jpg'
import smarttablet from '../assets/smarttablet.jpg'
import phone7 from '../assets/phone7.jpg'
import airpods from '../assets/img2.jpg'
import watch from '../assets/watch.jpg'
import homeimg from '../assets/homeimge.jpg'
import ProductCarousel from './ProductCarousel'

const Main = () => {
  return (
    <>
      <div className='flex flex-wrap w-full mb-20 flex-col items-center text-center mt-7'>
        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-[#000000]'>
          Pitchfork Kickstarter Taxidermy
        </h1>
      </div>

      <section className='bg-[#BCCDE0] h-auto body-font '>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
            <img
              alt='feature'
              className='object-cover object-center'
              src={headphone2}
              width={'400px'}
            />
          </div>
          <div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center -mt-20 -ml-32'>
            <div className='flex flex-col mb-10 lg:items-start items-center'>
              <div className=' h-12 inline-flex   font-bold  text-[#000000] mb-5 text-[32px]'>
                <h2>Amazing feature</h2>
              </div>
              <div className='flex-grow'>
                <h2 className='text-[#000000]  font-bold text-lg title-font text-[16px]  mb-3'>
                  Touch Controls
                </h2>
                <p className='leading-relaxed w-60 text-base text-[14px]'>
                  Some headphones have touch-sensitive surfaces for controlling
                  playback.
                </p>
              </div>
            </div>
            <div className='flex flex-col mb-10 lg:items-start items-center'>
              <div className='flex-grow'>
                <h2 className='text-[#000000]  font-bold text-lg title-font text-[16px] mb-3'>
                  Sound Quality
                </h2>
                <p className='leading-relaxed w-56 text-base text-[14px]'>
                  This includes considerations like bass response, clarity, and
                  overall audio fidelity.
                </p>
              </div>
            </div>
            <div className='flex flex-col mb-10 lg:items-start items-center'>
              <div className='flex-grow'>
                <h2 className='text-[#000000]  font-bold text-lg title-font text-[16px] mb-3'>
                  Microphone
                </h2>
                <p className='leading-relaxed w-56 text-base text-[14px]'>
                  Built-in microphones enable hands-free calling and voice
                  commands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-10'>
        <h1 className='font-bold text-4xl mb-4'>Category</h1>
        <h1 className='text-3xl'>Can we help you pick a headphone</h1>
      </div>

      <section
        id='Projects'
        className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-24 mt-10 mb-5 '
      >
        <div className='w-56 h-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
          <a href='#'>
            <img
              src={iphone}
              alt='Product'
              className=' object-cover rounded-t-xl justify-center ml-10'
              width={'150px'}
            />
            <div className='px-4 py-3 w-72'>
              <p className='text-lg font-bold text-black  text-center  -ml-11 truncate block capitalize'>
                Iphone
              </p>
            </div>
          </a>
        </div>
        <div className='w-56 h-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
          <a href='#'>
            <img
              src={speaker}
              alt='Product'
              className=' object-cover rounded-t-xl justify-center mt-24 ml-3'
              width={'200px'}
            />
            <div className='px-4 py-3 w-72'>
              <p className='text-lg font-bold text-black  text-center  -ml-14 truncate block capitalize'>
                Speaker
              </p>
            </div>
          </a>
        </div>

        <div className='w-56 h-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
          <a href='#'>
            <img
              src={tablet}
              alt='Product'
              className=' object-cover rounded-t-xl justify-center ml-10'
              width={'150px'}
            />
            <div className='px-4 py-3 w-72'>
              <p className='text-lg font-bold text-black  text-center  -ml-11 truncate block capitalize'>
                Tabelt
              </p>
            </div>
          </a>
        </div>

        <div className='w-56 h-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
          <a href='#'>
            <img
              src={laptop}
              alt='Product'
              className=' object-cover rounded-t-xl justify-center ml-5 mt-24'
              width={'200px'}
            />
            <div className='px-4 py-3 w-72'>
              <p className='text-lg font-bold text-black  text-center  -ml-11 truncate block capitalize'>
                Laptop
              </p>
            </div>
          </a>
        </div>
      </section>

      <ProductCarousel />
      <div className='flex flex-col md:flex-row justify-between p-10 space-y-4 md:space-y-0'>
        <div className='bg-white shadow-lg rounded-lg ml-32  p-4 flex flex-col items-center'>
          <img
            src={camera}
            alt='Camera'
            className=' h-auto rounded-lg mb-4'
            width={'400px'}
          />
          <span className='text-red-500 font-bold'>25% off</span>
          <p className='text-zinc-700 mt-2'>
            Catch hottest Deals in Cameras category
          </p>
          <button className='mt-4 bg-[#EC3D2F]  text-white px-4 py-2 rounded-lg'>
            Shop now →
          </button>
        </div>

        <div className='bg-white shadow-lg rounded-lg mr-32 p-4 flex flex-col items-center'>
          <img
            src={tablet1}
            alt='Tablets and Smartphone'
            className=' h-80 rounded-lg mb-4'
            width={'400px'}
          />
          <span className='text-red-500 font-bold'>25% off</span>
          <p className='text-zinc-700 mt-2'>Tablets smartphone and more</p>
          <p className='text-lg font-bold mt-2'>$799</p>
        </div>
      </div>

      <div className='container mx-auto p-4 mt-9'>
        <h2 className='text-center text-2xl font-bold mb-6'>
          Top rated product
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              className='w-full h-48 object-cover '
              src={LED}
              alt='LED 4k smart TV expo White/Gray/Black'
            />
            <div className='p-4'>
              <h3 className='text-lg font-semibold mt-5 '>
                LED 4k smart TV expo White/Gray/Black
              </h3>
              <p className='text-xl font-bold mt-2 text-[#EC3D2F]'>$499</p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              className='ml-10 h-48 object-cover'
              src={airprods}
              alt='GM-2345 closed back wireless Headphones'
            />
            <div className='p-4'>
              <span className='text-sm text-zinc-500'>Top rated</span>
              <h3 className='text-lg font-semibold mt-1'>
                GM-2345 closed back wireless Headphones
              </h3>
              <p className='text-xl font-bold mt-2 text-[#EC3D2F]'>$99</p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              className=' ml-9 object-cover'
              src={headphone3}
              alt='GM-2345 closed back wireless Headphones'
              width={'200px'}
            />
            <div className='p-4'>
              <span className='text-sm text-zinc-500'>Top rated</span>
              <h3 className='text-lg font-semibold mt-1'>
                GM-2345 closed back wireless Headphones
              </h3>
              <p className='text-xl font-bold mt-2 text-[#EC3D2F]'>$99</p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              className='ml-5 h-48 object-cover'
              src={laptop}
              alt='Laptop 4k smart TV expo White/Gray/Black'
            />
            <div className='p-4'>
              <h3 className='text-lg font-semibold mt-1'>
                Laptop 4k smart TV expo White/Gray/Black
              </h3>
              <p className='text-xl font-bold mt-2 text-[#EC3D2F]'>$599</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              className='ml-10 w-48 h-48 object-cover'
              src={phone1}
              alt='LED 4k smart TV expo White/Gray/Black'
            />
            <div className='p-4'>
              <h3 className='text-lg font-semibold mt-10'>
                Mobile phone accessories
              </h3>
              <p className='text-xl font-bold mt-2 text-[#EC3D2F]'>$199</p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              className='ml-10 h-48 object-cover'
              src={img1}
              alt='GM-2345 closed back wireless Headphones'
            />
            <div className='p-4'>
              <h3 className='text-lg font-semibold mt-5 '>
                Accessories for mobile phone used USB
              </h3>
              <p className='text-xl font-bold mt-2 text-[#EC3D2F]'>$149</p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              className=' ml-9 object-cover'
              src={camera}
              alt='GM-2345 closed back wireless Headphones'
              width={'200px'}
            />
            <div className='p-4'>
              <h3 className='text-lg font-semibold mt-16'>
                GM-2345 clossed back Camera
              </h3>
              <p className='text-xl font-bold mt-2 text-[#EC3D2F]'>$299</p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
              className='ml-20 h-48 object-cover'
              src={smarttablet}
              alt='Laptop 4k smart TV expo White/Gray/Black'
            />
            <div className='p-4'>
              <h3 className='text-lg font-semibold mt-5'>
                Mobile 4k smart TV expo White/Gray/Black
              </h3>
              <p className='text-xl font-bold mt-2 text-[#EC3D2F]'>$399</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-36 text-[32px] font-bold mb-4 ml-7 '>
        <h2>Shopt Product by</h2>
      </div>

      <div className='bg-[#BCCDE0] rounded-lg ml-36 mr-40 '>
        <div className='mt-20 bg-card  max-w-lg mx-auto'>
          <div className='flex flex-col md:flex-row items-center'>
            <img
              src={phone7}
              alt='Product Image'
              className='w-full md:w-1/2 rounded-lg mb-4 md:mb-0'
            />
            <div className='md:ml-4'>
              <b>
                {' '}
                <h3 className='text-2xl font-semibold text-primary'>
                  Defin yoursLf be different
                </h3>{' '}
              </b>
              <p className='text-muted-foreground mb-4'>
                These have large ear cups that encompass the ears, providing
                good sound isolation and often better sound quality.
              </p>
              <a
                href='#'
                className='bg-[#EC3D2F] text-white hover:bg-secondary/80 px-4 py-2 rounded-lg'
              >
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between p-4 space-y-4 md:space-y-0'>
        <div className='bg-blue-200 md:ml-36 rounded-lg p-2 flex flex-col items-center'>
          <img src={airpods} alt='Awesome Airpods' className='mb-4' />
          <span className='text-xl font-bold'>Awesome Airpods</span>
          <span className='text-center text-zinc-700'>
            These have large ear cups that encompass the ears, providing good
            sound.
          </span>
          <button className='mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400'>
            Shop now &rarr;
          </button>
        </div>

        <div className='bg-blue-200 md:mr-20 rounded-lg p-4 flex flex-col items-center'>
          <img src={watch} alt='Smart Watches' className='mb-4 ' />
          <h2 className='text-xl font-bold'>Smart Watches</h2>
          <p className='text-center text-zinc-700'>
            Stay connected with these stylish smart watches.
          </p>
          <button className='mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400'>
            Shop now &rarr;
          </button>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center p-6 bg-background'>
        <div className='md:w-1/2'>
          <h2 className='text-red-500 text-lg font-semibold ml-16'>
            Comment level
          </h2>
          <h1 className='text-3xl font-bold ml-16'>A new style in your Ear</h1>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <img
            src={homeimg}
            alt='Person with headphones'
            className='rounded-lg ml-24'
          />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mt-6 md:grid-cols-4'>
        <div className='bg-[#BCCDE0] text-secondary-foreground p-4 rounded-lg text-center'>
          <h3 className='text-2xl font-bold text-[#EC3D2F]'>4M+</h3>
          <p>User’s</p>
        </div>
        <div className='bg-[#BCCDE0] text-secondary-foreground p-4 rounded-lg text-center'>
          <h3 className='text-2xl font-bold text-[#EC3D2F]'>153k</h3>
          <p>Purchaser</p>
        </div>
        <div className='bg-[#BCCDE0] text-secondary-foreground p-4 rounded-lg text-center'>
          <h3 className='text-2xl font-bold text-[#EC3D2F]'>53k</h3>
          <p>Gallery</p>
        </div>
        <div className='bg-[#BCCDE0] text-secondary-foreground p-4 rounded-lg text-center'>
          <h3 className='text-2xl font-bold text-[#EC3D2F]'>2M+</h3>
          <p>Feedback</p>
        </div>
      </div>
    </>
  )
}

export default Main
