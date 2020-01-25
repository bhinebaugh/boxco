import { calculateArea, calculatePrice } from "./selectors"



test("no quote with zero quantity", () => {
    let settings = {
        cardboard: "B",
        dimensions: {
            height: 1,
            length: 1,
            width: 1
        },
        printQuality: "2-color",
        selectedExtras: [],
        quantity: 0,
    }
    let price=calculatePrice(settings)
    expect(price).toBeNull()
})
test("no quote with any dimension zero", () => {
    let settings = {
        cardboard: "B",
        dimensions: {
            height: 1,
            length: 0,
            width: 1
        },
        printQuality: "2-color",
        selectedExtras: [],
        quantity: 1,
    }
    let price=calculatePrice(settings)
    expect(price).toBeNull()
})

// four steps
// which are the specifications
// that determine the cost
// options for 1,2,3 are required
// --> quote
test("no quote if no cardboard grade chosen", () => {
    let settings = {
        cardboard: null,
        dimensions: {
            height: 1,
            length: 1,
            width: 1
        },
        printQuality: "2-color",
        selectedExtras: [],
        quantity: 1,
    }
    let price=calculatePrice(settings)
    expect(price).toBeNull()
})

test("no quote if no print quality chosen", () => {
    let settings = {
        cardboard: "C",
        dimensions: {
            height: 1,
            length: 1,
            width: 1
        },
        printQuality: null,
        selectedExtras: [],
        quantity: 1,
    }
    let price=calculatePrice(settings)
    expect(price).toBeNull()
})

// 1. dimensions & quantity
// requires width, height, length
// requires quantity

// 2. cardboard grade
// A, B, or C
// per square meter
// > 2m^2 --> C is not available
test("changing cardboard grade from B to A doubles price of unprinted box", () => {
    let settings = {
        cardboard: "B",
        dimensions: {
            height: 1,
            length: 1,
            width: 1
        },
        printQuality: "no-printing",
        selectedExtras: [],
        quantity: 1,
    }
    let priceB = calculatePrice(settings)
    settings.cardboard = "A"
    let priceA = calculatePrice(settings)
    expect(priceA).toBeGreaterThan(priceB)
    expect(priceA).toBe(2*priceB)
})

test("grade C not available for boxes larger than 2M^2", () => {
    let settings = {
        cardboard: "C",
        dimensions: {
            height: .2,
            length: 1,
            width: 1
        },
        printQuality: null,
        selectedExtras: [],
        quantity: 1,
    }
    let area = calculateArea(settings.dimensions)
    let price=calculatePrice(settings)
    expect(area).toBeGreaterThan(2)
    expect(price).toBeNull()
})

// 3. print quality
// plain, black, 2-color, 3-color
// per square meter
// branded --> total price - 5%
// ?: branding is independent of logo option?
test("print quality: black adds 5 cents/m^2 compared to no printing", () => {
    let settings = {
        cardboard: "B",
        dimensions: {
            height: 1,
            length: 1,
            width: 1
        },
        printQuality: "no-printing",
        selectedExtras: [],
        quantity: 1,
    }
    const pricePlain = calculatePrice(settings)
    settings.printQuality = "black-only"
    const priceBlack = calculatePrice(settings)
    const { dimensions } = settings
    const area = calculateArea(dimensions)
    const surcharge = area * 0.05
    expect(priceBlack).toBe(pricePlain+surcharge)
})

test("print quality: branding reduces total price by 5%", () => {
    let settings = {
        cardboard: "B",
        currentStep: null,
        dimensions: {
            height: 1,
            length: 1,
            width: 1
        },
        printQuality: "FantasticBoxCo-branding",
        selectedExtras: [],
        quantity: 1,
    }
    const priceBranded = calculatePrice(settings)
    settings.printQuality = "no-printing"
    const pricePlain = calculatePrice(settings)
    expect(priceBranded).toBe(0.95 * pricePlain)
})

// 4. extras
// not required
// $.10 per handle
// not grade A -> no reinforced bottom
// $.05 per reinforced bottom
test("extras are not required", () => {
    let settings = {
        cardboard: "B",
        dimensions: {
            height: 1,
            length: 1,
            width: 1
        },
        printQuality: "no-printing",
        selectedExtras: [],
        quantity: 1,
    }
    const price = calculatePrice(settings)
    expect(price).not.toBe(0)
})

test("extras: handles adds 20 cents to two boxes", () => {
    let settings = {
        cardboard: "B",
        dimensions: {
            height: 1,
            length: 1,
            width: 1
        },
        printQuality: "no-printing",
        selectedExtras: [],
        quantity: 2,
    }
    const price = calculatePrice(settings)
    settings.selectedExtras.push("handles")
    const priceWithHandles = calculatePrice(settings)
    expect(priceWithHandles - price).toBeCloseTo(0.2, 3)
})

test("extras: reinforced adds 15 cents to three boxes", () => {
    let settings = {
        cardboard: "A",
        dimensions: {
            height: 1,
            length: 1,
            width: 1
        },
        printQuality: "no-printing",
        selectedExtras: [],
        quantity: 3,
    }
    const price = calculatePrice(settings)
    settings.selectedExtras.push("reinforced-bottom")
    const priceReinforced = calculatePrice(settings)
    expect(priceReinforced - price).toBeCloseTo(0.15, 3)
})

// mutually exclusive options --> validation error
test("reinforced bottom is only available with grade A", () => {
    let settings = {
        cardboard: "B",
        dimensions: {
            height: 1,
            length: 1,
            width: 1
        },
        printQuality: "no-printing",
        selectedExtras: ["reinforced-bottom"],
        quantity: 1,
    }
    const price = calculatePrice(settings)
    expect(price).toBeNull()
})
// four steps -> accurate quote
