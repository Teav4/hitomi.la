import { decodeBase64, getAllGalleryID } from '../lib/decoder'

test("base64 decode", () => {
  expect(decodeBase64('dGVzdCBvayE=')).toBe('test ok!')
})

test('get galleryID', () => {
  let gallery = getAllGalleryID()
  console.log(gallery)

  expect(gallery).toBeInstanceOf(Array)
  expect(gallery.length).not.toBe(0)
})

