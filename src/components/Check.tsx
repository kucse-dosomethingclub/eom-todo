interface Props {
  isSelected?: boolean;
  onClick: () => void;  
  name: string;
}


const Check = ({isSelected, onClick, name}:Props) => {
  const baseClass = 'py-2 rounded-[10px] text-[14px] flex-1 font-medium cursor-pointer'

  return (
    <button
      className={`${baseClass} ${isSelected ? 'bg-white text-blue-600 shadow' : 'text-slate-500'}`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default Check  