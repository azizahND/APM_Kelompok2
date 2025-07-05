import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Group13.png';

const Navs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menus = [
    { name: 'Beranda', link: '/' },
    { name: 'Deteksi', link: '/deteksi' },
    { name: 'About Us', link: '/about' }
  ];

  return (
    <div className="fixed top-0  z-50 max-w-[100rem] absolute top-0 w-full bg-transparent  px-10">
      <nav className="flex items-center justify-between py-4 mr-10">
        <div className="mr-auto">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-15 w-auto" />
          </Link>
        </div>

        <div className="flex space-x-8">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              to={menu.link}
              className={`border-b-2 text-md transition duration-200
                ${currentPath === menu.link
                  ? 'border-orange-600 text-orange-700 font-bold'
                  : 'border-transparent text-black hover:text-orange-600'}
              `}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navs;
