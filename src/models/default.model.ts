/* eslint-disable */
export default class MongooseModel {
  
  //@ts-ignore
  model:any = null

  async add(document: any) {
    const collection = new this.model(document)
    return await collection.save()
  }
  
  async getAll() {
    const result = await this.model.find({}, '-_id -__v')
    return result
  }

  async getOneByKeyValue(key: string, value: string) {
    let query = {}
    //@ts-ignore
    query[`${key}`] = value

    let result = await this.model.find(query, '-_id -__v').limit(1)
    return result[0]
  }

  async updateByKeyValue(key: string, value: string, document: any) {
    let query = {}
    //@ts-ignore
    query[`${key}`] = value

    await this.model.updateOne(query, document)
    return
  }

  async deleteByKeyValue(key: string, value: string) {
    let query = {}
    //@ts-ignore
    query[`${key}`] = value

    await this.model.deleteOne(query)
    return
  }
}
