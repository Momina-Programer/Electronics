// import youtube from '../assets/youtube (1).png'
// import twitter from '../assets/twitter.jpg'
// import facebook from '../assets/facebook (2).jpg'
// import linkedin from '../assets/linkedin.jpg'

const Footer = () => {
    return (
        <>
        <div className="bg-[#BCCDE0] p-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold text-[32px]">Your Gateway to Success Start</h2>
    <p className="mt-6">Here!</p>
    <a href="mailto:hello@helloflow.com" className="flex items-center mt-2 text-primary">
      <span className="bg-accent text-accent-foreground rounded-full p-1 mr-2">➡️</span>
      hello@helloflow.com
    </a>
  
  </div>

  <div className="mt-8 border-t border-border pt-4">
    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div>
        <h3 className="text-[20px] font-bold">Pages</h3>
        <ul className="mt-2 space-y-1">
          <li><a href="#" className="text-muted-foreground hover:text-muted">Demo (Sales)</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Home</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Services</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">About</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Blog</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Work</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Shop</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-[20px] font-bold">Other</h3>
        <ul className="mt-2 space-y-1">
          <li><a href="#" className="text-muted-foreground hover:text-muted">404</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Password</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Checkout</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Blog Details</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Work Details</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Shop Details</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-[20px] font-bold">Utility</h3>
        <ul className="mt-2 space-y-1">
          <li><a href="#" className="text-muted-foreground hover:text-muted">Style Guide</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Licencing</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Change log</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Instructions</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-[20px] font-bold">Help</h3>
        <ul className="mt-2 space-y-1">
          <li><a href="#" className="text-muted-foreground hover:text-muted">All Templates</a></li>
          <li><a href="#" className="text-muted-foreground hover:text-muted">Supports</a></li>
        </ul>
      </div>
    </div>
  </div>
<hr className="mt-8" />
  <div className="mt-4 flex space-x-4">
      <a href="#" className="text-muted-foreground hover:text-muted"><img src={'../assets/youtube (1).jpg'} alt="" /></a>
      <a href="#" className="text-muted-foreground hover:text-muted"><img src={'../assets/linkedin.jpg'} alt="" /></a>
      <a href="#" className="text-muted-foreground hover:text-muted"><img src={'../assets/twitter.jpg'} alt="" /></a>
      <a href="#" className="text-muted-foreground hover:text-muted"><img src={'../assets/facebook (2).jpg'} alt="" /></a>
    </div>

  <div className="mt-8 text-center text-muted-foreground">
    <p>© 2024-Powered by Webflow With <a href="#" className="text-primary hover:text-primary/80">Buy this template for $69 USD</a></p>
  </div>

  <div className="mt-4  text-[16px]">
  <b>   <p>Your logo</p>  </b>
  </div>
</div>
        </>
    )
}

export default Footer