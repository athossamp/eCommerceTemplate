import MenuItems, { MenuItemList } from "./MenuItems";

const Navbar = () => {
  return (
    <div>
      <ul>
        {MenuItemList.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
