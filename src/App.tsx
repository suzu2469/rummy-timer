import * as React from 'react'
import styled from 'styled-components'
import { BaseYear, BaseMonth } from './constants/application'
import { BasicBeep } from './constants/audio'
import { useTimer } from './mixins/useTImer'

const App: React.FC = () => {
  const [time, resetTimer] = useTimer(30000)
  const resetTimerAndInitBeep = (ms: number) => {
    BasicBeep.play()
    resetTimer(ms)
  }
  const [intervalSecond, setIntervalSecond] = React.useState(30)

  return (
    <div>
      <div>
        <input
          type="number"
          value={intervalSecond}
          onChange={e => setIntervalSecond(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={e => resetTimerAndInitBeep(intervalSecond * 1000)}>
          Reset
        </button>
      </div>
      <div>{time.getUTCMinutes()}</div>
    </div>
  )
}

const Main = styled.main``

export default App
