import * as React from 'react'
import { BasicBeep } from '../constants/audio'
import { BaseYear, BaseMonth } from '../constants/application'

export const useTimer = (initialMS: number): [Date, (ms: number) => void] => {
  const initialTime = new Date(
    Date.UTC(BaseYear, BaseMonth, 1, 0, initialMS / 1000)
  )
  const [time, setTime] = React.useState(initialTime)
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (time.getUTCMinutes() <= 0) {
        BasicBeep.play()
        return
      }
      setTime(new Date(time.setMinutes(time.getUTCMinutes() - 1)))
    }, 1000)
    return () => clearInterval(interval)
  })
  return [
    time,
    (ms: number) =>
      setTime(new Date(Date.UTC(BaseYear, BaseMonth, 1, 0, ms / 1000)))
  ]
}
