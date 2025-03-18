import about_us_left_banner_image from '../../../assets/images/about_us_left_banner.jpg'
const About = () => {
  return (
    <>
      <section className="py-10 sm:py-16 lg:py-24 bg-[#F9FAFB]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
              <img className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg" alt="" />
              <div className="pl-12 pr-6">
                <img className="relative rounded-lg" src={about_us_left_banner_image} alt="" />
              </div>
              <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                  <div className="px-3 py-4 sm:px-5 sm:py-8">
                    <div className="flex items-start">
                      <p className="text-3xl sm:text-4xl">👋</p>
                      <blockquote className="ml-5">
                        <p className="text-sm font-medium text-white sm:text-lg">“Scan&Order transformed our restaurant! Faster service, happier customers, and increased sales. It's a must-have for any restaurant.”</p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="2xl:pl-16">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Revolutionizing Dining, at Scan&Order</h2>
              <p className="text-xl leading-relaxed text-gray-900 mt-9">At Scan&Order, we believe in making dining effortless, efficient, and enjoyable. </p>
              <p className="mt-6 text-xl leading-relaxed text-gray-900">Our mission is to empower restaurants and food businesses with a seamless, QR-based ordering system that enhances customer experience and optimizes restaurant operations.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-[#F9FAFB] sm:py-12 lg:py-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">What is our Mission</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">To redefine the dining experience by making ordering faster, smarter, and completely touch-free.</p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#ffd166] border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 1 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Enhance customer experience</h3>
                <p className="mt-4 text-base text-gray-600">Enhance customer experience by offering a hassle-free digital ordering process.</p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#ffd166] border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 2 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Support restaurants</h3>
                <p className="mt-4 text-base text-gray-600">Support restaurants with a powerful, easy-to-use system that increases efficiency and sales.</p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#ffd166] border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 3 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Promote innovation</h3>
                <p className="mt-4 text-base text-gray-600">Promote innovation in the food service industry with cutting-edge technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default About
