import React, {forwardRef, Ref, useCallback, useImperativeHandle, useRef} from 'react';

export default function App() {
  
  const inputRef = useRef<Method>(null);
  
  const focus = useCallback(() => {
    inputRef.current?.focus();
  }, []);
  
  return (
    <>
      <ChildComponent ref={inputRef}/>
      <button onClick={focus}>Focus the input</button>
    </>
  );
}

interface Method {
  focus: () => void;
}

const ChildComponent = forwardRef(function (props: {}, ref: Ref<Method>) {
  
  const inputRef = useRef<HTMLInputElement>(null);
  
  const focusTheInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);
  
  useImperativeHandle<Method, Method>(ref, () => ({
    focus: focusTheInput
  }));
  
  return (
    <input ref={inputRef}/>
  );
});
