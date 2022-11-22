import React from 'react'
import { render } from '@testing-library/react-native'
import TextHeading from './TextHeading'

describe('TextHeading', () => {
  it('shold match snapshot', () => {
    const { toJSON } = render(<TextHeading />)
    expect(toJSON()).toMatchSnapshot('TextHeading')
  })
})
