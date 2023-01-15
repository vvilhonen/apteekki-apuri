const results = document.getElementById("txtApteekkilista")

if (results && results.children.length > 0) {
  const { container, cb } = createFilterUI()
  results.prepend(container)

  cb.addEventListener("change", (e) => {
    const checked = e.target.checked
    for (const e of results.querySelectorAll("div.apteekki")) {
      if (!checked) {
        e.style.display = ""
      } else if (e.querySelector(".varastossa.ei")) {
        e.style.display = "none"
      }
    }
  })
}

function createFilterUI() {
  const cb = document.createElement("input")
  cb.type = "checkbox"
  cb.style.appearance = "auto"
  const l = document.createElement("label")
  l.style.cursor = "pointer"
  l.appendChild(cb)
  const text = document.createTextNode("Näytä vain apteekit, joilla varastossa")
  l.appendChild(text)

  const div = document.createElement("div")
  div.style.margin = "20px 20px 0 20px"
  div.appendChild(l)

  return { container: div, cb }
}
