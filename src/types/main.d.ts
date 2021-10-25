declare type NozomiID = number

declare type IGalleryInfo = {
  date: String,
  language: String,
  japaneseTitle: String,
  id: Number,
  artist: String[],
  tags: Array<{
    name: String,
    gender: 'male'|'female',
  }>,
  type: String,
  languageLocalName: String,
  title: String,
  images: Array<{
    name: String,
    height: Number,
    haswebp: Number,
    hash: String,
    hasavif: Number,
    width: Number,
  }>,
  series: String,
}
