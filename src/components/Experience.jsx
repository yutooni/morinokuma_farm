const Experience = () => {
  const features = [
    {
      title: '芳醇な香り',
      description: 'まりひめ特有の甘く豊かな香りが口いっぱいに広がります。',
      icon: '🌸',
    },
    {
      title: '濃厚な甘み',
      description: '糖度が高く、濃厚でまろやかな甘さが特徴です。',
      icon: '🍯',
    },
    {
      title: '美しい色艶',
      description: '鮮やかな紅色と艶やかな見た目が食欲をそそります。',
      icon: '✨',
    },
    {
      title: '適度な酸味',
      description: '甘さだけでなく、爽やかな酸味とのバランスが絶妙です。',
      icon: '🎯',
    },
  ];

  return (
    <section id="marihime" className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-strawberry-600 mb-6">
            まりひめについて
          </h2>
          <div className="h-1 w-20 bg-strawberry-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            奈良県オリジナル品種「まりひめ」
          </p>
        </div>

        {/* まりひめの説明 */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24 max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl order-2 md:order-1 group">
            <img
              src="/images/strawberry-basket.webp"
              alt="まりひめ"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-8">
              奈良県が誇るプレミアムいちご
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              「まりひめ」は、奈良県農業研究開発センターで開発された奈良県オリジナルのいちご品種です。
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              「章姫」と「さちのか」を交配して誕生したこの品種は、芳醇な香りと濃厚な甘み、そして美しい色艶が特徴です。
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              森のくま農園では、丁寧な栽培管理により、まりひめ本来の美味しさを最大限に引き出しています。
            </p>
          </div>
        </div>

        {/* まりひめの特徴 */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-16">
            まりひめの特徴
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2 border-2 border-strawberry-200"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 栽培へのこだわり */}
        <div className="bg-white p-12 md:p-16 rounded-3xl shadow-xl max-w-6xl mx-auto border-2 border-gray-200">
          <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center">
            栽培へのこだわり
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="text-5xl mb-6">🌱</div>
              <h4 className="font-bold text-gray-800 mb-3 text-xl">減農薬栽培</h4>
              <p className="text-gray-600 leading-relaxed">
                安全・安心を第一に、農薬使用を最小限に抑えています
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-6">💧</div>
              <h4 className="font-bold text-gray-800 mb-3 text-xl">水分管理</h4>
              <p className="text-gray-600 leading-relaxed">
                最適な水分量で、甘みと食感のバランスを調整
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-6">🌡️</div>
              <h4 className="font-bold text-gray-800 mb-3 text-xl">温度管理</h4>
              <p className="text-gray-600 leading-relaxed">
                ハウス内の温度を細かく調整し、最良の環境を維持
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
