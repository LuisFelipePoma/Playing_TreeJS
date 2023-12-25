import * as THREE from 'three'
import {
  CSS3DObject,
  CSS3DRenderer
} from 'three/addons/renderers/CSS3DRenderer.js'

export class CreateText {
  // Variables
  renderer: CSS3DRenderer
  camera: THREE.PerspectiveCamera
  scene: THREE.Scene

  constructor ({
    cameraX,
    cameraY,
    cameraZ
  }: {
    cameraX: number
    cameraY: number
    cameraZ: number
  }) {
    // Create the variables needed for the scene, camera, and rendererF
    this.renderer = new CSS3DRenderer()
    this.scene = new THREE.Scene()
    this.renderer.setSize(window.innerWidth, window.innerHeight) // size
    document
      .querySelector('#create-text')
      ?.appendChild(this.renderer.domElement)
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    )
    this.camera.position.set(cameraX, cameraY, cameraZ)
    this.camera.lookAt(0, 0, 0)
  }

  add (label: CSS3DObject): void {
    this.scene.add(label)
  }

  render (): void {
    this.renderer.render(this.scene, this.camera)
  }

  createCSS3DObject (content: string): CSS3DObject {
    // convert the string to dome elements
    const div = document.createElement('div')
    div.innerHTML = content
    // set some values on the div to style it.
    // normally you do this directly in HTML and
    // CSS files.
    div.style.width = '350px'
    div.style.height = '350px'
    div.style.opacity = '0.8'
    div.style.borderRadius = '15%'
    div.style.boxShadow = '0 0 20px #000000'
    div.style.background = new THREE.Color(Math.random() * 0xffffff).getStyle()
    // create a CSS3Dobject and return it.
    const object = new CSS3DObject(div)
    return object
  }
}
