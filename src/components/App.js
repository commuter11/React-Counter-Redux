import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, changeNumber, input} from '../actions/index';

class App extends React.Component {

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter onInput={this.props.onInput} 
        onChangeNumber={this.props.onChangeNumber} 
        count1={this.props.count1} count={this.props.count} 
        onIncrement={this.props.onIncrement} 
        onDecrement={this.props.onDecrement} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onChangeNumber: (number) => dispatch(changeNumber(number)),
    onInput: () => dispatch(input())

  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      count1: state.count1,
      numberInputted: state.numberInputted
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);