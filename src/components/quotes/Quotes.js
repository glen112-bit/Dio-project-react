export const Quotes = ({quote, speaker}) =>{
  return(
    <div>
      <p>{quote}</p>
      <p>- {speaker}</p>
      <button>click</button>
    </div>
  )
}