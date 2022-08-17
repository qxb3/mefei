module.exports = {
  name: 'Necklaces',
  pageTitle: 'Category:Necklaces',
  path: './assets/wiki/equipments/necklaces.json',
  info: ({ $, item }) => {
    const requirement = `Level ${$(item[2]).text().replace('\n', '')}`
    const minStat = parseInt($(item[4]).text())
    const maxStat = parseInt($(item[3]).text())

    return {
      requirement,
      minStat,
      maxStat
    }
  }
}
