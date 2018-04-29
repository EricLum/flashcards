import React from 'react'
import PropTypes from 'prop-types'

const CardForm = (props) => {

    return(<form onSubmit={props.submitFunction} onChange={props.handleChange}>
        <div>
          <label>Title: </label>
          <input type='text' name='title' />
        </div>

        <div>
          <label>Question: </label>
          <input type='text' name='question'/>
        </div>

        <div>
          <label>Answer: </label>
          <input type='text' name='answer' />
        </div>

        <input type='submit' />
    </form>)
  }

  CardForm.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
  }

export default CardForm
