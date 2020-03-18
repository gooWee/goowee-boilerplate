import React, { useState, useEffect }  from 'react';

import { ExampleWrapper } from '../../components'
import api from '../../api'

function Example() {
  const [exampleMsg, setExampleMsg] = useState(null)

  useEffect(() => {
    api.accounts.getExampleMsg()
      .then(res => setExampleMsg(res.msg))
  }, [])

  return (
    <ExampleWrapper>
      <h1>Example Component</h1>
      <p>Message from server: {exampleMsg}</p>
    </ExampleWrapper>
  );
}

export default Example;
