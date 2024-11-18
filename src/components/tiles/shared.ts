import { BoxGeometry, Color, MeshBasicMaterial, MeshNormalMaterial, SphereGeometry } from 'three'

export const spacing = 1.05
const color = new Color()

// Shapes
export const xSize = 5
export const zSize = xSize
export const square = new BoxGeometry(xSize, 1, zSize)
export const circle = new SphereGeometry(1, 32)

// Materials
const baseMaterial = new MeshBasicMaterial({ color: 0x00ff00 })
export const voidMaterial = baseMaterial.clone()
voidMaterial.color = color.clone().setHex(0xffffff)
voidMaterial.transparent = true;
voidMaterial.opacity = 0; 

export const simple_tileMaterial = new MeshNormalMaterial();

export const eventMaterial = baseMaterial.clone()
eventMaterial.color = color.clone().setHex(0xffa500)

export const waterMaterial = baseMaterial.clone()
waterMaterial.color = color.clone().setHex(0x1e90ff)

export const close_waterMaterial = baseMaterial.clone()
close_waterMaterial.color = color.clone().setHex(0xff0000)

export const constructionMaterial = baseMaterial.clone()
constructionMaterial.color = color.clone().setHex(0xffff00)

export const userMaterial = baseMaterial.clone()
userMaterial.color = color.clone().setRGB(238, 255, 187)
