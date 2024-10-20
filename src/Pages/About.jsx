import Navbar from '../Components/Navbar'
import image from '../assets/multiproducts.jpg'
import about from '../assets/aboutimg.jpg'
import img1 from '../assets/aboutimg1.jpg'
import img2 from '../assets/aboutimg2.jpeg'
import img3 from '../assets/aboutimg3.jpeg'
import img4 from '../assets/aboutimg4.jpeg'
import Footer from '../Components/Footer'
const About = () => {
  return (
    <>
     
      <Navbar />
     
      <div className='bg-[#BCCDE0] text-center mt-10 pt-4 pb-4'>
        <p>Are you university or school for an online partnership?</p>
      </div>

      <div className='flex flex-col md:flex-row items-center p-6 bg-white dark:bg-card rounded-lg ml-20 '>
        <div className='md:w-1/2'>
          <h1 className='text-2xl font-bold text-primary text-[40px]'>
            Open a Mobile <br /> Accessories Store <br /> Online
          </h1>
          <b>
            {' '}
            <p className=' text-muted-foreground text-[14px] mt-10'>
              Best Tips to Start an Online Business
            </p>{' '}
          </b>
          <button className='mt-10 bg-secondary text-white p-2 rounded-lg bg-[#EC3D2F] '>
            Shop now
          </button>
        </div>
        <div className='md:w-1/2 mt-4 md:mt-0 flex justify-center'>
          <img
            src={image}
            alt='Mobile Accessories'
            className='rounded-lg '
            width={'900px'}
          />
        </div>
      </div>

      <div className='bg-blue-200 p-6 mt-20'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-center'>
          <div>
            <h2 className='text-3xl font-bold'>870</h2>
            <p className='text-lg'>Shops</p>
          </div>
          <div>
            <h2 className='text-3xl font-bold'>20,000+</h2>
            <p className='text-lg'>Users</p>
          </div>
          <div>
            <h2 className='text-3xl font-bold'>260</h2>
            <p className='text-lg'>Subscribes</p>
          </div>
          <div>
            <h2 className='text-3xl font-bold'>73,990</h2>
            <p className='text-lg'>Active</p>
          </div>
        </div>
      </div>

      <div className='bg-[#f5f3ff] pt-5'>
        <div className='flex flex-col text-center w-full mb-20 mt-20 '>
          <h2 className=' tracking-widest font-medium title-font mb-1 text-[#EC3D2F] text-[14px]'>
            Why choose us
          </h2>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-[#000000]'>
            Benifits of online buying <br />
            service with us
          </h1>
        </div>

        <section className='text-[#000000] body-font -mt-10'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-wrap -m-4'>
              <div className='xl:w-1/4 md:w-1/2 p-4'>
                <div className='bg-gray-300 p-6 rounded-lg pt-14'>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                    Choose teaching
                  </h2>
                  <p className='leading-relaxed text-base'>
                    imply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>
              <div className='xl:w-1/4 md:w-1/2 p-4'>
                <div className='bg-gray-300 p-6 rounded-lg pt-14'>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                    24/7 available{' '}
                  </h2>
                  <p className='leading-relaxed text-base'>
                    imply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>
              <div className='xl:w-1/4 md:w-1/2 p-4'>
                <div className='bg-gray-300 p-6 rounded-lg pt-14'>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                    Whiteboard
                  </h2>
                  <p className='leading-relaxed text-base'>
                    imply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>
              <div className='xl:w-1/4 md:w-1/2 p-4'>
                <div className='bg-gray-300 p-6 rounded-lg pt-14'>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                    Afterable price
                  </h2>
                  <p className='leading-relaxed text-base'>
                    imply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='text-gray-600 body-font overflow-hidden'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='lg:w-4/5 mx-auto flex flex-wrap'>
              <img
                alt='ecommerce'
                className='lg:w-1/2 w-24 lg:h-auto -ml-20 object-cover object-center rounded'
                src={about}
              />
              <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                <h2 className='text-sm title-font font-bold text-[#EC3D2F] tracking-widest'>
                  Customer your product us
                </h2>
                <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                  Personilized profeissional online buying on your schedule
                </h1>
                <div className='flex mb-4'></div>
                <p className='leading-relaxed'>
                  s simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>

                <div className='flex'>
                  <button className='flex  text-white bg-[#EC3D2F] border-0 py-2 px-6 focus:outline-none  rounded -ml-1 mt-20'>
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='flex flex-col md:flex-row items-center p-6 bg-background rounded-lg  ml-32'>
          <div className='md:w-1/2'>
            <h2 className='text-lg font-semibold text-primary text-[#EC3D2F]'>
              Customer your product us
            </h2>
            <h1 className='text-2xl font-bold text-primary'>
              Personalized professional <br />
              online buying on your schedule
            </h1>
            <p className='mt-4 text-muted-foreground'>
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className='flex'>
              <button className='flex  text-white bg-[#EC3D2F] border-0 py-2 px-6 focus:outline-none  rounded -ml-1 mt-10'>
                Get started
              </button>
            </div>{' '}
          </div>
          <div className='md:w-1/2 mt-6 md:mt-0'>
            <img
              src={img1}
              alt='Product showcase'
              className='rounded-lg shadow-md ml-48'
            />
          </div>
        </div>
      </div>

      <div className='max-w-2xl mx-auto text-center p-6 mt-16'>
        <h2 className='text-red-500 text-xl font-bold'>Our testimonial</h2>
        <h3 className='text-lg mt-2'>What our users say about us</h3>

        <div className='flex justify-center mt-6 space-x-4'>
          <img className='w-16 h-16 rounded-full' src={img2} alt='User 1' />
          <img
            className='w-16 h-16 rounded-full border-2 border-blue-500'
            src={img3}
            alt='User 2'
          />
          <img className='w-16 h-16 rounded-full' src={img4} alt='User 3' />
        </div>

        <div className='mt-4'>
          <h4 className='font-semibold'>About Monica</h4>
          <p className='text-muted-foreground'>Student at finance</p>
        </div>

        <p className='mt-8'>
          s simply dummy text of the printing and <br /> typesetting industry.
          Lorem Ipsum has been the <br /> industry's standard dummy text ever
          since the <br /> 1500s.
        </p>
      </div>

      <Footer />
    </>
  )
}

export default About
