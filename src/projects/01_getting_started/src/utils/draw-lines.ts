import * as THREE from 'three'
import {
  MAX_HEIGHT_SECTIONS_SCENE,
  MAX_WIDTH_SECTIONS_SCENE
} from '../consts/sections'

export class DrawLine {
  // Variables
  renderer: THREE.WebGLRenderer
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
    this.renderer = new THREE.WebGLRenderer()
    this.scene = new THREE.Scene()
    this.renderer.setSize(MAX_WIDTH_SECTIONS_SCENE, MAX_HEIGHT_SECTIONS_SCENE) // size
    this.renderer.setSize(
      MAX_WIDTH_SECTIONS_SCENE / 4,
      MAX_HEIGHT_SECTIONS_SCENE,
      false
    ) // resolution
    document.querySelector('#draw-lines')?.appendChild(this.renderer.domElement)
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    )
    this.camera.position.set(cameraX, cameraY, cameraZ)
    this.camera.lookAt(0, 0, 0)
  }

  add (line: THREE.Line): void {
    this.scene.add(line)
  }

  render (): void {
    this.renderer.render(this.scene, this.camera)
  }
}
