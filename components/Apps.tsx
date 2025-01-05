import React from 'react';
import Image from 'next/image';
import dictionary from '@/public/dictionary.png';
import { Button } from './ui/button';

export default function Apps() {
  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-center">
      {/* النصوص والمحتوى الوصفي */}
      <div className="flex flex-col md:items-start items-center justify-center h-1/2 w-full md:h-full">
        <h1 className="text-3xl font-bold">TalkWrite</h1>
        <p className="text-gray-300 text-sm py-5 lg:max-w-lg  max-w-md md:text-left text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quod. Earum maiores, veritatis fugiat
          beatae dolores perspiciatis aut reprehenderit explicabo asperiores nostrum voluptatibus necessitatibus?
          Velit fugit maxime ea recusandae illo.
        </p>
        <Button  variant='outline'>Download</Button>
      </div>

      {/* صورة القاموس */}
      <div className="flex items-center justify-center h-1/2 w-full md:h-full">
        <Image
          src={dictionary}
          alt="Dictionary"
          className="h-[350px] w-[400px] object-contain"
        />
      </div>
    </div>
  );
}
