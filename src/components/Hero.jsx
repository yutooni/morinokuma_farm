const Hero = () => {
  const imagePath = (path) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <section className="relative min-h-screen pt-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={imagePath('images/strawberry-basket.webp')}
          alt="新鮮ないちご"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-strawberry-600 mb-6">
              森のくま農園
            </h1>
            <div className="h-1 w-24 bg-strawberry-400 mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-gray-800 mb-3 font-bold">
              奈良県産「まりひめ」
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10">
              完熟いちごの甘さと香りをお届けします
            </p>
            <a
              href="#products"
              className="inline-block bg-strawberry-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-strawberry-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              商品を見る
            </a>
          </div>
        </div>
      </div>
      {/* スクロール矢印 */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
