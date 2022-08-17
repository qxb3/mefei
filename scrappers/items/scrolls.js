module.exports = {
  name: 'Scrolls',
  pageTitle: 'Category:Scrolls',
  path: './assets/wiki/items/scrolls.json',
  info: ({ $, item }) => {
    const effect = $(item[2]).text().replace('\n', '')

    return { effect }
  }
}
