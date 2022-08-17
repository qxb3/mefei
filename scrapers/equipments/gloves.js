module.exports = {
  name: 'Gloves',
  pageTitle: 'Category:Gloves',
  categories: ['None', 'Light', 'Medium', 'Heavy'],
  path: './assets/wiki/equipments/gloves.json',
  info: ({ $, item }) => {
    const armour = parseInt($(item[2]).text())
    const requirement = `Level ${$(item[3]).text().replace('\n', '')}`
    const minStat = parseInt($(item[5]).text())
    const maxStat = parseInt($(item[4]).text())

    return {
      armour,
      requirement,
      minStat,
      maxStat
    }
  },
  customProps: ({ category, categoryImage }) => {
    return {
      category,
      categoryImage
    }
  }
}
