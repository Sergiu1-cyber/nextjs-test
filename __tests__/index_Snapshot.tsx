import {render} from '@testing-library/react'
import Home from '../pages'

it('Snapshot Home', () => {
  const {container} = render(<Home />)
  expect(container).toMatchSnapshot()
})

