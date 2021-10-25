import { getGalleryInfo } from '../lib/getGalleryInfo'

test('get gallery info', async () => {
  let result = await getGalleryInfo(2045125)
  console.log(result)

  expect(result).toHaveProperty('title')
  expect(result).toHaveProperty('languageLocalName')
  expect(result).toHaveProperty('id')
  expect(result).toHaveProperty('tags')
  expect(result).toHaveProperty('type')
  expect(result).toHaveProperty('japaneseTitle')
  expect(result).toHaveProperty('language')
  expect(result).toHaveProperty('date')
  expect(result).toHaveProperty('images')
  expect(result).toHaveProperty('series')

  expect(result.date).toBe('2021-10-24 18:38:00-05')
  expect(result.title).toBe('Nurse AYM…')
  expect(result.series).toBe('love live nijigasaki high school idol club')
})
