/* eslint-disable no-tabs */
export const codeCreateScene = [
  {
    description: "First let's load three.js",
    code: "import * as THREE from 'three';"
  },
  {
    description: 'Next we need is a <canvas> tag',
    code: '<canvas id="c"></canvas>'
  },
  {
    description:
      'We will ask three.js to draw into that canvas so we need to look it up.',
    code: `function main() {
				Fconst canvas = document.querySelector('#c');
				const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
			...
			}
			`
  },
  {
    description: "Next up we need a camera. We'll create a PerspectiveCamera.",
    code: `const fov = 75;
		const aspect = 2;  // the canvas default
		const near = 0.1;
		const far = 5;
		const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);`
  },
  {
    description:
      "The camera defaults to looking down the -Z axis with +Y up. We'll put our cube at the origin so we need to move the camera back a little from the origin in order to see anything.",
    code: 'camera.position.z = 2;'
  },
  {
    description:
      'Next we make a Scene. A Scene in three.js is the root of a form of scene graph. Anything you want three.js to draw needs to be added to the scene. ',
    code: 'const scene = new THREE.Scene();'
  },
  {
    description:
      'Next up we create a BoxGeometry which contains the data for a box. Almost anything we want to display in Three.js needs geometry which defines the vertices that make up our 3D object.',
    code: `const boxWidth = 1;
		const boxHeight = 1;
		const boxDepth = 1;
		const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);`
  },
  {
    description:
      'We then create a basic material and set its color. Colors can be specified using standard CSS style 6 digit hex color values.',
    code: 'const material = new THREE.MeshBasicMaterial({color: 0x44aa88});'
  },
  {
    description: `We then create a Mesh. A Mesh in three represents the combination of three things

		- A Geometry (the shape of the object)
		- A Material (how to draw the object, shiny or flat, what color, what texture(s) to apply. Etc.)
		- The position, orientation, and scale of that object in the scene relative to its parent. In the code below that parent is the scene.`,
    code: `const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		renderer.render(scene, camera);`
  },
  {
    description: `Let's animate it spinning and hopefully that will make it clear it's being drawn in 3D. To animate it we'll render inside a render loop using requestAnimationFrame.
		Here's our loop`,
    code: `function render(time) {
			time *= 0.001;  // convert time to seconds
		 
			cube.rotation.x = time;
			cube.rotation.y = time;
		 
			renderer.render(scene, camera);
		 
			requestAnimationFrame(render);
		}
		requestAnimationFrame(render);`
  },
  {
    description:
      "It's a little better but it's still hard to see the 3d. What would help is to add some lighting so let's add a light. There are many kinds of lights in three.js which we'll go over in a future article. For now let's create a directional light.",
    code: `
		const color = 0xFFFFFF;
		const intensity = 3;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		scene.add(light);`
  },
  {
    description: `Just for the fun of it let's add 2 more cubes.

		We'll use the same geometry for each cube but make a different material so each cube can be a different color.
		
		First we'll make a function that creates a new material with the specified color. Then it creates a mesh using the specified geometry and adds it to the scene and sets its X position.`,
    code: `function makeInstance(geometry, color, x) {
			const material = new THREE.MeshPhongMaterial({color});
		 
			const cube = new THREE.Mesh(geometry, material);
			scene.add(cube);
		 
			cube.position.x = x;
		 
			return cube;
		}`
  },
  {
    description:
      "Then we'll call it 3 times with 3 different colors and X positions saving the Mesh instances in an array.",
    code: `const cubes = [
			makeInstance(geometry, 0x44aa88,  0),
			makeInstance(geometry, 0x8844aa, -2),
			makeInstance(geometry, 0xaa8844,  2),
		];`
  },
  {
    description:
      "Finally we'll spin all 3 cubes in our render function. We compute a slightly different rotation for each one.",
    code: `function render(time) {
			time *= 0.001;  // convert time to seconds
		 
			cubes.forEach((cube, ndx) => {
				const speed = 1 + ndx * .1;
				const rot = time * speed;
				cube.rotation.x = rot;
				cube.rotation.y = rot;
			});`
  }
]
