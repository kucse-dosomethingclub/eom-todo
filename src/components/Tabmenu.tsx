import Check from "../components/Check";
import { useState } from "react";

interface MenuItem {
  isSelected: boolean,
  name: string,
}

const Tabmenu = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const menu: string[] = ["전체", "완료", "미완료"]
  return(
    <div className="flex p-1 rounded-[14px] bg-slate-100">
      {
        menu.map((value, index) => {
          return <Check isSelected={index === selectedIndex} name={value} onClick={() => {
            setSelectedIndex(index);
          }} />
        })
      }
    </div>
  )
}

export default Tabmenu;
