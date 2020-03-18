import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Example from '.'

test('renders heading', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Example />
    </Provider>
  )

  expect(getByText(/Example Component/i)).toBeInTheDocument()
})
