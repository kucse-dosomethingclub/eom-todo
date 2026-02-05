interface Props {
  isSelected?: boolean;
  name: string;
}


const Check = ({isSelected, name}:Props) => {
  const baseClass = 'py-2 rounded-[10px] text-[14px] flex-1 font-medium'

  return (
    <button
      className={`${baseClass} ${isSelected ? 'bg-white text-blue-600 shadow' : 'text-slate-500'}`}
    >
      {name}
    </button>
  )
}

export default Check  