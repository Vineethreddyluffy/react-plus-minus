import {Component} from 'react'

import GetItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {listOf: props.faqsList}
  }

  changeTheStatus = props => {
    const {listOf} = this.state
    const newArr = listOf.map(each => {
      if (each.id === props) {
        return {...each, isShown: !each.isShown}
      }
      return each
    })
    this.setState({listOf: newArr})
  }

  render() {
    const {listOf} = this.state
    return (
      <div className="cont">
        <h1 className="heading">FAQs</h1>
        <ul className="card-cont">
          {listOf.map(each => (
            <GetItem
              key={each.id}
              item={each}
              changeTheStatus={this.changeTheStatus}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Faqs
