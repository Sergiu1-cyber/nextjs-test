import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from "../pages";

describe('Test Home Page', () => {
  
  it('Render Title', () => {
    render(<Home />)
    const Title = screen.getByText(/home page/i)
    expect(Title).toBeInTheDocument()
  })
})

