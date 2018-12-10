const orders = [
    {
        name: 'Lager',
        price: 10
    },
    {
        name: 'APA',
        price: 15
    },
]

const orderTotal = (arrayOfOrders) => {
    return arrayOfOrders.reduce(
        (reduced, item, index, array) => {
            reduced = item.price + reduced
            return reduced
        }, 0
    )
}

console.log(orderTotal(orders)) // should log 25

if (
    orderTotal(orders) !== 25
) {
    throw new Error('Happy path failed!')
}

if (
    orderTotal([]) !== 0
) {
    throw new Error('Empty order list must equals 0')
}