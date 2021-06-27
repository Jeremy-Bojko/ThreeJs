import './style.css'
import * as THREE from 'three'
import { Vector3 } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Position changing  
mesh.position.x = 3;
mesh.position.y = -2;
mesh.position.z = -2;

// More compact method 
mesh.position.set(3, 3, 2)

// Display the length of the mesh's Vector 
console.log(mesh.position.length());
console.log(`x : ${mesh.position.x}, y : ${mesh.position.y}, z : ${mesh.position.z}`);

scene.add(mesh)

// Normalization (lenght = 1) make the cube closer 
mesh.position.normalize();

console.log(mesh.position.length());
console.log(`x : ${mesh.position.x}, y : ${mesh.position.y}, z : ${mesh.position.z}`);

// Changing the scale of the cube 
mesh.scale.x = 3; 
mesh.scale.y = 2; 
mesh.scale.z = 0.1;

// More compact method
mesh.scale.set(1, 1, 1);

/**
 * Rotation 
 */

mesh.rotation

/**
 * Axis Helper
 */
const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4


const d = camera.position.distanceTo(mesh.position);
console.log(d);

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)