import { database } from "./database.js";

// Other modules invoke these function to GET their state.
export const getTypes = () => {
    return database.types.map(type => ({...type}))
}

export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const getOrderBuilder = () => {
    return database.orderBuilder
}




//Now you need to export functions whose responsibility is to SET state.

export const setType = (id) => {
    database.orderBuilder.typeId = id
    console.log(database.orderBuilder)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
    console.log(database.orderBuilder)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
    console.log(database.orderBuilder)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
    console.log(database.orderBuilder)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}



//function that takes temporary choices being stored in the orderBuilder state object and make them permanent.
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
