'use client';
import React, {useContext} from 'react';
import {ThemeContext} from "@/app/ThemeProvider";
import {IoMoonOutline} from "react-icons/io5";
import {LuSunDim} from "react-icons/lu";

const ThemeTile = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const handleToggleTheme = () => {
        toggleTheme();
    }

    return (
        <div
            className={`flex justify-between items-center h-[40px] rounded-[29px] py-2 px-4 bg-foreground gap-x-4 ${theme === 'dark' ? '' : 'flex-row-reverse'}`}
            style={{transition: 'all 0.3s ease-in-out'}}
        >
            <div className="w-6 h-6 rounded-full bg-background"
                 style={{
                     transform: theme === 'dark' ? 'translateX(-5px)' : 'translateX(5px)',
                     transition: 'transform 0.3s ease-in-out',
                 }}
                 onTransitionEnd={() => {
                     // Remet l'élément à sa position normale (0)
                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     // @ts-expect-error
                     document.querySelector('.h-6').style.transform = 'translateX(0)';
                 }}
            >
            </div>
            <span className=""

            >
                {theme === 'dark' ? (
                    <IoMoonOutline
                        size={24}
                        className='text-background cursor-pointer'
                        onClick={handleToggleTheme}/>
                ) : (
                    <LuSunDim
                        size={24}
                        className='text-background cursor-pointer'
                        onClick={handleToggleTheme}/>)}
            </span>
        </div>
    );
};

export default ThemeTile;
