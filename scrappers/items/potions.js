module.exports = {
  name: 'Potions',
  pageTitle: 'Category:Potions',
  path: './assets/wiki/items/potions.json',
  info: ({ $, item }) => {
    const healthRestored = parseInt($(item[2]).text())
    const manaRestored = parseInt($(item[3]).text())
    const weight = parseFloat($(item[4]).text())

    return {
      healthRestored,
      manaRestored,
      weight
    }
  }
}
