const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  const username = form.username.value
  const password = form.password.value

  const auth = authentication(username, password)

  if (auth) {
    window.location.href = "index.html"
    alert("correct")
  }
  else {
    alert("wrong")
  }
})

function authentication(username, password) {
  if (username === "admin" && password == "password") {
    return true
  }
  else {
    return false
  }
}
