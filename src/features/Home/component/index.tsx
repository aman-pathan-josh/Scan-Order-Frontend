import hero_image from '../../../assets/images/qr_code_hero.png';

const Home = () => {
  // color = #ffd166 yellow
  // color = #4152FF blue
  // color = #003566 dark blue
  // color = #25a244 green
  // color = #850a0a red
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="pt-6 pb-6 sm:pb-6 lg:pt-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">Scan, Order & Enjoy The Future of Contactless Dining!</h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8">No more waiting for menus or servers! Fast, easy, and hassle-free dining at your fingertips! All from your phone. </p>
              </div>

            </div>

            <div>
              <img className="w-full mix-blend-multiply" src={hero_image} alt="Hero Illustration" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
