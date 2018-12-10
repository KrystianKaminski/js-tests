export const orderTotal = (arrayOfOrders) => (

    arrayOfOrders.reduce(
        (reduced, item, index, array) => {
            if (item.quantity) {
                return (reduced += item.price
                    * item.quantity)
            } else {
                return reduced += item.price
            }
        }
        ,0
    )
)
