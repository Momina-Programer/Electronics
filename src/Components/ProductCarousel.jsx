import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const products = [
  {
    id: 1,
    name: 'James smith',
    description: 'Headphones come with a variety of features.',
    price: '49$',
    image:
      'data:image/jpeg;base64,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'
  },
  {
    id: 2,
    name: 'John lara',
    description: 'Headphones come with a variety of features.',
    price: '55$',
    image:
      'data:image/jpeg;base64,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'
  },
  {
    id: 3,
    name: 'Miss zara',
    price: '39$',
    description: 'Headphones come with a variety of features.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AxhJcxGD_rXAjAb3IA5LEgDd6fvnPFROwQ&s'
  },
  {
    id: 4,
    name: 'Miss zara',
    price: '39$',
    description: 'Headphones come with a variety of features.',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone16hero-202409_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1723234230295'
  },
  {
    id: 5,
    name: 'Miss zara',
    price: '39$',
    description: 'Headphones come with a variety of features.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg60rcLhm91t45ourY9qw0PwFJpBfRR24ibw&s'
  },
  {
    id: 6,
    name: 'Miss zara',
    price: '39$',
    description: 'Headphones come with a variety of features.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbT9VQsYgjyF2ga1lUWTXEDckFcDwUoPW-Rw&s'
  },
  {
    id: 7,
    name: 'Miss zara',
    price: '39$',
    description: 'Headphones come with a variety of features.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVztu0_2vSVvMo4v7cdIXFAvZHhWc7y9xAww&s'
  }
]

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='container mx-auto py-8'>
      <h2 className='text-2xl font-bold mb-6'>New arrival</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className='p-4'>
            <div className='bg-white shadow-md  rounded-lg w-'>
              <img
                src={product.image}
                alt={product.name}
                className='  h-40 object-cover mb-4 ml-20 rounded-md'
              />
              <h3 className='text-lg font-semibold ml-5'>{product.name}</h3>
              <p className='ml-5 '> {product.description}</p>
              <p className=' ml-5 text-[#EC3D2F] font-bold '>{product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductCarousel
