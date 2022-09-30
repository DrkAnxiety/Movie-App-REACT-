const URL_API = 'https://api.themoviedb.org/3'
const HEADER = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTk3YzEyNzQzZmFkZmVjMTEzNmUwMWQ5YTRkNDE2MCIsInN1YiI6IjYyYmU2MmI3ZmJhNjI1MDBlYTMyNDI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QHZysOoZj2GSL-0zIe4h4V37u8sMxlOCw12ploQNGTA',
    'Content-Type': 'application/json;charset=utf-8',
  },
}

export const Get = (path) => {
 return fetch(`${URL_API}${path}`, HEADER)
 .then((resp) => resp.json())
}