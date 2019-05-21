import * as React from 'react'
import styled from 'styled-components'
import { BasicBeep } from './constants/audio'
import useTimer from './mixins/useTimer'
import usePlayerMarker, {
  choicePlayerMarkerAllow
} from './mixins/usePlayerMarker'

import Main from './styles/Main'
import Reset from './styles/Reset'
import Input from './components/Input'

const App: React.FC = () => {
  const [started, setStarted] = React.useState(false)

  const [time, resetTimer] = useTimer(30000)
  const resetTimerAndInitBeep = (ms: number) => {
    BasicBeep.play()
    resetTimer(ms)
  }
  const [playerMarker, setNextMarker] = usePlayerMarker()

  const [intervalSecond, setIntervalSecond] = React.useState(30)
  const changeIntervalSecond = React.useCallback((value: string) => {
    const num = Number(value)
    if (isNaN(num)) return
    setIntervalSecond(num)
  }, [])
  const intervalSecondStr = React.useMemo(() => intervalSecond.toString(), [
    intervalSecond
  ])

  const clickStart = () => {
    setStarted(true)
    resetTimerAndInitBeep(intervalSecond * 1000)
    setNextMarker()
  }

  return (
    <>
      <Main />
      <Reset />
      <Container>
        {started ? (
          <Inner>
            <Allow onClick={clickStart}>
              {choicePlayerMarkerAllow(playerMarker)}
            </Allow>
            <TimeText onClick={clickStart}>{time.getUTCMinutes()}</TimeText>
            <InputBlock>
              <InputLabel>DURATION</InputLabel>
              <InputWrap>
                <Input
                  value={intervalSecondStr}
                  onChange={changeIntervalSecond}
                  nativeType="number"
                />
              </InputWrap>
            </InputBlock>
          </Inner>
        ) : (
          <Inner>
            <TimeText onClick={clickStart}>START</TimeText>
          </Inner>

        )}
      </Container>
    </>
  )
}

const Container = styled.main`
  margin: 0 auto;
  height: 100vh;
  position: relative;

  background-color: black;
  color: white;
`

const Inner = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const InputBlock = styled.div`
  margin-top: 56px;
`

const InputLabel = styled.div`
  text-align: center;
`

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
`

const Allow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  margin: 0 auto;
  font-weight: bold;
  font-size: 128px;
`

const TimeText = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 76px;
  margin-top: 24px;
`

export default App
