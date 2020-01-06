import React, { Component } from 'react';
import Counter from './counter';
import classes from './counter.module.css';

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className='btn btn-primary Space'>
          Reset Counters
        </button>
        {counters.map(counter => (
          <div className={classes.Counter} key={counter.id}>
            <Counter
              // key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            ></Counter>
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
