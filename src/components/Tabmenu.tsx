import Check from "../components/Check";

interface MenuItem {
  isSelected: (index: number) => void,
  selectedIndex: number,
}

const Tabmenu = ({ selectedIndex, isSelected }: MenuItem) => {
  const menu: string[] = ["전체", "완료", "미완료"]

  return(
    <div className="flex p-1 rounded-[14px] bg-slate-100">
      {
        menu.map((value, index) => {
          return <Check isSelected={index === selectedIndex} name={value} onClick={() => {
            isSelected(index);
          }} />
        })
      }
    </div>
  )
}

export default Tabmenu;
