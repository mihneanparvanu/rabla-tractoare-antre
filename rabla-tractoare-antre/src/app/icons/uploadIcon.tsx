import React from "react";
interface uploadIconProps {
    className?: string;
}
export const UploadIcon: React.FC<uploadIconProps> = ({ className }) => (
    <svg
        viewBox="0 0 56 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <rect y="25" width="55.2" height="23" fill="white" />
        <g filter="url(#filter0_d_563_18)">
            <line x1="28.5" y1="37" x2="28.5" y2="16" stroke="white" strokeWidth="13" />
        </g>
        <path d="M28 3.14722e-06L43.5885 18L12.4115 18L28 3.14722e-06Z" fill="white" />
        <defs>
            <filter id="filter0_d_563_18" x="19.2" y="15.6" width="18.6" height="26.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2.4" />
                <feGaussianBlur stdDeviation="1.4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_563_18" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_563_18" result="shape" />
            </filter>
        </defs>
    </svg>
)