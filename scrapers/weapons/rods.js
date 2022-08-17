module.exports = {
  name: 'Rods',
  pageTitle: 'Category:Rods',
  path: './assets/wiki/weapons/rods.json',
  info: ({ $, item }) => {
    const attack = parseInt($(item[2]).text())
    const requirement = `${$(item[3]).text().replace('\n', '')} Magic`
    const minStat = parseInt($(item[5]).text())
    const maxStat = parseInt($(item[4]).text())
    const manaPerShot = parseInt($(item[5]).text())

    return {
      attack,
      requirement,
      minStat,
      maxStat,
      manaPerShot
    }
  }
}
