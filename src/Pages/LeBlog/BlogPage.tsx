import { useEffect } from "react";

export default function Blog(props: any) {
    const {items} = props;

    useEffect(()=>{
    localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    return (
        <>
        <p><small>Tout les article du plus recent au plus ancien</small></p>
        {
            items.map((item:any, index:any) => (
                <div key={index}>
                    <h5> {item.title} </h5>
                    {new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}
                    <p> {item.description} </p>
                </div>
            )
        )}
        </>
    )
}