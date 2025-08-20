<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

	interface Props {
		zoom: number;
		dotSize: number;
		controlSpeed: number;
	}

	const { zoom, dotSize, controlSpeed }: Props = $props();

	let canvas: HTMLCanvasElement;

	let renderer: THREE.WebGLRenderer;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let controls: OrbitControls;
	let animationId: number;

	function createPointCube(size = 2, pointsPerEdge = 20) {
		const geometry = new THREE.BufferGeometry();
		const vertices: number[] = [];

		// Loop over each axis and push points on the six faces
		const step = size / (pointsPerEdge - 1);
		const half = size / 2;

		for (let x = -half; x <= half; x += step) {
			for (let y = -half; y <= half; y += step) {
				// Front face (z = +half)
				vertices.push(x, y, half);
				// Back face (z = -half)
				vertices.push(x, y, -half);
			}
		}

		for (let x = -half; x <= half; x += step) {
			for (let z = -half; z <= half; z += step) {
				// Top face (y = +half)
				vertices.push(x, half, z);
				// Bottom face (y = -half)
				vertices.push(x, -half, z);
			}
		}

		for (let y = -half; y <= half; y += step) {
			for (let z = -half; z <= half; z += step) {
				// Right face (x = +half)
				vertices.push(half, y, z);
				// Left face (x = -half)
				vertices.push(-half, y, z);
			}
		}

		const positions = new Float32Array(vertices);
		geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

		// Material for orange points
		const material = new THREE.PointsMaterial({
			color: '#D87757',
			size: dotSize,
			sizeAttenuation: true
		});

		return new THREE.Points(geometry, material);
	}

	onMount(() => {
		renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
		renderer.setClearColor(0x000000, 0);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);

		scene = new THREE.Scene();
		scene.background = null; // transparent background

		const fov = 60;
		const aspect = canvas.clientWidth / canvas.clientHeight;
		const near = 0.1;
		const far = 100;
		camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
		camera.position.set(3, 3, 5);
		camera.zoom = zoom;
		scene.add(camera);

		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.rotateSpeed = controlSpeed;
		controls.enablePan = false;
		controls.enableZoom = false;

		const dotCube = createPointCube(2, 20);
		scene.add(dotCube);

		const resizeObserver = new ResizeObserver(() => {
			const width = canvas.clientWidth;
			const height = canvas.clientHeight;
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		});
		resizeObserver.observe(canvas.parentElement!);

		const rotateSpeed = 0.002; // rad per frame

		// Animation loop
		const animate = () => {
			animationId = requestAnimationFrame(animate);
			controls.update(); // for damping
			dotCube.rotation.x += rotateSpeed * 1.3;
			dotCube.rotation.y += rotateSpeed * 2;
			renderer.render(scene, camera);
		};
		animate();

		// Cleanup
		return () => {
			cancelAnimationFrame(animationId);
			resizeObserver.disconnect();
			controls.dispose();
			renderer.dispose();
			scene.clear();
		};
	});

	onDestroy(() => {
		// In case the component is removed before onMount cleanup runs
		cancelAnimationFrame(animationId);
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	/* Make the canvas fill its container */
	canvas {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
