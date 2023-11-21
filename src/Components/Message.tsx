export default function Message(props: any) {
  const { message } = props;
  return (
    <>
      <p>
        Nom: {message.name} Sujet: {message.subject} Message:
        {message.message} <input type="submit" value="Voir" />
      </p>
      {new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}
    </>
  );
}
