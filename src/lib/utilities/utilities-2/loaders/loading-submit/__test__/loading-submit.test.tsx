import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import LoadingSubmit from '../LoadingSubmit'

describe('Loading Submit component', () => {
  it('Loading Submit  correctly', () => {
    render(<LoadingSubmit />)
    const component = screen.getByTestId('LoadingSubmit')
    expect(component).toBeInTheDocument()
  })
})
