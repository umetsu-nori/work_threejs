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
    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshStandardMaterial({
        color: 0x0000ff
    });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // make BALL
    const geometry2 = new THREE.SphereGeometry(200, 30, 30);
//    const material2 = new THREE.MeshStandardMaterial({color: 0x00FF00});
//    const ball = new THREE.Mesh(geometry2, material2);
    // Read texture
    const loader = new THREE.TextureLoader();
//    loader.crossOrigin = '*';
    const texture = loader.load("imgs/earthmap1k.jpg");
/*    const texture = loader.load("imgs/earthmap1k.jpg",
    function(texture){},
    undefined,
    (err) => {
        console.log(err);
        alert('a');
    });*/
//    const texture = THREE.ImageUtils.LoadTexture("imgs/earthmap1k.jpg");
    const material3 = new THREE.MeshBasicMaterial({
        map: texture
    });
    const ball = new THREE.Mesh(geometry2, material3);
    scene.add(ball);

    // Derection of Light
    const directionalLight = new THREE.DirectionalLight(
        0xffffff
    );
    directionalLight.position.set(1, 1, 1);
    // add to Scene
    scene.add(directionalLight);

    // Ambient of Light  (Parameter: color, strength of light)
    const ambientLight = new THREE.AmbientLight(0x008888, 0.8);
    scene.add(ambientLight);

    // first time execute
    //renderer.render(scene, camera);

    tick();

    function tick() {
        requestAnimationFrame(tick);

        // Rotate Box
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;

        // move
        box.position.x += 1;
    
        // Rotate Ball
        ball.rotation.y += 0.01;

        // renderering
        renderer.render(scene, camera);
    }
}

