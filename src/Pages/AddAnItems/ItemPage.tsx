import { useState } from "react";

export default function Items(props: any) {
    const {handleSubmitItem} = props;

    type formulaire = {
        author: string,
        title: string,
        description: string,
        date: Date,
    }

    const [form, setForm] = useState<formulaire>({
        author:"",
        title:"",
        description:"",
        date:new Date(),
    })

    function handleSubmit(evt: any) {
        evt.preventDefault(evt);
        setForm({...form, date: new Date()})
        handleSubmitItem(form);
        setForm({author:"", title:"", description:"", date:new Date()})
    }

    function handleChange(evt:any) {
        const {name, value}= evt.target;
        setForm({...form, [name]: value});
    }

    return (
        <>
        <form onSubmit={(evt: any)=>{handleSubmit(evt)}} >
            <label htmlFor="author">Nom de l'auteur</label>
            <br />
            <input type="author" name="author" id="author" value={form.author} onChange={(evt:any)=>{handleChange(evt)}} />
            <br />
            <br />

            <label htmlFor="title">Titre</label>
            <br />
            <input type="text" name="title" id="title" value={form.title} onChange={(evt:any)=>{handleChange(evt)}} />
            <br />
            <br />

            <label htmlFor="description">Description</label>
            <br />
            <textarea name="description" id="description" value={form.description} onChange={(evt:any)=>{handleChange(evt)}} ></textarea>
            <br />
            <br />

            <input type="submit" value="Envoyer" />
        </form>
        </>
    )
}