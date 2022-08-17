module.exports = {
  name: 'Runes',
  pageTitle: 'Category:Runes',
  path: './assets/wiki/items/runes.json',
  info: ({ $, item }) => {
    const requirement = `${parseInt($(item[2]).text())} Magic`
    const createdBy = $(item[3]).find('a').map((_, v) => $(v).text()).toArray().join(' & ')
    const levelToCreate = parseInt($(item[4]).text())

    return {
      requirement,
      createdBy,
      levelToCreate
    }
  }
}
