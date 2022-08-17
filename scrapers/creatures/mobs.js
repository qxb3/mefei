module.exports = {
  name: 'Mobs',
  pageTitle: 'Category:Monsters',
  path: './assets/wiki/creatures/mobs.json',
  info: ({ $, item }) => {
    const health = parseInt($(item[2]).text())
    const experience = parseInt($(item[3]).text())
    const melee = parseInt($(item[4]).text())
    const distance = parseInt($(item[5]).text())
    const magic = parseInt($(item[6]).text())

    return {
      health,
      experience,
      melee,
      distance,
      magic
    }
  }
}
