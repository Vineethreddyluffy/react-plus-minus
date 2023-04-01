import './index.css'

const GetItem = props => {
  const {item, changeTheStatus} = props
  const {questionText, id, isShown, answerText} = item
  const changeStatus = () => {
    changeTheStatus(id)
  }
  const result = isShown
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altOf = isShown ? 'minus' : 'plus'
  return (
    <li className="list-item">
      <div className="img-cont">
        <h1 className="para">{questionText}</h1>
        <button type="button" className="button" onClick={changeStatus}>
          <img src={result} className="image" alt={altOf} />
        </button>
      </div>
      {isShown ? (
        <div>
          <hr />
          <div className="second">
            <p className="answer">{answerText}</p>
          </div>
        </div>
      ) : null}
    </li>
  )
}
export default GetItem
