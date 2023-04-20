import React, { Fragment } from 'react';

export default class ErrorExampleChild extends React.Component {
  state = {
    isError: false
  }

  componentWillUnmount() {
    throw new Error('Mistake!');
  }

  UNSAFE_componentWillMount() {
    console.log('Hi!');
  }

  createError() {
    try {
      throw new Error('Mistake in createError!');
    } catch(err) {
      console.log(err);
      this.setState({ isError: true });
    }
  }

  render() {

    const list = [11,0,1,2,3,4,5];

    return (
      <div>
        ErrorExampleChild

        <button onClick={this.createError.bind(this)}>
          createError
        </button>

        {this.state.isError && <h5>Щось пішло не так... :( </h5>}

        {list.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <p>Index: {idx}</p>
              <p>Value: {item}</p>
            </Fragment>
          )
        })}

      </div>
    )
  }
}