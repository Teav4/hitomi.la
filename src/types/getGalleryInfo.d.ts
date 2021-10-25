/**
 * Get Gallery Info
 */
declare type IGetGalleryInfo = (galleryID: NozomiID) => {
  date: String,
  language: String,
  japaneseTitle: String,
  id: Number,
  tags: Array<{
    name: String,
    gender: 'male'|'female',
  }>,
  type: String,
  languageLocalName: String,
  title: String,
  images: String[],
  series: String,
}
