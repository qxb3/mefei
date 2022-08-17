module.exports = {
  name: 'Ammunitions',
  pageTitle: 'Category:Ammunition',
  path: './assets/wiki/items/ammunitions.json',
  info: ({ $, item }) => {
    const requirement = `${parseInt($(item[2]).text())} Distance`
    const bonusDistance = parseInt($(item[3]).text())

    return { requirement, bonusDistance }
  }
}
