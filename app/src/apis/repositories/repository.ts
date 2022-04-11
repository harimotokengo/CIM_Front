import axios from 'axios'

const baseDomain = 'http://localhost/'
const baseURL = `${baseDomain}/api`

const repository = axios.create({ baseURL })

export default (resource: string) => ({
  index() {
    return repository.get(resource)
  },
  show(id: number) {
    return repository.get(`${resource}/${id}`)
  },
  post(payload: any) {
    return repository.post(`${resource}`, payload)
  },
  delete(id: number) {
    return repository.delete(`${resource}/${id}`)
  },
})
