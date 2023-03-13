import { getStyles, setStyle, getOrderBuilder } from "./dataAccess.js"
const styles = getStyles()

document.addEventListener("change", (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {

        //WE HAVE TO GET THE CURRENT ORDER INSIDE THE FUNCTION OR ELSE IT GETS STUCK WITH THE FIRST SELECTIONS
        const currentOrder = getOrderBuilder()

        if(currentOrder.styleId === style.id){
        return `<li>
            <input type="radio" name="style" value="${style.id}" checked="checked"/> ${style.style}
        </li>`
        }

        else{
            return `<li>
            <input type="radio" name="style" value="${style.id}"/> ${style.style}
        </li>`
        }
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</ul>"

    return html
}

