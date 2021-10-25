import mongoose from 'mongoose'
import MongooseModel from './default.model'

const schema = new mongoose.Schema({
  date: String,
  language: String,
  japaneseTitle: String,
  artist: [String],
  id: Number,
  tags: [{
    name: String,
    gender: String,
  }],
  type: String,
  languageLocalName: String,
  title: String,
  images: [{
    name: String,
    height: Number,
    haswebp: Number,
    hash: String,
    hasavif: Number,
    width: Number,
  }],
  series: String,
})

class GalleryModel extends MongooseModel {
  model = mongoose.model('gallery', schema)
  
  async addItem(gallery: IGalleryInfo): Promise<void> {
    await this.add(gallery)
  }

  async getItem(galleryID: NozomiID): Promise<IGalleryInfo> {
    const result = await this.getOneByKeyValue('id', galleryID.toString())
    return result
  }
}

export default new GalleryModel()
