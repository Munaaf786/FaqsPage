import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onClickPlusOrMinus = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderButton = () => {
    const {isActive} = this.state
    const imageUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    return (
      <button
        type="button"
        className="button"
        onClick={this.onClickPlusOrMinus}
      >
        <img src={imageUrl} alt={isActive ? 'minus' : 'plus'} />
      </button>
    )
  }

  renderAnswerText = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    return (
      <>
        <hr className="separator" />
        <p className="answer-text">{answerText}</p>
      </>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {id, questionText, answerText} = faqDetails
    const {isActive} = this.state

    return (
      <li className="faqItem">
        <div className="questionText-section">
          <h1 className="question-text">{questionText}</h1>
          {this.renderButton()}
        </div>
        {isActive && this.renderAnswerText()}
      </li>
    )
  }
}

export default FaqItem
