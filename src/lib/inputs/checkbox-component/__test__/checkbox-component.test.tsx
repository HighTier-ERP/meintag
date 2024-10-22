import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import CheckBox from '..'

describe('Control Sets Navigation Component', () => {
  it('Control Sets should render correctly', () => {
    render(<CheckBox />)
    const id = screen.getByTestId('checkbox')
    expect(id).toBeInTheDocument()
  })
})
