import fs from 'fs'


function getBlock(): any {

  const nozomiBlock = fs.readFileSync('./src/database/index-all.nozomi', null)
  return nozomiBlock
}

export function decodeBase64(data: string): any {
  return Buffer.from(data, 'base64').toString('utf8')
}

function toArrayBuffer(buf: Buffer) {
  const ab = new ArrayBuffer(buf.length);
  const view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
      view[i] = buf[i];
  }
  return ab;
}

export function resolveBlock(block: Buffer): Array<NozomiID> {

  const arrayBuffer = toArrayBuffer(block)
  // eslint-disable-next-line prefer-const
  let nozomiID = []

  const total = arrayBuffer.byteLength/4;
  const view = new DataView(arrayBuffer);
  for (let i = 0; i < total; i++) {
    nozomiID.push(view.getInt32(i*4, false /* big-endian */));
  }
  
  return nozomiID
}

export function getAllGalleryID(): number[] {
  
  const nozomiBlock = getBlock()
  return resolveBlock(nozomiBlock)
}
