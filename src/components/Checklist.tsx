import CheckIcon from "./CheckIcon";

interface Props{
  name: string,
  isChecked: boolean,
  onToggle:() => void,
}

const Checklist = ({ name, isChecked, onToggle }: Props) => {
  
  return (
    <div className="flex gap-3 border border-slate-100 h-[61px] items-center pl-[16px] pr-[58px] rounded-[14px]">
      <div className={`w-[24px] h-[24px] flex items-center justify-center border-2 rounded-lg
        ${isChecked ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-300'}`}
        onClick={onToggle}>
        {isChecked && <CheckIcon/>}
      </div>
      <div className={`${isChecked ? 'line-through text-slate-400' : 'text-slate-800'}`}>
        {name}
      </div>  
    </div>
  );
};

export default Checklist;
