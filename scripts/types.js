import { getTypes, setType, getOrderBuilder } from "./dataAccess.js"
const arrayOfTypes = getTypes()

export const Types = () => {
    let html = "<ul>"
    
    //WE HAVE TO GET THE CURRENT ORDER INSIDE THE FUNCTION OR ELSE IT GETS STUCK WITH THE FIRST SELECTIONS
    const currentOrder = getOrderBuilder()

    for (const type of arrayOfTypes) {  
        html += `<li><input type="radio" name="type" value="${type.id}"`

            if(currentOrder.typeId === type.id){
                html += 'checked="checked"'
            }
            
        html += `/> ${type.name}</li>`
    }

    html += "</ul>"
    return html
}


document.addEventListener("change", (event) => {
    if (event.target.name === "type") {
        setType(parseInt(event.target.value))
    }
})
