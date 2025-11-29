const About = () => {
  const features = [
    {
      icon: '🍓',
      title: '完熟いちご',
      description: '樹上で完熟させた、糖度の高い甘いいちごをお楽しみいただけます。',
    },
    {
      icon: '🌱',
      title: '減農薬栽培',
      description: '安全・安心を第一に考え、農薬の使用を最小限に抑えた栽培を行っています。',
    },
    {
      icon: '🏡',
      title: 'こだわりの管理',
      description: '一つ一つの株を丁寧に管理し、最高品質のいちごをお届けします。',
    },
    {
      icon: '❤️',
      title: '愛情込めて',
      description: 'いちごへの愛情と情熱を持って、日々大切に育てています。',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* 背景のくまキャラクター */}
      <div className="absolute top-20 right-10 pointer-events-none hidden lg:block">
        <img
          src="/images/logo.webp"
          alt=""
          className="w-48 h-auto transform rotate-12"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-strawberry-600 mb-6">
            農園について
          </h2>
          <div className="h-1 w-20 bg-strawberry-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            森のくま農園では、品質にこだわった完熟いちごを提供しています
          </p>
        </div>

        {/* 特徴グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-red-50 border-2 border-strawberry-200 hover:border-strawberry-400 hover:-translate-y-2"
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* メイン説明 */}
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-strawberry-200 to-red-300 flex items-center justify-center">
              <span className="text-9xl">🍓</span>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-8">
              こだわりの栽培方法
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              森のくま農園では、お客様に安全で美味しいいちごを提供するため、減農薬栽培にこだわっています。
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              一つ一つの株を丁寧に管理し、最適な環境で育てることで、糖度の高い完熟いちごを実現しています。
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              まりひめは奈良県が誇るプレミアムいちご。その美味しさを最大限に引き出すため、日々研究を重ねています。
            </p>
            <a
              href="#marihime"
              className="inline-block bg-strawberry-600 text-white px-10 py-4 rounded-full hover:bg-strawberry-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-bold"
            >
              まりひめについて詳しく見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
