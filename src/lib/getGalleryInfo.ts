import request from 'request-promise'
import cheerio from 'cheerio'

import { INFO_URL } from '../config/global.config'


// @ts-ignore
export const getGalleryInfo = async (galleryID: NozomiID): IGalleryInfo => {
  const url = `${INFO_URL}/galleries/${galleryID}.js`
  
  const response = await request.get(url)
  
  const json = JSON.parse(response.replace('var galleryinfo = ', '').trim())

  // get series
  const url2 = `${INFO_URL}/galleryblock/${galleryID}.html`
  const response2 = await request.get(url2)
  let series = ''
  // eslint-disable-next-line prefer-const
  let artist: string[] = []
  
  // loop each row to find series name
  response2.split('\n').forEach((row: any) => {
    if (row.indexOf('<a href="/series/') > -1) {
      series = cheerio.load(row).text()
    }
    if (row.indexOf('<a href="/artist/') > -1) {
      artist.push(cheerio.load(row).text())
    }
  })

  return {
    date: json.date,
    language: json.language,
    japaneseTitle: json.japanese_title,
    id: json.id,
    tags: json.tags.map((_tag: any) => ({ name: _tag.tag, gender: _tag.female == 1 ? 'female': 'male' })),
    type: json.type,
    languageLocalName: json.language_localname,
    title: json.title,
    images: json.files,
    artist,
    series,
  }
}
