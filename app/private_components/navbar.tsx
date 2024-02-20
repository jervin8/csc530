"use clinet"

import Link from 'next/link';
import Image from 'next/image';
import companyLogoIcon from '../../public/companyPlaceholderIcon.svg';

const navigation = [
  { id: 0, name: 'Learn', href: '/private_pages/learning' },
  { id: 1, name: 'Review', href: '/private_pages/learning' },
  { id: 2, name: 'Content Dropdown WIP', href: '' },
  { id: 3, name: 'Settings', href: '/private_pages/settings' },
];

const NavBar = () => {
  return (
    <header className="z-10 pb-8">
        <div className="shadow-md w-full fixed top-0 left-0 bg-white py-4 md:px-10 px-7 text-gray-900 mb-4">
        <div className="md:flex items-center justify-between">
            <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            <Link href="/">
                <div className="flex items-center">
                <span className="text-3xl text-gray-800 mr-1 pt-2">
                    <Image src={companyLogoIcon} alt="Company Logo Icon" height="48" width="48" />
                </span>
                <span className="text-2xl">Company/Service Name</span>
                </div>
            </Link>
            </div>
            <div className="justify-end">
            <ul className="md:flex md:items-center">
                {navigation.map(item => (
                <li key={item.id} className="md:ml-8 text-xl md:my-0 my-7">
                    <Link href={item.href}>
                    <div className="hover:text-gray-400 duration-500 cursor-pointer">{item.name}</div>
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </div>
    </header>
  );
};

export default NavBar;


