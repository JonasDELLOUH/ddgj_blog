'use client';
import React from 'react';
import ThemeTile from "@/components/theme/ThemeTile";
import AppMenu from "@/components/AppMenu";

const MainHeader = () => {
  return (
    <div className="p-[20px] flex justify-between items-center">
        <span className='font-[600] text-[18px] mr-2'>
            Your Name
        </span>
        <AppMenu/>
        <div className="hidden sm:flex  justify-center items-center space-x-8">
            <span className="font-[400] text-[18px]">
                Blog
            </span>
            <span className="font-[400] text-[18px]">
                Projects
            </span>
            <span className="font-[400] text-[18px]">
                About
            </span>
            <span className="font-[400] text-[18px]">
                Newsletter
            </span>
            <ThemeTile/>

        </div>
    </div>
  );
};

export default MainHeader;
