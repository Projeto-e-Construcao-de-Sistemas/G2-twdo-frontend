import { ReactElement } from "react";
import { Link } from "react-router-dom";

import Clickable from "../common/Clickable";
import Icon from "../common/Icon";

export default function SidebarButton({
  label,
  icon,
  route,
}: {
  label: string;
  icon: ReactElement | string;
  route: string;
}) {
  return (
    <Link to={`${route}`}>
      <Clickable className="w-full mb-1">
        <Icon icon={icon} size={4} className={"mr-2"} />
        <p className="font-bold">{label.toLowerCase()}</p>
      </Clickable>
    </Link>
  );
}
