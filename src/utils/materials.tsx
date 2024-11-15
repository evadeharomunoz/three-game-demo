import { MeshNormalMaterial, MeshPhongMaterial } from 'three';

export const material = new MeshNormalMaterial();

export const waterMaterial = new MeshPhongMaterial({
  color: 0x1e90ff,
  transparent: true,
  opacity: 0.5,
});

export const eventMaterial = new MeshPhongMaterial({
  color: 0x1e9000,
});

export const constructionMaterial = new MeshPhongMaterial({
  color: 0xb22222,
});
