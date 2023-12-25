import WebGL from 'three/addons/capabilities/WebGL.js'

if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
//   animate()
} else {
  const warning = WebGL.getWebGLErrorMessage()
  document.getElementById('container')?.appendChild(warning)
}
