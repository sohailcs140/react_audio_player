export default function SideLink({ href, text, active, Icon }) {
  return (
    <a
      href={href}
      className={`text-light-dim text-[0.83rem] p-[.8rem] rounded-lg
            flex gap-3 items-center from-primary_2 to-primary_1 
            hover:bg-gradient-to-r hover:text-primary hover:font-[600]

            ${active ? "bg-gradient-to-r text-primary font-[600]":"font-light"}
     `}
    >
        <Icon className="text-[1rem]"/>
      {text}
    </a>
  );
}
