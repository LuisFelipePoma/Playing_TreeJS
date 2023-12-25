import * as THREE from 'three'

export class Scene {
  readonly scene: THREE.Scene
  readonly camera: THREE.PerspectiveCamera
  readonly renderer: THREE.WebGLRenderer
  object: THREE.Mesh
  animations: () => void

  constructor () {
    this.object = new THREE.Mesh()

    this.animations = () => {
      this.object.rotation.x += 0.01
      this.object.rotation.y += 0.01
    }

    // Create the variables needed for the scene, camera, and renderer
    this.scene = new THREE.Scene() // The scene is where you place objects
    this.camera = new THREE.PerspectiveCamera( // The camera is what you view the scene through
      75, // Field of view -> How much of the scene is visible
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near clipping plane -> Anything closer than this will not be rendered
      1000 // Far clipping plane -> Anything further than this will not be rendered
    )

    // The renderer is what renders the scene
    this.renderer = new THREE.WebGLRenderer() // WebGL is the most popular renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight) // Set the size of the renderer
    this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2, false) // Set the resolution of the renderer
    document
      .querySelector('#create-scene')
      ?.appendChild(this.renderer.domElement) // Add the renderer to the DOM

    this.camera.position.z = 5 // Move the camera back so we can see the cube
  }

  add (object: THREE.Mesh): void {
    this.object = object
    this.scene.add(object)
  }

  render (): void {
    this.renderer.render(this.scene, this.camera)
  }

  animate (): void {
    requestAnimationFrame(this.animate.bind(this)) // Call the animate function again
    this.animations()
    this.render()
  }
}
