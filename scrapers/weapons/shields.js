module.exports = {
  name: 'Shields',
  pageTitle: 'Category:Shields',
  path: './assets/wiki/weapons/shields.json',
  info: ({ $, item }) => {
    const attacker = $(item[2]).text().replace('\n', '')
    const requirement = `${$(item[3]).text().replace('\n', '')} Defence`
    const minStat = parseInt($(item[5]).text())
    const maxStat = parseInt($(item[4]).text())

    return {
      attacker,
      requirement,
      minStat,
      maxStat
    }
  }
}
