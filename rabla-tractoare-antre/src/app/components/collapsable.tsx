'use client'
import React, { useState } from 'react';

interface CollapsableProps {
    title: string;
    children: React.ReactNode;
    initialCollapsed?: boolean;
}

const Collapsable: React.FC<CollapsableProps> = ({ title, children, initialCollapsed = true }) => {
    const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="border rounded">
            <div
                className="p-2 cursor-pointer flex justify-between items-center bg-gray-600"
                onClick={toggleCollapse}
            >
                <svg
                    className={`w-5 h-5 transition-transform ${isCollapsed ? 'rotate-0' : 'rotate-180'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                <h3 className="">{title}</h3>
            </div>
            <div className={`overflow-hidden transition-max-height duration-300 ${isCollapsed ? 'max-h-0' : 'max-h-screen'}`}>
                <div className="p-3">{children}</div>
            </div>
        </div>
    );
};

export default Collapsable;