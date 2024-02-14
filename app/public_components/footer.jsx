
import Link from 'next/link';

{/*https://flowbite.com/docs/components/footer/*/}

const Footer = () => {
    return(
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024 Our Company. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="/public_pages/about" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">IDK Something</Link>
                </li>
                <li>
                    <Link href="/public_pages/support" className="hover:underline">Support</Link>
                </li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer;
