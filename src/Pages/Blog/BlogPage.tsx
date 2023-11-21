import { useEffect } from "react";
import Item from "../../Components/item";

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
                    
                    <Item item={item} index={index} />
                </div>
            )
        )}
        </>
    )
}