import React, { useState, useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ExampleWrapper } from '../../components'
import api from '../../api'
import { getUsers, selectUsers } from '../../redux/exampleSlice'

function Example() {
  const dispatch = useDispatch()

  const users = useSelector(selectUsers)

  const [exampleMsg, setExampleMsg] = useState(null)

  useEffect(() => {
    api.accounts.getExampleMsg()
      .then(res => setExampleMsg(res.msg))

    dispatch(getUsers())
  }, [dispatch])

  return (
    <ExampleWrapper>
      <h1>Example Component</h1>
      <p>Message from server: {exampleMsg}</p>
      <ul>Users:
        {users.map(user =>
          <li key={user.email}>{user.email}</li>
        )}
      </ul>
    </ExampleWrapper>
  )
}

export default Example
