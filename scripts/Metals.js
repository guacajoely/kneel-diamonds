import { getMetals, setMetal, getOrderBuilder } from "./dataAccess.js"
const metals = getMetals()

document.addEventListener("change", (event) => {
    if (event.target.name === "metal") {
        setMetal(parseInt(event.target.value))
    }
})

export const Metals = () => {
    let html = "<ul>"

    //WE HAVE TO GET THE CURRENT ORDER INSIDE THE FUNCTION OR ELSE IT GETS STUCK WITH THE FIRST SELECTIONS
    const currentOrder = getOrderBuilder()

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}"`

            if(currentOrder.metalId === metal.id){
                html += 'checked="checked"'
            }
            
        html += `/> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

