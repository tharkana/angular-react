import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState, Profiler } from 'react';

export interface IMyComponentProps {
  counter: number;
  text: string;
  onTextChange?: (text: string) => void;
  onClick?: () => void;
}

export const CustomReactComponent: FunctionComponent<IMyComponentProps> = (props: IMyComponentProps) => {

  const timerHandle = useRef<number | null>(null);
  const [stateCounter, setStateCounter] = useState(42);
  const [textInput, setTextInput] = useState('');

  
  const {counter: propsCounter, onClick, text, onTextChange} = props;

  useEffect(() => {
    setTextInput(text);
  }, [text])
  

  useEffect(() => {
    timerHandle.current = +setInterval(() => {
      setStateCounter(stateCounter + 1);
    }, 2500);

    return () => {
      if (timerHandle.current) {
        clearInterval(timerHandle.current);
        timerHandle.current = null;
      }
    };
  });

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const textChange = (event: any) => {
    const changeText = event.target.value as string;
    setTextInput(changeText);
    if(onTextChange) {
      onTextChange(changeText);
    }
  }

  const onRenderCallback = (
    id:any, // the "id" prop of the Profiler tree that has just committed
    phase:any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration:any, // time spent rendering the committed update
    baseDuration:any, // estimated time to render the entire subtree without memoization
    startTime:any, // when React began rendering this update
    commitTime:any, // when React committed this update
    interactions:any // the Set of interactions belonging to this update
  ) =>
   {
    console.log(`Id: ${id} - phase: ${phase} - actualDuration: ${actualDuration} - baseDuration: ${baseDuration}`);
  }

  return (
    <div>
      <Profiler id="CustomComp" onRender={onRenderCallback}>
        <div>Props counter: {propsCounter}
          <button type="button" onClick={handleClick}>click to increase</button>
        </div>
        <div>State counter: {stateCounter}</div>
        <div>
          Input text to propagate it to Angular level: <input type='text' value={textInput} onChange={textChange}></input>
        </div>
      </Profiler>
    </div>
  );
};