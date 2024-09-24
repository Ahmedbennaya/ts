import React from 'react';

// Define the type for the props
interface GreetingProps {
  name: string;
}

// Functional component with TypeScript typing for props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
