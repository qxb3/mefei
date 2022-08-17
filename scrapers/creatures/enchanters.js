module.exports = {
  name: 'Enchanters',
  pageTitle: 'Category:Enchanters',
  path: './assets/wiki/creatures/enchanters.json',
  info: ({ $, item }) => {
    const expertise = $(item[2]).children().next().text()
    const location = $(item[3]).children().text()
    const gearLevelRange = $(item[4]).text().replace('\n', '')

    return {
      expertise,
      location,
      gearLevelRange
    }
  }
}
