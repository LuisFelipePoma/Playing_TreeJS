import * as THREE from 'three'
import {
  MAX_HEIGHT_SECTIONS_SCENE,
  MAX_WIDTH_SECTIONS_SCENE
} from '../consts/sections'

export class UpdateResource {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer

  constructor () {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    )
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(MAX_WIDTH_SECTIONS_SCENE, MAX_HEIGHT_SECTIONS_SCENE)
    document
      .querySelector('#update-resource')
      ?.appendChild(this.renderer.domElement)
    this.camera.position.set(0, 0, 100)
    this.camera.lookAt(0, 0, 0)
  }

  add (object: THREE.Object3D) {
    this.scene.add(object)
  }

  render () {
    this.renderer.render(this.scene, this.camera)
  }
}
