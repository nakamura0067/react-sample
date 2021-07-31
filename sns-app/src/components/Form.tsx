
type FormPropsType = {
  setKey:React.Dispatch<React.SetStateAction<string>>;
  setCity:React.Dispatch<React.SetStateAction<string>>;
  getWeather:(e:React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props:FormPropsType) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="key" placeholder="api-key" onChange={e => props.setKey(e.target.value)}/>
      <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;