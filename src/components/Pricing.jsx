const Pricing = () => {
  const products = [
    {
      name: 'デラックスサイズ',
      description: '大粒で食べ応えのある贅沢ないちご',
      features: [
        '粒の大きさ：特大',
        '内容量：約270g（12〜15粒）',
        '糖度：12度以上',
        '贈答用に最適',
      ],
      image: '/images/strawberry-pack.webp',
      recommended: true,
    },
    {
      name: 'レギュラーサイズ',
      description: 'ご家庭用に最適なサイズ',
      features: [
        '粒の大きさ：大〜中',
        '内容量：約270g（15〜20粒）',
        '糖度：11度以上',
        'ご自宅用におすすめ',
      ],
      image: '/images/strawberry-basket.webp',
      recommended: false,
    },
  ];

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* 背景のくまキャラクター */}
      <div className="absolute bottom-32 left-10 pointer-events-none hidden lg:block">
        <img
          src="/images/logo-delivery.webp"
          alt=""
          className="w-64 h-auto"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-strawberry-600 mb-6">
            商品ラインナップ
          </h2>
          <div className="h-1 w-20 bg-strawberry-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            用途に合わせてお選びいただけます
          </p>
        </div>

        {/* 商品カード */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                product.recommended ? 'border-strawberry-400' : 'border-gray-200'
              } hover:-translate-y-2`}
            >
              {product.recommended && (
                <div className="absolute top-6 right-6 bg-strawberry-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  おすすめ
                </div>
              )}

              <div className="h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black text-gray-800 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">{product.description}</p>

                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start"
                    >
                      <span className="text-strawberry-600 mr-3 font-bold text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ご注文方法 */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-12 md:p-16 rounded-3xl shadow-xl max-w-5xl mx-auto border-2 border-gray-200">
          <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center">
            ご注文について
          </h3>
          <div className="space-y-8 text-gray-700 max-w-4xl mx-auto">
            <div className="flex items-start">
              <span className="text-strawberry-600 mr-4 text-3xl flex-shrink-0">📅</span>
              <div>
                <h4 className="font-bold mb-2 text-xl">販売期間</h4>
                <p className="leading-relaxed text-lg">12月上旬〜5月下旬（いちごの生育状況により変動いたします）</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-strawberry-600 mr-4 text-3xl flex-shrink-0">📦</span>
              <div>
                <h4 className="font-bold mb-2 text-xl">配送について</h4>
                <p className="leading-relaxed text-lg">ご注文から2〜3日以内に発送いたします（天候により前後する場合がございます）</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-strawberry-600 mr-4 text-3xl flex-shrink-0">🎁</span>
              <div>
                <h4 className="font-bold mb-2 text-xl">ギフト対応</h4>
                <p className="leading-relaxed text-lg">熨斗・メッセージカードなど、ギフト対応も承っております</p>
              </div>
            </div>
          </div>
        </div>

        {/* 注文ボタン */}
        <div className="text-center mt-16">
          <a
            href="#order"
            className="inline-block bg-strawberry-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-strawberry-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            ご注文フォームへ
          </a>
          <p className="text-gray-600 mt-6 text-base">
            ※ご注文はGoogleフォームより承っております
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
