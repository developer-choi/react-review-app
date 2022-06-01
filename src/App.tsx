import React from 'react';

export default function App() {
  return (
    <div>
      <Todo content="할일1"/>
      <Todo content="할일2"/>
      <Todo content="할일3"/>
    </div>
  );
}

interface TodoProps {
  content: string;
}

function Todo({content}: TodoProps) {
  return (
    <span>{content}</span>
  );
}
