import logo from "../../assets/images/logoipsum-212 1.png";
import SideMenuSeparator from "./SideMenuSeparator";
import SideLink from "./SideLink";
import SIDE_LINKS from "../../lib/side-link";

export default function SideMenu() {
  return (
    <aside
      className={`hidden w-[20%] min-w-[250px] sm:block 
          relative h-[100%] shadow-right ps-5 pt-6
          overflow-y-auto
          

          `}
    >
      {/* side top */}
      <div>
        <img src={logo} alt="logo" srcset="" />
      </div>
      {/* side menu body */}
      <div className=" mt-[2rem] pe-[1.4rem]">
        <SideMenuSeparator text={"Discovr"} />
        {SIDE_LINKS.map((link) => {
          return (
            <SideLink
              text={link.text}
              key={link.href}
              href={link.href}
              active={link.active}
              Icon={link.Icon}
            />
          );
        })}

        <SideMenuSeparator text={"Some other"} />
        {SIDE_LINKS.slice(1, 3).map((link) => {
          return (
            <SideLink
              text={link.text}
              key={link.href}
              href={link.href}
              active={false}
              Icon={link.Icon}
            />
          );
        })}
      </div>
    </aside>
  );
}
