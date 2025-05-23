// 導出模組(常數)，常數只能"命名導出(named export)"
export const products = [
  {
    id: 1,
    picture: 'https://via.placeholder.com/48',
    stock: 5,
    name: 'iPhone 12 Pro',
    price: 25000,
    tags: '蘋果,大螢幕',
  },
  {
    id: 2,
    picture: 'https://via.placeholder.com/48',
    stock: 5,
    name: 'iPhone 12',
    price: 15000,
    tags: '蘋果,小螢幕',
  },
  {
    id: 3,
    picture: 'https://via.placeholder.com/48',
    stock: 10,
    name: 'iPhone SE',
    price: 12500,
    tags: '蘋果,小螢幕',
  },
  {
    id: 4,
    picture: 'https://via.placeholder.com/48',
    stock: 10,
    name: 'iPhone XS',
    price: 22000,
    tags: '蘋果,大螢幕',
  },
  {
    id: 5,
    picture: 'https://via.placeholder.com/48',
    stock: 6,
    name: 'Google Pixel 5',
    price: 17000,
    tags: '安卓,大螢幕',
  },
  {
    id: 6,
    picture: 'https://via.placeholder.com/48',
    stock: 6,
    name: 'Google Pixel 4',
    price: 15500,
    tags: '安卓,大螢幕',
  },
]

export const brands = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Google' },
  { id: 3, name: '三星' },
]

// 預設導出(default)只能是函式/類別 function/class，一個檔案只能有一個預設導出
export default function sum(x, y) {
  return x + y
}

// 二選一: 相當於直接寫export在函式/類別前面 
// export default sum

// 二選一: 相當於直接寫export在 const/let/var/function/class前面
// export { products,brands }
