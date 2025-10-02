import { Menu } from "lucide-react";
import Dropdown, { type DropdownItem } from "./Dropdown";
import { useLocation, useNavigate } from "react-router-dom";

const SettingButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dropdownItems: DropdownItem[] = [
    { id: "settings", label: "설정", onSelect: () => console.log("설정") },
    {
      id: "theme",
      label: "테마 전환",
      onSelect: () => console.log("테마"),
    },

    {
      id: "report",
      label: "문제 신고",
      onSelect: () => {
        if (location.pathname == "/report") return;
        navigate("/report");
      },
    },
    {
      id: "logout",
      label: "로그아웃",
      className: "text-red-400 hover:bg-red-500/20",
      onSelect: () => console.log("로그아웃"),
    },
  ];

  return (
    <Dropdown
      trigger={<Menu size={22} />}
      triggerClassName="flex items-center justify-center bg-transparent text-neutral-500/60 px-2 py-1 hover:opacity-80 cursor-pointer"
      align="right"
      items={dropdownItems}
      menuClassName="text-sm app-surface"
    />
  );
};

export default SettingButton;
