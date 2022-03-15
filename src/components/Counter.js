//import {Component} from 'react';
import classes from './Counter.module.css';
import { useSelector,useDispatch, connect } from 'react-redux';
import { counterActions } from '../store/index'
//import { render } from '@testing-library/react';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)) // {type: some_unique_identfier, payload: 5}
  }


  const decrementHandler = () => {
    dispatch(counterActions.decrement)
  }

  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>} if show is true then

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase + 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main >
  );
};

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main >
//     );
//   }
// }
// const mapStatToProps = state =>{
//   return{
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch =>{
//   return{
//     increment: () => dispatch ({type: 'increment'}),
//     decrement: () => dispatch ({type: 'decrement'}),
//   }
// }

// export default connect (mapStatToProps, mapDispatchToProps) (Counter);
export default Counter;