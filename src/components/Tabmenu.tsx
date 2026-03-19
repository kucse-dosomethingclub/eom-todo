import Check from "../components/Check";

interface TabMenuProps {
  menu: string[];
  onSelect: (index: number) => void,
  selectedIndex: number,
}

const Tabmenu = ({ menu, selectedIndex, onSelect }: TabMenuProps) => {

  return(
    <div role="tablist" className="flex p-1 rounded-[14px] bg-slate-100">
      {
        menu.map((value, index) => {
          return <Check key={index} isSelected={index === selectedIndex} todoName={value} onClick={() => 
            onSelect(index)} 
            />
        })
      }
    </div>
  )
}

export default Tabmenu;
