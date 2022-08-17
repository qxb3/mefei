module.exports = {
  name: 'Shopkeepers',
  pageTitle: 'Category:Shopkeepers',
  path: './assets/wiki/creatures/shopkeepers.json',
  info: ({ $, item }) => {
    const location = $(item[2]).children().text()
    const store = $(item[3]).text().replace(/(amp;|\n)/g, '')

    return { location, store }
  }
}
