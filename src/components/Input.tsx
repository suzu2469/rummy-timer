import * as React from 'react'
import styled from 'styled-components'
import { Simulate } from 'react-dom/test-utils'

const createChangeValue = (f: (value: string) => void) => (
  e: React.ChangeEvent<HTMLInputElement>
) => f(e.target.value)

type Props = {
  value: string
  onChange: (value: string) => void
  nativeType?: 'number' | 'text' | 'password' | 'email'
  className?: string
}
const Input = ({
  value,
  onChange,
  nativeType,
  ...props
}: Props): React.ReactElement => {
  const changeValue = React.useCallback(createChangeValue(onChange), [])

  return <Outer value={value} onChange={changeValue} {...props} />
}

const Outer = styled.input`
  text-align: center;
  font-size: 24px;
  background-color: transparent;
  border-style: none;
  width: 128px;
  height: 56px;
  color: white;
`

export default Input
