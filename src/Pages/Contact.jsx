import Navbar from '../Components/Navbar'
import './login.css'
const Contact = () => {
  return (
    <>
      <div className='loginbg p-11 '>
        <div className='bg-[#BCCDE0] ml-20 mr-28 rounded pt-1 -mt-5  '>
          <Navbar />
          <div className='flex flex-col md:flex-row bg-background p-6 rounded-lg shadow-lg'>
            <div className='md:w-1/2 p-4'>
              <h2 className='text-2xl font-bold text-[32px] mt-44'>
                Contact us
              </h2>
              <p className='text-muted-foreground mt-2'>
                s simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <div className='mt-4'>
                <p className='flex items-center'>
                  <span className='material-icons'>email</span>{' '}
                  kashifhurmat893@gmail.com
                </p>
                <p className='flex items-center'>
                  <span className='material-icons'>phone</span> +92 302 5058 413
                </p>
              </div>
            </div>
            <div className='bg-[#e7e4e4] ml-10  rounded pt-4  mt-5 '>
              <div className='md:w-1/2 p-4 ml-10'>
                <h2 className='text-2xl font-bold'>
                  We love to hear from you! Lets get in touch
                </h2>
                <form className='mt-4'>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium' htmlFor='name'>
                      Name
                    </label>
                    <input
                      className='mt-1 p-2 border border-red-500 rounded  w-96'
                      type='text'
                      id='name'
                      placeholder='Your Name'
                      required
                    />
                  </div>
                  <div className='mb-4'></div>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium' htmlFor='user'>
                      User
                    </label>
                    <input
                      className='mt-1 p-2 border border-red-500 rounded w-96'
                      type='text'
                      id='user'
                      placeholder='Your Username'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      className='block text-sm font-medium'
                      htmlFor='phone'
                    >
                      Phone number
                    </label>
                    <input
                      className='mt-1 p-2 border border-red-500 rounded w-96 '
                      type='tel'
                      id='phone'
                      placeholder='Your Phone Number'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      className='block text-sm font-medium'
                      htmlFor='password'
                    >
                      Password
                    </label>
                    <input
                      className='mt-1 p-2 border border-red-500 rounded  w-96'
                      type='password'
                      id='password'
                      placeholder='Your Password'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      className='block text-sm font-medium'
                      htmlFor='message'
                    >
                      Type text
                    </label>
                    <textarea
                      className='mt-1 p-2 border border-red-500 rounded w-96 '
                      id='message'
                      rows='4'
                      placeholder='Type here'
                      required
                    ></textarea>
                  </div>
                  <button
                    className='text-white text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg  border border-red-500 bg-[#EC3D2F] '
                    type='submit'
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
