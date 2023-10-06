'use client';

import Link from 'next/link';
import { Image } from '@nextui-org/react';

export const LOGO_PATH =
  'https://img.freepik.com/premium-vector/cute-sit-zebra-reading-book-cartoon-illustration_295036-530.jpg';

export const Header = () => {
  return (
    <header className="sticky top-0 w-full">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image
              alt="Album cover"
              className="object-cover"
              width={50}
              height={50}
              shadow="none"
              src={LOGO_PATH}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              WorkBook 😍
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              href="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
