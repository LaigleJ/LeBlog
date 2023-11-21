import logo from "../assets/react.svg"; 

export default function Item(props: any) {
    const {item} = props;
    return (
        <>
        <img src={logo} alt="symbole de l'univers"  />
        <h5> {item.title} </h5>
                    {item.date.getDate()}.{item.date.getMonth()+1}.{item.date.getFullYear()}
                    <p> {item.description} </p>
        </>
    )
}