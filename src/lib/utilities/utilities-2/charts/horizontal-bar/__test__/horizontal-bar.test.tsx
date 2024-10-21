import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import HorizontalBar from '../horizontal-bar'

describe('HorizontalBarComponent', () => {
  it('HorizontalBar should render correctly', () => {
    render(<HorizontalBar />)
    const bar = screen.getByTestId('Horizontal-Bar')
    expect(bar).toBeInTheDocument()
  })
})
