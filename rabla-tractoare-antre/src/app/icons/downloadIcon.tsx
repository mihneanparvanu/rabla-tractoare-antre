import React from "react"
interface DownloadIconProps {
    className?: string;
}
export const DownloadIcon: React.FC<DownloadIconProps> = ( {className }) => (
    <svg
        viewBox="0 0 56 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <rect y="25" width="55.2" height="23" fill="white" />
        <line x1="27.5" y1="-2.84124e-07" x2="27.5" y2="21" stroke="white" stroke-width="13" />
        <g filter="url(#filter0_d_563_17)">
            <path d="M28 37L12.4115 19L43.5885 19L28 37Z" fill="white" />
        </g>
        <defs>
            <filter id="filter0_d_563_17" x="9.61156" y="18.6" width="36.7769" height="23.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2.4" />
                <feGaussianBlur stdDeviation="1.4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_563_17" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_563_17" result="shape" />
            </filter>
        </defs>
    </svg>

)