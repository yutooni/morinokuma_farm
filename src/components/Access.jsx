const Access = () => {
  return (
    <section id="access" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            アクセス
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            森のくま農園へのアクセス方法
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 地図 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-strawberry-200 to-red-300 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-gray-700">Google Mapをここに埋め込み</p>
              </div>
            </div>
          </div>

          {/* アクセス情報 */}
          <div className="space-y-6">
            {/* 住所 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">📍</span>
                住所
              </h3>
              <p className="text-gray-700 text-lg">
                〒000-0000<br />
                ○○県○○市○○町1-2-3
              </p>
            </div>

            {/* お問い合わせ */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">📞</span>
                お問い合わせ
              </h3>
              <p className="text-gray-700 text-lg mb-2">
                <span className="font-semibold">TEL：</span>000-0000-0000
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Email：</span>info@morinokuma-farm.com
              </p>
            </div>

            {/* 車でお越しの方 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🚗</span>
                車でお越しの方
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>○○ICより約15分</p>
                <p className="font-semibold text-strawberry-600">
                  無料駐車場：30台完備
                </p>
              </div>
            </div>

            {/* 公共交通機関 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🚃</span>
                公共交通機関
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>○○駅よりバスで約20分</p>
                <p>「○○バス停」下車、徒歩5分</p>
              </div>
            </div>
          </div>
        </div>

        {/* ご注文 */}
        <div id="order" className="mt-16 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            ご注文・お問い合わせ
          </h3>
          <p className="text-gray-700 mb-6 text-lg">
            以下のGoogleフォームからご注文いただけます
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.google.com/your-form-url"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-strawberry-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-strawberry-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <span className="mr-2">📝</span>
              ご注文フォーム
            </a>
            <a
              href="tel:0000000000"
              className="bg-white text-strawberry-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all shadow-lg border-2 border-strawberry-600 inline-flex items-center justify-center"
            >
              <span className="mr-2">📞</span>
              電話で問い合わせ
            </a>
          </div>
          <p className="text-gray-600 mt-6 text-sm">
            ※Googleフォームにて必要事項をご記入ください<br />
            お電話でのお問い合わせも承っております
          </p>
        </div>
      </div>
    </section>
  );
};

export default Access;
