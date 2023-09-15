import { IStudents } from 'types/student.type'
import http from 'utils/https'

export const getStudents = (page: number | string, limit: number | string) =>
  http.get<IStudents>('/students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
