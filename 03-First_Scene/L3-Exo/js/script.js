import * as THREE from 'three';

// Create the Scene 
const scene = new THREE.Scene();

// Create a red Cube 
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 'red'})
const mesh = new THREE.Mesh(geometry, material);

// Adding it to the scene 
scene.add(mesh);

// Size 
const size = {
  width : 800,
  height : 600
}
// Camera
// => FOV : Filed of view in degres 
// => Aspect Ratio : width/ height

const camera = new THREE.PerspectiveCamera(75, size.width / size.height )
camera.position.z = 5
camera.position.x = 2
camera.position.y = 2
scene.add(camera);

// Renderer
const canvas = document.querySelector('#scene'); 
const renderer = new THREE.WebGLRenderer({
  canvas
});

renderer.setSize(size.width, size.height);

renderer.render(scene, camera);


