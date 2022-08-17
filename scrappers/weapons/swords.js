module.exports = {
  name: 'Swords',
  pageTitle: 'Category:Swords',
  path: './assets/wiki/weapons/swords.json',
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
