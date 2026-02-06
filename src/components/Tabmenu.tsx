import Check from "../components/Check";

const Tabmenu = () => {
  return(
    <div className="flex p-1 rounded-[14px] bg-slate-100">
      <Check isSelected={true} name="전체"/>
      <Check isSelected={false} name="미완료"/>
      <Check isSelected={false} name="완료"/>
    </div>
  )
}

export default Tabmenu;
