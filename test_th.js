//window.addEventListener("DOMContentloaded", init);
window.addEventListener("load", init);

function init() {
    const width = 960;
    const height = 540;

    // make Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // make Scene
    const scene = new THREE.Scene();

    // make Camera
    const camera = new THREE.PerspectiveCamera(
        45,
        width / height,
        1,
        10000
    );
    camera.position.set(0, 0, +1000);

    // make BOX
    const geometry = new THREE.BoxGeometry(500, 500, 500);
    const material = new THREE.MeshStandardMaterial({
        color: 0x0000ff
    });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // Derection of Light
    const directionalLight = new THREE.DirectionalLight(
        0xffffff
    );
    directionalLight.position.set(1, 1, 1);
    // add to Scene
    scene.add(directionalLight);

    // first time execute
    //renderer.render(scene, camera);

    tick();

    function tick() {
        requestAnimationFrame(tick);

        // Rotate Box
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;

        // renderering
        renderer.render(scene, camera);
    }
}

