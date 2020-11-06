import { useMachine } from '@xstate/react';
import machine from './Machines';

const {machines, actions } = machine

function App() {
  const [ state, send ] = useMachine(machines.showMachine, { devTools: true });
  const isShow = () => state.value == 'show'

  return (
    <div className="App">
      <button onClick={() => send(actions.showActionToggle)}>{isShow() ? 'Hide' : 'Show'}</button>

      {
        isShow()
          ? (
            <div>
              멍하~
            </div>
          )
          : (<></>)
      }
    </div>
  );
}

export default App;
