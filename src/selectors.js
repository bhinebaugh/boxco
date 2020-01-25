export const calculateArea = ({height, length, width}) => {
    const sides = (
        height * length +
        height * width +
        length * width
    )
    return 2 * sides
}

export const calculatePrice = ({dimensions, quantity, cardboard, printQuality, selectedExtras}) => {
    if (quantity.amount <= 0) { return null }
    if (Object.keys(dimensions).some(key => dimensions[key] <= 0)) { return null }
    if (!cardboard) { return null }
    if (!printQuality) { return null }

    // 1. dimensions & quantity
    // requires width, height, length
    // requires quantity
    let isDiscounted = false
    let price = 0
    const areaPerBox = calculateArea(dimensions)
    const areaTotal = areaPerBox * quantity.amount

    // 2. cardboard grade
    // A, B, or C
    // per square meter
    // > 2m^2 --> C is not available
    let cardboardCharge = 0
    switch(cardboard) {
        case "A":
            cardboardCharge = areaTotal * 0.2
            break
        case "B":
            cardboardCharge = areaTotal * 0.1
            break
        case "C":
            cardboardCharge = areaTotal * 0.05
            break
        default:
            //
    }
    price = price + cardboardCharge

    // 3. print quality
    // plain, black, 2-color, 3-color
    // per square meter
    // branded --> total price - 5%
    let printCharge = 0
    switch(printQuality) {
        case "3-color":
            // cost: 0.2
            printCharge = areaTotal * 0.2
            break
        case "2-color":
            // cost: 0.1
            printCharge = areaTotal * 0.1
            break
        case "black-only":
            // cost: 0.05
            printCharge = areaTotal * 0.05
        case "no-printing":
            // cost: 0
            break
        case "FantasticBoxCo-branding":
            // discount
            isDiscounted = true
        default:
            //
    }
    price = price + printCharge

    // 4. extras
    // not required
    // $.10 per handle
    // not grade A -> no reinforced bottom
    // $.05 per reinforced bottom

    if (selectedExtras.includes("handles")) {
        price = price + (quantity.amount * 0.1)
    }
    if (selectedExtras.includes("reinforced-bottom")) {
        if (cardboard == "A") { return null }
        price = price + (quantity.amount * 0.05)
    }


    if (isDiscounted) {
        let discount = 0.05 * price
        price = price - discount
    }

    return price
}