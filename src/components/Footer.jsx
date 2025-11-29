const Footer = () => {
  const currentYear = new Date().getFullYear();
  const imagePath = (path) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* 農園情報 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={imagePath('images/logo-bear.webp')}
                alt="森のくま農園"
                className="h-14 w-14 object-cover rounded-full"
              />
              <h3 className="text-2xl font-bold text-strawberry-300">
                森のくま農園
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              奈良県産「まりひめ」完熟いちごの甘さと香りをお届けします。
            </p>
          </div>

          {/* リンク */}
          <div>
            <h4 className="text-xl font-bold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-strawberry-300 transition-colors"
                >
                  農園紹介
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('marihime').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-strawberry-300 transition-colors"
                >
                  まりひめ
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-strawberry-300 transition-colors"
                >
                  商品
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('access').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-strawberry-300 transition-colors"
                >
                  アクセス
                </button>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-xl font-bold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-gray-300">
              <p>〒000-0000</p>
              <p>○○県○○市○○町1-2-3</p>
              <p className="mt-4">
                <a href="tel:0000000000" className="hover:text-strawberry-300 transition-colors">
                  TEL: 000-0000-0000
                </a>
              </p>
              <p>
                <a href="mailto:info@morinokuma-farm.com" className="hover:text-strawberry-300 transition-colors">
                  Email: info@morinokuma-farm.com
                </a>
              </p>
            </div>

            {/* SNSリンク */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-300 hover:text-strawberry-300 transition-colors text-2xl"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-strawberry-300 transition-colors text-2xl"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-strawberry-300 transition-colors text-2xl"
                aria-label="Twitter"
              >
                🐦
              </a>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} 森のくま農園 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
