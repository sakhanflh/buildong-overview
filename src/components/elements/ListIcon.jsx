import { Link, useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
export function ListIcon({icon, text, to}){
    const { profileId } = useParams()
    console.log(profileId)

    return (
        <Link to={`/profile/${to}`} className={`${profileId == to ? 'bg-sky-100 text-primary' : ''} hover:bg-sky-50 hover:text-primary hover:scale-[1.01] transition-all duration-100 text-neutral-500 cursor-pointer rounded-lg py-4 px-4 font-semibold flex gap-3 items-center`}>
            {icon}
            <p>{text}</p>
        </Link>
    )
}