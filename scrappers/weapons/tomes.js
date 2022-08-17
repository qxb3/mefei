module.exports = {
  name: 'Tomes',
  pageTitle: 'Category:Tomes',
  path: './assets/wiki/weapons/tomes.json',
  info: ({ $, item }) => {
    const requirement = `${$(item[2]).text().replace('\n', '')} Magic`
    const minStat = parseInt($(item[4]).text())
    const maxStat = parseInt($(item[3]).text())

    return {
      requirement,
      minStat,
      maxStat,
    }
  }
}
