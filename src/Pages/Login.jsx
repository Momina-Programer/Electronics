import Navbar from '../Components/Navbar'
import img1 from '../assets/multiproducts.jpg'
import './login.css'
import google from '../assets/google.jpg'
import facebook from '../assets/facebook.jpg'

const Login = () => {
  return (
    <>
      <div className='loginbg p-11 '>
        <div className='p-6 pt-10 bg-white rounded '> 

     
        <Navbar />
        <div className='flex flex-col md:flex-row items-center justify-between p-6 bg-background'>
          <div className='w-full md:w-1/2'>
            <b>
              <h2 className='text-lg font-semibold mb-2 md:ml-20 text-[#EC3D2F] text-[32px] '>
                Sign in
              </h2>
            </b>

            <form className='space-y-4 md:ml-20 '>
              <input
                type='text'
                placeholder='Username'
                className=' w-72 p-2 border border-border rounded mt-4 border-[#EC3D2F]'
              />
              <br></br>
              <input
                type='password'
                placeholder='Password'
                className=' w-72 p-2 border border-border rounded border-[#EC3D2F]'
              />
              <br></br>
              <a href='#' className='text-muted-foreground text-sm'>
                Forgot password?
              </a>
              <button
                type='submit'
                className='bg-primary text-primary-foreground p-2 rounded bg-[#EC3D2F] w-28 md:ml-16 text-white'
              >
                Login
              </button>
            </form>
            <div className='flex items-center justify-center mt-7'>
              <span className='text-muted-foreground md:-ml-40'>OR</span>
            </div>
            <div className='flex justify-center space-x-4 mt-2 md:-ml-40'>
              <img
                src={google}
                alt=''
                className='cursor-pointer'
                width={'30px'}
              />
              <img src={facebook} alt='' className='cursor-pointer' />
            </div>
          </div>
          <div className='hidden md:block w-1/2'>
            <img
              src={img1}
              alt='Electronics'
              width={'900px'}
              className='-ml-28'
            />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Login
