import { getSizes, setSize, getOrderBuilder } from "./dataAccess.js"
const sizes = getSizes()

document.addEventListener("change", (event) => {
    if (event.target.name === "size") {
        setSize(parseInt(event.target.value))
    }
})

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {

        //WE HAVE TO GET THE CURRENT ORDER INSIDE THE FUNCTION OR ELSE IT GETS STUCK WITH THE FIRST SELECTIONS
        const currentOrder = getOrderBuilder()

        if(currentOrder.sizeId === size.id){
            return `<li>
                <input type="radio" name="size" value="${size.id}" checked="checked"/> ${size.carets}
            </li>`
            }

        else{
            return `<li>
            <input type="radio" name="size" value="${size.id}"/> ${size.carets}
        </li>`
        }
    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")
    html += "</ul>"

    return html
}

