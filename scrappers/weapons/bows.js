module.exports = {
  name: 'Bows',
  pageTitle: 'Category:Bows',
  path: './assets/wiki/weapons/bows.json',
  info: ({ $, item }) => {
    const attack = parseInt($(item[2]).text())
    const requirement = `${$(item[3]).text().replace('\n', '')} Distance`
    const minStat = parseInt($(item[5]).text())
    const maxStat = parseInt($(item[4]).text())

    return {
      attack,
      requirement,
      minStat,
      maxStat
    }
  }
}
