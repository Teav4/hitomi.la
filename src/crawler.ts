import galleryModel from './models/gallery.model'
import utils from './lib'

export default function crawler(/* gallery: IGalleryInfo */): void {
  const allGallery = utils.getAllGalleryID()
  // eslint-disable-next-line prefer-const
  let gallery2 = utils.getAllGalleryID()
  
  setInterval(() => {
    if (gallery2.length === 0) {
      console.log('done.')
    }

    const split = gallery2.splice(0, 5)

    split.forEach(async (galleryID: NozomiID) => {
      const info = await utils.getGalleryInfo(galleryID)
      await galleryModel.addItem(info)

      console.log(`${allGallery.indexOf(galleryID)}. ${galleryID}`)
    })

  }, 1000)

}
