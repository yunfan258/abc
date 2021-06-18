export const getUsername = () => {
  let username
  if (localStorage.vueTp) {
    if (JSON.parse(localStorage.vueTp).username) {
      username = JSON.parse(localStorage.vueTp).username || ''
    }
  } else {
    username = ''
  }
  return username
}
