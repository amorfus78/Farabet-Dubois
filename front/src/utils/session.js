export const setCookie = (name, value, maxAge = 60 * 60 * 24) => {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; secure; samesite=strict`
}

export const getCookie = (name) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

export const removeCookie = (name) => {
  document.cookie = `${name}=; path=/; max-age=0; secure; samesite=strict`
}

export const setToken = (token) => {
  setCookie('token', token)
}

export const getToken = () => {
  return getCookie('token')
}

export const removeToken = () => {
  removeCookie('token')
}

export const isAuthenticated = () => {
  return !!getToken()
}
