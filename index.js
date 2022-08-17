#!/usr/bin/env node

const cheerio = require('cheerio')

const MultiProgress = require('multi-progress')
const progress = new MultiProgress(process.stderr)

const { join } = require('path')
const readDir = require('klaw-sync')
const { outputFileSync } = require('fs-extra')

const { baseURL, fetchPage } = require('./utils')

async function main() {
  const scrapers = readDir(join(__dirname, './scrapers'), {
    filter: (item) => !item.path.split('.').includes('skip')
  })
    .filter(v => v.path.endsWith('.js'))
    .map(v => v.path)

  for (const scraper of scrapers) {
    const {
      name,
      pageTitle,
      categories = [],
      extraProps = {},
      info,
      customProps = () => {},
      path
    } = require(scraper)

    const page = await fetchPage(pageTitle)
    const $ = cheerio.load(page)
    const items = []

    const tables = $('.wikitable')
    for (let i = 0; i < tables.length; i++) {
      const table = tables[i]
      const pageItems = $(table).find('tr').slice(1)
      const bar = progress.newBar(`${name}${categories.length > 0 ? '/' + categories[i] : ''} [:bar] :percent :etas`, {
        total: pageItems.length + 1,
        complete: '=',
        incomplete: ' ',
        width: 35
      })

      let categoryImage = ''

      for (let j = 0; j < pageItems.length; j++) {
        const item = $(pageItems[j]).find('td')

        const name = $(item[1]).children().text()
        const image = baseURL + $(item[0]).children().children().attr('src')
        const fullInfo = baseURL + $(item[1]).children().attr('href')

        if (j === 0) categoryImage = image

        items.push({
          name,
          image,
          fullInfo,
          info: info({ $, item, category: categories[i], ...extraProps, categoryImage }),
          ...customProps({ $, item, category: categories[i], ...extraProps, categoryImage })
        })

        bar.tick()
      }

      outputFileSync(path, JSON.stringify(items, null, 2))
      bar.tick()
    }
  }
}

main()
