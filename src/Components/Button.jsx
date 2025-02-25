

const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border- font-montserrat text-lg leading-none bg-coral-red rounded-full text-white hover:bg-orange-300 ">{label} 
  
  {iconURL && <img className="ml-2 rounded-full w-5 h-5 " src={iconURL} alt="arrow right icon" />}
    </button>
  )
}

export default Button