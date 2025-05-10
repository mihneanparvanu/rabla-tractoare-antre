import React from "react"
interface TimerIconProps {
    color: string;
    width: string;
    height: string;

}

export const TimerIcon: React.FC<TimerIconProps> = ({ color, width, height }) => {
    return (
    <svg 
    width={width}
    height ={height}
        viewBox="00 00 224 267" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="112" cy="155" r="100.5" stroke={color} strokeWidth="23" />
        <rect x="100" y="10" width="24" height="47" rx="12" fill={color} />
        <rect x="144" width="21" height="63" rx="10.5" transform="rotate(90 144 0)" fill={color} />
        <rect x="201.552" y="48.3668" width="24.4401" height="36.1633" rx="12.22" transform="rotate(44.9567 201.552 48.3668)" fill={color} />
        <path d="M183 154.5C183 168.641 178.807 182.465 170.95 194.223C163.094 205.981 151.927 215.146 138.862 220.557C125.797 225.969 111.421 227.385 97.551 224.626C83.6814 221.867 70.9413 215.058 60.9419 205.058C50.9424 195.059 44.1327 182.319 41.3739 168.449C38.615 154.579 40.0309 140.203 45.4426 127.138C50.8543 114.073 60.0186 102.906 71.7767 95.0499C83.5348 87.1934 97.3586 83 111.5 83L111.5 154.5H183Z" fill={color} />
    </svg>
    )
}






