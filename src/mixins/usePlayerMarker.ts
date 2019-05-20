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

export function choicePlayerMarkerAllow(marker: PlayerMarkerAllow) {
  switch (marker) {
    case PlayerMarkerAllow.Up:
      return '↑'

    case PlayerMarkerAllow.Left:
      return '←'

    case PlayerMarkerAllow.Down:
      return '↓'

    case PlayerMarkerAllow.Right:
      return '→'

    default:
      return ''
  }
}

export default usePlayerMarker
