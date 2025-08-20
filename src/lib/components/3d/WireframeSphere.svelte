<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

	let canvas: HTMLCanvasElement;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let mesh: THREE.Object3D;
	let controls: OrbitControls;
	let animationId: number;

	function createGeometry(): THREE.BufferGeometry {
		const radius = 1.9;
		return new THREE.SphereGeometry(radius, 12, 8);
	}

	onMount(() => {
		scene = new THREE.Scene();
		scene.background = null; // transparent background

		const fov = 80;
		const aspect = canvas.clientWidth / canvas.clientHeight;
		const near = 0.1;
		const far = 100;
		camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
		camera.position.z = 3;

		// `alpha:true` gives us an RGBA buffer so the canvas can be transparent
		renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			alpha: true
		});
		renderer.setClearColor(0x000000, 0); // fully transparent clear colour
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);

		const geometry = createGeometry();

		const material = new THREE.MeshBasicMaterial({
			color: new THREE.Color('#D87757'),
			wireframe: true
		});

		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.04;
		controls.rotateSpeed = 0.4;
		controls.zoomSpeed = 0;
		controls.enablePan = false;

		const rotateSpeed = 0.002; // rad per frame

		const animate = () => {
			mesh.rotation.x += rotateSpeed * 1.3;
			mesh.rotation.y += rotateSpeed;

			controls.update();
			renderer.render(scene, camera);
			animationId = requestAnimationFrame(animate);
		};
		animate();

		return () => {
			cancelAnimationFrame(animationId);
			controls.dispose();
			renderer.dispose();
			geometry.dispose();
			material.dispose();
		};
	});

	function resize() {
		if (!renderer) return;
		const w = canvas.clientWidth;
		const h = canvas.clientHeight;
		renderer.setSize(w, h);
		camera.aspect = w / h;
		camera.updateProjectionMatrix();
	}
	window.addEventListener('resize', resize);
	onDestroy(() => window.removeEventListener('resize', resize));
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		display: block;
		width: 100%;
		height: 100%;
		background: transparent;
	}
</style>
