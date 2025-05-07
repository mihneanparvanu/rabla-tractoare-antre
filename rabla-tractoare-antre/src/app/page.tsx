import Image from "next/image";
import React from "react";
import { DownloadIcon } from "./icons/downloadIcon";
import { UploadIcon } from "./icons/uploadIcon";
export default function Home () {
  return (
    <div className="flex flex-col md:gap-1 lg:gap-2 xl:gap-4">
     <FilledButton 
     buttonText={'Descarcă model cerere de finanțare'}
    bgColor={'bg-primaryBlue'}
     icon = {<DownloadIcon className = 'w-5 h-5' />} 
     />     
    <FilledButton
    buttonText={'Încarcă cererea completată'}
    bgColor={'bg-primaryGreen'}
    icon = {<UploadIcon className = 'w-5 h-5'/>}
    />

     
     

    </div>
  )
}

interface FilledButtonProps {
  buttonText: string;
  bgColor?: string;
  icon?: React.ReactNode 
}

export function FilledButton ({buttonText, bgColor, icon}: FilledButtonProps){
  const buttonClasses = `${bgColor} py-2 px-2 flex flex-row gap-1 w-fit`
  return (
    <button className={buttonClasses}>
    {icon}
    {buttonText}
  </button>
  )
}
 
 