import axios from 'axios'

export function getExampleMsg() {
  return axios('/api/accounts/example-message', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', },
  }).then(res => res.data)
}

export default { getExampleMsg }
