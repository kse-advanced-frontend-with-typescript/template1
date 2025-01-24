export const cart = new Map<>()

export function addToCard(item, quantity) {
  //
  console.log('Added to Card: ', item.name)
  console.log('Price: ', item.price)
  console.log('Cost: ', item.price * quantity)

  const newItem = {
    item,
    quantity,
  }
  const existingQuantity = cart.get(item.uuid)?.quantity
  if (existingQuantity) {
    newItem.quantity += existingQuantity
  }
  cart.set(item.uuid, newItem)
}
