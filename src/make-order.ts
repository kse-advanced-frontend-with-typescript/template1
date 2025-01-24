import { cart } from './add-to-card.js'

export function makeOrder(name, street, building) {
  let total = 0
  console.log('===================')
  console.log('===================')
  console.log(`Hi ${name}! Your order will be delivered to`)
  console.log('street:', street)
  console.log('building:', building)
  cart.forEach(item => {
    console.log(item.item.name)
    total += item.quantity * item.item.price
  })
  console.log('===================')
  console.log('$', total)
}
