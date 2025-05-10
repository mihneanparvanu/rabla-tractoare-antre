interface FilledButtonProps {
  buttonText: string;
  bgColor?: string;
  icon?: React.ReactNode
  onClick?: () => void;
}

export default function FilledButton({ buttonText, bgColor, icon, onClick }: FilledButtonProps) {
  const buttonClasses = `${bgColor} text-white rounded py-2 px-3 flex flex-row gap-1 w-fit cursor-pointer`
 return (
   <button onClick={onClick} className={buttonClasses}>
     {icon}
     {buttonText}
   </button>
 )
}