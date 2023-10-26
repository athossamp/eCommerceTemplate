interface useCustomBuildsTypes {
  available: boolean;
  category: string;
  title: string;
  cutPrice: number;
  currentPrice: number;
  image: string;
}
interface DropdownProps {
  dropdown: boolean;
  submenus: Array<{ title: string; url: string }>;
  theme: useCustomBuildsTypes[];
}
import { ItemCard } from "../ItemCard/ItemCard";
import "./Header.css";
const logosDrop = [
  {
    image: "images/image 33.png"
  },
  {
    image: "images/image 33 (1).png"
  },
  {
    image: "images/image 33 (2).png"
  },
  {
    image: "images/image 33 (3).png"
  },
  {
    image: "images/image 33 (4).png"
  },
  {
    image: "images/image 33 (5).png"
  },
  {
    image: "images/image 33 (6).png"
  }
];
const Dropdown: React.FC<DropdownProps> = ({ submenus, dropdown, theme }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      <div className="dropdown-background">
        <div className="dropdown-menu-wrapper">
          <div className="dropdown-menu-box">
            {submenus.map((submenu, index) => (
              <li key={index} className="dropdown-menu">
                <a href={submenu.url}>{submenu.title}</a>
              </li>
            ))}
          </div>
          <div className="dropdown-menu-cards">
            {theme.slice(0, 3).map((item, index) => (
              <ItemCard
                available={item.available}
                title={item.title}
                category={item.category}
                image={item.image}
                cutPrice={item.cutPrice}
                currentPrice={item.currentPrice}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="dropdown-logos">
          {logosDrop.map((item, index) => (
            <img src={item.image} key={index} />
          ))}
        </div>
      </div>
    </ul>
  );
};
export default Dropdown;
