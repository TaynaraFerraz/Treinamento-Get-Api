
type Card = {
    id: number,
    title: string,
    text: string
}

export default function Card({id, title, text}:Card){
    return(
        <div className="flex flex-col bg-slate-100 justify-center items-center gap-4 p-4">
            <h1 className="text-2xl">{title}</h1>
            <p className="text-lg">{text}</p>
        </div>
    )
}