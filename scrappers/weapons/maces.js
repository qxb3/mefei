module.exports = {
  name: 'Maces',
  pageTitle: 'Category:Maces',
  path: './assets/wiki/weapons/maces.json',
  info: ({ $, item }) => {
    const attack = parseInt($(item[2]).text())
    const requirement = `${$(item[3]).text().replace('\n', '')} Melee`
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
