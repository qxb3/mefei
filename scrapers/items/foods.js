module.exports = {
  name: 'Foods',
  pageTitle: 'Category:Food',
  path: './assets/wiki/items/foods.json',
  info: ({ $, item }) => {
    const nourishment = parseInt($(item[2]).text())
    const weight = parseFloat($(item[3]).text())

    return { nourishment, weight }
  }
}
