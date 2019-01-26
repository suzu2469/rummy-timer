import * as React from 'react'
import styled from 'styled-components'
import { BasicBeep } from './constants/audio'
import useTimer from './mixins/useTimer'
import usePlayerMarker, { PlayerMarkerAllow } from './mixins/usePlayerMarker'

const App: React.FC = () => {
  const [time, resetTimer] = useTimer(30000)
  const resetTimerAndInitBeep = (ms: number) => {
    BasicBeep.play()
    resetTimer(ms)
  }
  const [intervalSecond, setIntervalSecond] = React.useState(30)
  const [playerMarker, setNextMarker] = usePlayerMarker()

  const clickStart = () => {
    resetTimerAndInitBeep(intervalSecond * 1000)
    setNextMarker()
  }

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
        <button onClick={e => clickStart()}>Start</button>
      </div>
      <div>{time.getUTCMinutes()}</div>
      <div>
        {playerMarker === PlayerMarkerAllow.Up
          ? '↑'
          : playerMarker === PlayerMarkerAllow.Right
          ? '→'
          : playerMarker === PlayerMarkerAllow.Down
          ? '↓'
          : playerMarker === PlayerMarkerAllow.Left
          ? '←'
          : null}
      </div>
    </div>
  )
}

const Main = styled.main``

export default App
