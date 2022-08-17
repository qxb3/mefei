module.exports = {
  name: 'Axes',
  pageTitle: 'Category:Axes',
  path: './assets/wiki/weapons/axes.json',
  info: ({ $, item }) => {
    const attack = parseInt($(item[2]).text())
    const requirement = `${$(item[3]).text().replace('\n', '')} Melee`
    const minStat = parseInt($(item[5]).text())
    const maxStat = parseInt($(item[4]).text())
    const defencePenalty = '-' + $(item[5]).text().replace('\n', '')

    return {
      attack,
      requirement,
      minStat,
      maxStat,
      defencePenalty
    }
  }
}
