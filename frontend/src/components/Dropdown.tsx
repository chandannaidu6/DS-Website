// Dropdown.tsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface DropdownProps {
    size: number;
    ButtonName: string;
    Buttons: string[];
    Links: string[];
    dropdownLink?: string; // Optional dropdown link
}

export const Dropdown: React.FC<DropdownProps> = ({ size, ButtonName, Buttons, Links, dropdownLink }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        if (dropdownLink) {
            // Navigate to dropdown link if provided
            window.location.href = dropdownLink;
        } else {
            setIsOpen(!isOpen);
            console.log('Dropdown toggled:', isOpen ? 'closed' : 'open');
        }
    };

    return (
        <div className='relative'>
            <button
                onClick={toggleDropdown}
                className="border text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                {ButtonName}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>

            {isOpen && (
                <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" ref={dropdownRef}>
                    <ul className="border py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        {Buttons.slice(0, size).map((button, index) => (
                            <li key={index}>
                                <a href={Links[index]} className='block border-b px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>{button}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
