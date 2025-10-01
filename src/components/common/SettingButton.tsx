import { ChartNoAxesGantt } from "lucide-react";
import Dropdown from "./Dropdown";

const SettingButton = () => {
  return (
    <Dropdown
      trigger={
        <span className="flex items-center gap-1">
          <ChartNoAxesGantt size={24} />
        </span>
      }
      triggerClassName="text-neutral-400 hover:text-white bg-transparent px-2 py-1"
      align="right"
      items={[
        { id: "settings", label: "설정", onSelect: () => console.log("설정") },
        {
          id: "theme",
          label: "테마 전환",
          onSelect: () => console.log("테마"),
        },
        {
          id: "logout",
          label: "로그아웃",
          onSelect: () => console.log("로그아웃"),
        },
      ]}
    />
  );
};

export default SettingButton;
