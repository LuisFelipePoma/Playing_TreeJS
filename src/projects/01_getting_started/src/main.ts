import './style.css'
import * as THREE from 'three'
import { Scene } from './utils/create-scene.ts'
import { DrawLine } from './utils/draw-lines.ts'
import { CreateText } from './utils/create-text.ts'

// Create a scene

const createScene = new Scene() // Create a scene
const geometryScene = new THREE.BoxGeometry(1, 1, 1) // Create a cube geometry
const materialScene = new THREE.MeshBasicMaterial({ color: 0x00ffff }) // Create a material
const cube = new THREE.Mesh(geometryScene, materialScene) // Create a mesh using the geometry and material
createScene.add(cube) // Add the cube to the scene
createScene.animate() // Animate the cube

// Create a line

const drawLine = new DrawLine({ cameraX: 0, cameraY: 0, cameraZ: 100 }) // Create a scene
const materialLine = new THREE.LineBasicMaterial({ color: 0x0000ff }) // Create a material
const points = [] // Create an array of points
points.push(new THREE.Vector3(-10, 0, 0))
points.push(new THREE.Vector3(0, 10, 0))
points.push(new THREE.Vector3(10, 0, 0))
const geometryLine = new THREE.BufferGeometry().setFromPoints(points) // Create a geometry from the points
const line = new THREE.Line(geometryLine, materialLine) // Create a line using the geometry and material
drawLine.add(line) // Add the line to the scene
drawLine.render() // Render the scene

// Creating a Text

const createText = new CreateText({
  cameraX: 500,
  cameraY: 500,
  cameraZ: 500
})
const content =
  '<div>' +
  '<h1>This is an H1 Element.</h1>' +
  '<span class="large">Hello Three.js cookbook</span>' +
  '<textarea> And this is a textarea</textarea>' +
  '</div>'

const cssElement = createText.createCSS3DObject(content)
createText.add(cssElement)
createText.render()
