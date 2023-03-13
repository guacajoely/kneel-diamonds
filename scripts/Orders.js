import { getOrders, getMetals, getSizes, getStyles, getTypes } from "./database.js"
const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const types = getTypes()




const buildOrderListItem = (order) => {

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find((metal) => {
            return metal.id === order.metalId
    })

    const foundSize = sizes.find((size) => {
        return size.id === order.sizeId
    })

    const foundStyle = styles.find((style) => {
        return style.id === order.styleId
    })

    const foundType = types.find((type) => {
        return type.id === order.typeId
    })

    let totalCost = 0

    if(foundMetal && foundSize && foundStyle && foundType){
        totalCost = (foundMetal.price + foundSize.price + foundStyle.price) * foundType.priceAdjustment
    }

    else{window.alert("Please select an option for each feature to submit an order")
        location.reload()
        return
    }


    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    })
    
    return `<li>
                Order #${order.id} cost ${costString}
            </li>`

}




export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

