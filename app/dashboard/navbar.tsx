"use clinet"

import Button from "./button";

import Image from "next/image";
import placeholderIcon from "../../public/placeholderIcon.svg";
import companyLogoIcon from "../../public/companyPlaceholderIcon.svg";

const navigation = [
  { id: 0, name: 'Learn', href: "dashboard/learn", current: true },
  { id: 1, name: 'Review', href: "dashboard/review", current: true },
  { id: 2, name: 'Content', href: "dashboard/#", current: false },
  { id: 3, name: 'Practice', href: "dashboard/#", current: false },
]

const navList = navigation.map(item => <li key={item.id} className="md:ml-8 text-xl md:my-0 my-7"><a className="hover:text-gray-400 duration-500" href={item.href}>{item.name}</a></li>);

export default function NavBar() {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 text-gray-900">
            <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                <span className="text-3xl text-gray-800 mr-1 pt-2">
                    <Image priority src={companyLogoIcon} alt="Company Logo Icon" height="48"/> 
                </span>
                Company/Service Name
            </div>
            <div className="justify-end">
                <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static">
                    {navList}
                </ul>
                <div className="h-full">
                    <Button>
                        <Image priority src={placeholderIcon} alt="Profile Icon" height="48"/>     
                    </Button>
                    <Button>
                        <Image priority src={placeholderIcon} alt="Notification Icon" height="48"/>     
                    </Button>
                    <Button>
                        <Image priority src={placeholderIcon} alt="Search Icon" height="48"/>     
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}