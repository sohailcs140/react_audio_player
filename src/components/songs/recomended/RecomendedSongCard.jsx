import playButtonIcon from "../../../assets/images/Frame 48.png"
export default function RecomendedSongCard({image, title, artist}) {
  return (
    <div className="flex flex-col gap-3">
        <div className="relative min-w-[180px] min-h-[180px]  rounded-md overflow-hidden">
            <img src={image} className="absolute  left-0 top-0 w-[100%] h-[100%]" />
            <button className=" absolute bottom-3 right-3">
                <img  src={playButtonIcon} className=" object-contain"/>
            </button>
        </div>
        <div>
            <h3 className="text-[.9rem] font-medium text-text-primary">{title}</h3>
            <h4 className="text-[.8rem] font-medium text-dim">{artist}</h4>
        </div>
    </div>
  )
}
