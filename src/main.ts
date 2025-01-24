import { addToCard } from './add-to-card.js'
import { makeOrder } from './make-order.js'

addToCard(
  {
    name: 'TV',
    price: 110,
    uuid: '214ad8df-13a2-4104-aa58-5bb3192a5e16',
  },
  3,
)

addToCard(
  {
    name: 'iPhone',
    price: 90,
    uuid: 'abe37825-efb5-467f-8607-d3e052c15ec4',
  },
  5,
)

makeOrder('Bob', 'sunset boulevard', '3c')
