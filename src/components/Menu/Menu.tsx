import { MenuItem, MenuItemProps } from "@/components";

import "./Menu.scss";

export type MenuProps = {
  items: MenuItemProps[];
};

export default function Menu({ items }: MenuProps) {
  return (
    <nav className="menu">
      <ul className="menu__items">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  );
}
