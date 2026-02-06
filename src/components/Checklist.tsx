interface Props{
  name: string;
}

const Checklist = ({name}: Props) => {
  
  return (
    <div className="flex gap-3 border border-slate-300 h-[61px] items-center pl-[16px] pr-[58px] rounded-[14px]">
      <input type="checkbox"
        className="appearance-none w-[24px] h-[24px] border border-2 border-slate-300 rounded-lg checked:bg-blue-500"
      ></input>
      <div>
        {name}
      </div>
    </div>
  )
}

export default Checklist;