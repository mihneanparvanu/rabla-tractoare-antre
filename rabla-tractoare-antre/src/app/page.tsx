'use client'
import  { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { DownloadIcon } from "./icons/downloadIcon";
import { UploadIcon } from "./icons/uploadIcon";
import CaptchaPopup from "./components/captchaPopup";
import FilledButton from "./components/FilledButton";
import { useTimer } from "./components/Timer";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
   
  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false);
  const [hasUploadedCF, setHasUploadedCF] = useState(false);
  
  useEffect(() => {
  const stored = localStorage.getItem('hasUploadedCF');
  setHasUploadedCF(stored === 'true');
}, []);

const timer = useTimer()

useEffect(()=>{
  if (!timer.running) {
    timer.startTimer()
  }
}, []);
  const openCaptcha = () => {
    setIsCaptchaOpen(true);
  }
  const closeCaptcha = () => {
    setIsCaptchaOpen(false);
  }

  const router = useRouter()


  const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setHasUploadedCF(true)
      localStorage.setItem('hasUploadedCF', 'true')
      router.push('/incarcare-documente');
    }
  }

  return (
    <div className="w-[80%] pt-20">
      <div className=" flex flex-col items-center py-4 gap-2">
        <h1 className="text-3xl font-medium ">
          Site de antrenament pentru programul Rabla Tractoare 2025
        </h1>
        <a href="https://revolut.me/mihneanparvanu"
          target="_blank"
          className="cursor-pointer text-primaryGreen"
        >
          Puteți să-mi mulțumiți pe Revolut :D
        </a>


      </div>


      <div className="flex flex-col h-[500px] justify-between items-center  bg-surface-base border-[1px] border-neutral-300 rounded-lg  py-6 md:gap-1 lg:py-20 gap-20 xl:gap-24 px-6">
        <div className="flex justify-between w-full">
          <a href="/CF_Antrenament.pdf" download='CF_Antrenament.pdf'>
            <FilledButton
              buttonText={'Descarcă model cerere de finanțare'}
              bgColor={'bg-primaryBlue'}
              icon={<DownloadIcon className='w-5 h-5' />}
            />
          </a>
          <input className="hidden"
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <FilledButton
            buttonText={'Încarcă cererea completată'}
            bgColor={'bg-primaryGreen'}
            icon={<UploadIcon className='w-5 h-5' />}
            onClick={openCaptcha}
          />
        </div>
        <div className="fixed top-8 w-full flex justify-center items-center">
          <CaptchaPopup
            isOpen={isCaptchaOpen}
            onClose={closeCaptcha}
            onConfirm={
              handleFileUpload
            }
          />
        </div>
      </div>
    </div>
  )
}



 
 
 


