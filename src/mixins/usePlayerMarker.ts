import * as React from 'react'

export enum PlayerMarkerAllow {
  Up = 0,
  Right,
  Down,
  Left
}
const usePlayerMarker = (): [PlayerMarkerAllow, () => void] => {
  const [marker, setMarker] = React.useState(PlayerMarkerAllow.Up)
  const setNextMarker = () => {
    if (marker === PlayerMarkerAllow.Left) {
      setMarker(PlayerMarkerAllow.Up)
      return
    }
    setMarker(marker + 1)
  }
  return [marker, setNextMarker]
}

export default usePlayerMarker
