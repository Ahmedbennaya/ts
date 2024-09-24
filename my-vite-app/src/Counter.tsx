import React, { Component } from 'react';

// Define the type for the state
interface CounterState {
  count: number;
}

// Define the type for the props (empty in this case)
interface CounterProps {}

// Class component with TypeScript typing for state and props
class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render(): JSX.Element {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
