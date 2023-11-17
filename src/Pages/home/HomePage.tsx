import { useEffect, useState } from "react";

export default function Home(props: any) {
  const { handleSubmitMessage, messages, items } = props;

  type formulaire = {
    name: string;
    subject: string;
    message: string;
  };

  const [form, setForm] = useState<formulaire>({
    name: "",
    subject: "",
    message: "",
  }); 

  function handleSubmit(evt: any) {
    evt.preventDefault();
    handleSubmitMessage(form);
  }

  function handleChange(evt: any) {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  }

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <>
      <div className="blockleft">
        <h2>Boite de reception des messages</h2>
        <div className="messagerie">
          {messages.map((message: any, index: any) => (
            <div key={index} className="message">
              
                <p>
                  Nom: {message.name} Sujet: {message.subject} Message:{" "}
                  {message.message} <input type="submit" value="Voir" />
                </p>
                {new Date().getDate()}.{new Date().getMonth()}.
                {new Date().getFullYear()} <br />
             
            </div>
          ))}
        </div>
        <h2>Le dernier article</h2>
        <br />

        {items[0] ? (
          <div className="">
            <p>
              Nom: {items[0].author} Sujet: {items[0].title} Message:{" "}
              {items[0].description} <input type="submit" value="Voir" />
            </p>
            {new Date().getDate()}.{new Date().getMonth()}.
            {new Date().getFullYear()} <br />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="blockRight">
        <h2>Nous contacter</h2>
        <div className="contact">
          <form
            onSubmit={(evt) => {
              handleSubmit(evt);
            }}
          >
            <label htmlFor="name">Nom</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              onChange={(evt) => {
                handleChange(evt);
              }}
            />
            <br />
            <br />

            <label htmlFor="subject">Sujet</label>
            <br />
            <input
              type="text"
              name="subject"
              id="subject"
              onChange={(evt) => {
                handleChange(evt);
              }}
            />
            <br />
            <br />

            <label htmlFor="message">Messsage</label>
            <br />
            <textarea
              name="message"
              id="messsage"
              onChange={(evt) => {
                handleChange(evt);
              }}
            />
            <br />
            <br />

            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    </>
  );
}
