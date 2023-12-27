import * as THREE from 'three'
import {
  MAX_HEIGHT_SECTIONS_SCENE,
  MAX_WIDTH_SECTIONS_SCENE
} from '../consts/sections'

export class Scene {
  readonly scene: THREE.Scene
  readonly camera: THREE.PerspectiveCamera
  readonly renderer?: THREE.WebGLRenderer
  object: THREE.Mesh
  animations: () => void

  constructor () {
    this.object = new THREE.Mesh()

    this.animations = () => {
      this.object.rotation.x += 0.01
      this.object.rotation.y += 0.01
    }

    const canvas = document.querySelector('#c')
    // The renderer is what renders the scene
    if (canvas != null) {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas }) // WebGL is the most popular renderer
      this.renderer.setSize(MAX_WIDTH_SECTIONS_SCENE, MAX_HEIGHT_SECTIONS_SCENE) // Set the size of the renderer
    }
    // Create the variables needed for the scene, camera, and renderer
    this.scene = new THREE.Scene() // The scene is where you place objects
    this.camera = new THREE.PerspectiveCamera( // The camera is what you view the scene through
      75, // Field of view -> How much of the scene is visible
      2, // Aspect ratio
      0.1, // Near clipping plane -> Anything closer than this will not be rendered
      5 // Far clipping plane -> Anything further than this will not be rendered
    )
    this.camera.position.z = 2 // Move the camera back so we can see the cube
  }

  add (object: THREE.Mesh | THREE.DirectionalLight): void {
    this.scene.add(object)
  }

  render (): void {
    this.renderer?.render(this.scene, this.camera)
  }

  animate (): void {
    this.animations()
    this.render()
    // requestAnimationFrame(this.animate.bind(this)) // Call the animate function again
    requestAnimationFrame(this.animate.bind(this)) // Call the animate function again
  }
}
