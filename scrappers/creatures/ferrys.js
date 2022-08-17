module.exports = {
  name: 'Ferrys',
  pageTitle: 'Category:Ferrys',
  path: './assets/wiki/creatures/ferrys.json',
  info: ({ $, item }) => {
    const location = $(item[2]).children().text()
    const destinations = $(item[3]).find('a').map((_, v) => $(v).text()).toArray()

    return {
      location,
      destinations
    }
  }
}
