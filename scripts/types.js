import { getTypes, setType } from "./database.js"
const arrayOfTypes = getTypes()

export const Types = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const type of arrayOfTypes) {
        html += `<li>
            <input type="radio" name="type" value="${type.id}" /> ${type.name}
        </li>`
    }

    html += "</ul>"
    return html
}

document.addEventListener("change", (event) => {
    if (event.target.name === "type") {
        setType(parseInt(event.target.value))
    }
}
)
