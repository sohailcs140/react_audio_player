export default function SectionHeading({text, href}) {
  return (
    <div className={`flex justify-between  w-[100%] mb-4 pe-6`}>
        <h2 className="text-[1.3rem] font-medium">{text}</h2> 
        <a href={href} className="text-primary_1 text-[.9rem] font-semibold">View all</a>
    </div>
  )
}
