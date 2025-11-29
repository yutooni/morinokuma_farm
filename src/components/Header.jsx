import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <div className="flex items-center gap-2">
            <img
              src="/images/logo-bear.webp"
              alt="森のくま農園"
              className="h-12 w-12 object-cover rounded-full"
            />
            <span className="text-xl font-bold text-strawberry-600">
              森のくま農園
            </span>
          </div>

          {/* デスクトップメニュー */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-strawberry-600 transition-colors"
              >
                農園紹介
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('marihime')}
                className="text-gray-700 hover:text-strawberry-600 transition-colors"
              >
                まりひめ
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-strawberry-600 transition-colors"
              >
                商品
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('access')}
                className="text-gray-700 hover:text-strawberry-600 transition-colors"
              >
                アクセス
              </button>
            </li>
            <li>
              <a
                href="#order"
                className="bg-strawberry-600 text-white px-6 py-2 rounded-full hover:bg-strawberry-700 transition-colors"
              >
                ご注文
              </a>
            </li>
          </ul>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-3 pb-4">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-strawberry-600 transition-colors py-2"
              >
                農園紹介
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('marihime')}
                className="block w-full text-left text-gray-700 hover:text-strawberry-600 transition-colors py-2"
              >
                まりひめ
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left text-gray-700 hover:text-strawberry-600 transition-colors py-2"
              >
                商品
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('access')}
                className="block w-full text-left text-gray-700 hover:text-strawberry-600 transition-colors py-2"
              >
                アクセス
              </button>
            </li>
            <li>
              <a
                href="#order"
                className="block text-center bg-strawberry-600 text-white px-6 py-2 rounded-full hover:bg-strawberry-700 transition-colors"
              >
                ご注文
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
