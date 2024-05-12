import React, { ReactNode } from 'react';

interface AppProps {
    children: ReactNode;
}

export const Appbar: React.FC<AppProps> = ({ children }) => {
    return (
        <div className='flex justify-center h-full'>
            <div className='border  border-orange-400  rounded sm:max-w-3xl lg:max-w-7xl'>
                {children}
            </div>
        </div>
    );
};

