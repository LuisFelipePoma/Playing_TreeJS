import './style.css'
import * as THREE from 'three'
import { Scene } from './utils/create-scene.ts'
import { DrawLine } from './utils/draw-lines.ts'
import { CreateText } from './utils/create-text.ts'
import { UpdateResource } from './utils/update-resources.ts'
import { createListInfo } from './dom/structure-list.ts'

// <------------ Generate DOM Info --------------->
createListInfo()

// <------------ Create a scene --------------->

const createScene = new Scene() // Create a scene
const geometryScene = new THREE.BoxGeometry(1, 1, 1) // Create a cube geometry
// const materialScene = new THREE.MeshBasicMaterial({ color: 0x44aa88 }) // Create a material
const materialScene = new THREE.MeshPhongMaterial({ color: 0x44aa88 }) // affects light
const cube = new THREE.Mesh(geometryScene, materialScene) // Create a mesh using the geometry and material

const color = 0xffffff
const intensity = 3
const light = new THREE.DirectionalLight(color, intensity)
light.position.set(-1, 2, 4)
createScene.object = cube
createScene.add(cube) // Add the cube to the scene
createScene.add(light)
createScene.animate() // Animate the cube

// <------------ Create a line ---------------->

const drawLine = new DrawLine({ cameraX: 0, cameraY: 0, cameraZ: 50 }) // Create a scene
const materialLine = new THREE.LineBasicMaterial({ color: 0x0000ff }) // Create a material
const points = [] // Create an array of points
points.push(new THREE.Vector3(-10, 0, 5))
points.push(new THREE.Vector3(0, 10, 5))
points.push(new THREE.Vector3(10, 0, 5))
points.push(new THREE.Vector3(0, -10, 5))
points.push(new THREE.Vector3(-10, 0, 5))
const geometryLine = new THREE.BufferGeometry().setFromPoints(points) // Create a geometry from the points
const line = new THREE.Line(geometryLine, materialLine) // Create a line using the geometry and material
drawLine.add(line) // Add the line to the scene
drawLine.render() // Render the scene

// <------------ Creating a Text -------------->

const createText = new CreateText({
  // Create a scene
  cameraX: 500,
  cameraY: 500,
  cameraZ: 500
})

const content = // Create a string of HTML
  '<div>' +
  '<h1>This is an H1 Element.</h1>' +
  '<span class="large">Hello Three.js cookbook</span>' +
  '<textarea> And this is a textarea</textarea>' +
  '</div>'

const cssElement = createText.createCSS3DObject(content) // Create a CSS3DObject
createText.add(cssElement) // Add the CSS3DObject to the scene
createText.render() // Render the scene

// <------------ Updating Resources ------------>

const updateResource = new UpdateResource() // Create a scene
const MAX_POINTS = 500 // The maximum number of points
const geometryUpdateRes = new THREE.BufferGeometry() // Create a buffer geometry

const positionsUpdateRes = new Float32Array(MAX_POINTS * 3) // 3 vertices per point
geometryUpdateRes.setAttribute(
  // Add the position attribute
  'position', // Name of the attribute
  new THREE.BufferAttribute(positionsUpdateRes, 3) // Size of the attribute
)

const drawCount = 4 // draw the first X points, only
geometryUpdateRes.setDrawRange(0, drawCount) // draw the first x points, only

const material = new THREE.LineBasicMaterial({ color: 0xff0000 }) // Create a material

// line
const lineUpdate = new THREE.Line(geometryUpdateRes, material) // Create a line using the geometry and material
line.geometry.setDrawRange(0, 10) // If you want to change the number of points rendered after the first render
const positionAttribute = lineUpdate.geometry.getAttribute('position') // Get the position attribute
positionAttribute.needsUpdate = true // required after the first render

let x = 0, // Create variables for the x, y, and z coordinates
  y = 0,
  z = 0

for (let i = 0; i < positionAttribute.count; i++) {
  // Set the coordinates of the points
  positionAttribute.setXYZ(i, x, y, z) // Set the coordinates of the points
  x += (Math.random() - 0.5) * 30 // Add a random value to each coordinate
  y += (Math.random() - 0.5) * 30
  z += (Math.random() - 0.5) * 30

  // If you change the position data values after the initial render,
  // you may need to recompute bounding volumes so other features of the engine
  // like view frustum culling or helpers properly work.
  lineUpdate.geometry.computeBoundingBox()
  lineUpdate.geometry.computeBoundingSphere()
}

updateResource.add(lineUpdate) // Add the line to the scene
updateResource.render() // Render the scene
