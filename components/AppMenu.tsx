import React from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import ThemeTile from "@/components/theme/ThemeTile";

const AppMenu = ({className = ''}) => {
    return (
        <Drawer
            direction="top"
        >
            <DrawerTrigger
            >
                <IoMdMenu size={32} className={`sm:hidden cursor-pointer ${className}`}
                          onClick={() => {
                          }}
                />
            </DrawerTrigger>
            <DrawerContent
                className='top-0 mb-[100px]'
            >
                <div className="flex justify-center items-center space-x-8 my-10">
                    <span className='font-[600] text-[18px] mr-2'>
            Your Name
        </span>
                </div>
                <div className="flex flex-col justify-center items-center space-y-8">
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
            </span><ThemeTile/>

                </div>

                <DrawerFooter>
                    <DrawerClose className="flex justify-center">
                        <IoMdClose size={32}/>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    );
};

export default AppMenu;
