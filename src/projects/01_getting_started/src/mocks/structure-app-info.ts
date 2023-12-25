export const structureInfo = [
  {
    tittle: 'Renderer',
    info: 'This is arguably the main object of three.js. You pass a Scene and a Camera to a Renderer and it renders (draws) the portion of the 3D scene that is inside the frustum of the camera as a 2D image to a canvas.',
    href: 'https://threejs.org/docs/#api/en/constants/Renderer'
  },
  {
    tittle: 'Scene',
    info: `There is a scenegraph which is a tree like structure, consisting of various objects like a Scene object, multiple Mesh objects, Light objects, Group, Object3D, and Camera objects. A Scene object defines the root of the scenegraph and contains properties like the background color and fog. These objects define a hierarchical parent/child tree like structure and represent where objects appear and how they are oriented. Children are positioned and oriented relative to their parent. For example the wheels on a car might be children of the car so that moving and orienting the car's object automatically moves the wheels.`,
    href: 'https://threejs.org/docs/#api/en/scenes/Scene'
  },
  {
    tittle: 'Camera',
    info: 'Note in the diagram Camera is half in half out of the scenegraph. This is to represent that in three.js, unlike the other objects, a Camera does not have to be in the scenegraph to function. Just like other objects, a Camera, as a child of some other object, will move and orient relative to its parent object. There is an example of putting multiple Camera objects in a scenegraph at the end of the article on scenegraphs.',
    href: 'https://threejs.org/docs/#api/en/cameras/Camera'
  },
  {
    tittle: 'Mesh',
    info: 'Mesh objects represent drawing a specific Geometry with a specific Material. Both Material objects and Geometry objects can be used by multiple Mesh objects. For example to draw two blue cubes in different locations we could need two Mesh objects to represent the position and orientation of each cube. We would only need one Geometry to hold the vertex data for a cube and we would only need one Material to specify the color blue. Both Mesh objects could reference the same Geometry object and the same Material object.',
    href: 'https://threejs.org/docs/#api/en/objects/Mesh'
  },
  {
    tittle: 'Geometry',
    info: 'Geometry objects represent the vertex data of some piece of geometry like a sphere, cube, plane, dog, cat, human, tree, building, etc... Three.js provides many kinds of built in geometry primitives. You can also create custom geometry as well as load geometry from files.',
    href: null
  },
  {
    tittle: 'Material',
    info: 'Material objects represent the surface properties used to draw geometry including things like the color to use and how shiny it is. A Material can also reference one or more Texture objects which can be used, for example, to wrap an image onto the surface of a geometry.',
    href: 'https://threejs.org/docs/#api/en/materials/Material'
  },
  {
    tittle: 'Texture',
    info: 'Texture objects generally represent images either loaded from image files, generated from a canvas or rendered from another scene.',
    href: 'https://threejs.org/docs/#api/en/textures/Texture'
  },
  {
    tittle: 'Light',
    info: 'Light objects represent different kinds of lights.',
    href: 'https://threejs.org/docs/#api/en/lights/Light'
  }
]
