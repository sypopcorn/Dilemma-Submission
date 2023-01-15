import * as THREE from 'https://unpkg.com/three@0.148.0/build/three.module.js';

import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';

import dat from "https://cdn.skypack.dev/dat.gui";

// import gsap from 'http://mywebsite.com/static/gsap.min.js';
// import { gsap } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js";
window.addEventListener('resize',
function () {
    location.reload();
})

window.addEventListener('resize',
function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


const gui =new dat.GUI();
dat.GUI.toggleHide();
const world ={
    plane :{
        width: 800,
        height:800,
        widthseg:100,
        heightseg:100
    }
}
gui.add(world.plane, 'width', 1, 400).onChange(() => {
    mesh.geometry.dispose()
    mesh.geometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height, world.plane.widthseg, world.plane.heightseg)
    const arrlenth = mesh.geometry.attributes.position.array.length
    const coords = [];
    for (let i = 0; i < arrlenth; i++) {
        coords.push(mesh.geometry.attributes.position.array[i]);
    }
    for (let i = 2; i < arrlenth; i += 3) {
        const x = coords[i - 2];
        const y = coords[i - 1];
        const z = coords[i];
        coords[i-2] = x -0.5+ Math.random();
        coords[i-1] = y -0.5 + Math.random();
        coords[i] = z + Math.random();
        mesh.geometry.attributes.position.array[i-2] = coords[i-2];
        mesh.geometry.attributes.position.array[i-1] = coords[i-1];
        mesh.geometry.attributes.position.array[i] = coords[i];
    }

    const colorarray = [];
    const count = mesh.geometry.attributes.position.count
    for (let i = 0; i < count; i++) {
        //colorarray.push(0.476562, 0.046875, 0.75);
        colorarray.push(0.12549019,0.0196078,0.345098);
    }
    const colours = new Float32Array(colorarray);

    mesh.geometry.setAttribute('color', new THREE.BufferAttribute(colours, 3));

})

gui.add(world.plane, 'height', 1, 400).onChange(() => {
    mesh.geometry.dispose()
    mesh.geometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height, world.plane.widthseg, world.plane.heightseg)
    const arrlenth = mesh.geometry.attributes.position.array.length
    const coords = [];
    for (let i = 0; i < arrlenth; i++) {
        coords.push(mesh.geometry.attributes.position.array[i]);
    }
    for (let i = 2; i < arrlenth; i += 3) {
        const x = coords[i - 2];
        const y = coords[i - 1];
        const z = coords[i];
        coords[i-2] = x -0.5+ Math.random();
        coords[i-1] = y -0.5 + Math.random();
        coords[i] = z + Math.random();
        mesh.geometry.attributes.position.array[i-2] = coords[i-2];
        mesh.geometry.attributes.position.array[i-1] = coords[i-1];
        mesh.geometry.attributes.position.array[i] = coords[i];
    }
    const colorarray = [];
    const count = mesh.geometry.attributes.position.count
    for (let i = 0; i < count; i++) {
        colorarray.push(0.12549019,0.0196078,0.345098); 
    }
    const colours = new Float32Array(colorarray);

    mesh.geometry.setAttribute('color', new THREE.BufferAttribute(colours, 3));

})

gui.add(world.plane, 'widthseg', 1, 50).onChange(() => {
    mesh.geometry.dispose()
    mesh.geometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height, world.plane.widthseg, world.plane.heightseg)
    const arrlenth = mesh.geometry.attributes.position.array.length
    const coords = [];
    for (let i = 0; i < arrlenth; i++) {
        coords.push(mesh.geometry.attributes.position.array[i]);
    }
    for (let i = 2; i < arrlenth; i += 3) {
        const x = coords[i - 2];
        const y = coords[i - 1];
        const z = coords[i];
        coords[i-2] = x -0.5+ Math.random();
        coords[i-1] = y -0.5 + Math.random();
        coords[i] = z + Math.random();
        mesh.geometry.attributes.position.array[i-2] = coords[i-2];
        mesh.geometry.attributes.position.array[i-1] = coords[i-1];
        mesh.geometry.attributes.position.array[i] = coords[i];
    }

    const colorarray = [];
    const count = mesh.geometry.attributes.position.count
    for (let i = 0; i < count; i++) {
        colorarray.push(0.12549019,0.0196078,0.345098);
    }
    const colours = new Float32Array(colorarray);

    mesh.geometry.setAttribute('color', new THREE.BufferAttribute(colours, 3));

})

gui.add(world.plane, 'heightseg', 1, 50).onChange(() => {
    mesh.geometry.dispose()
    mesh.geometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height, world.plane.widthseg, world.plane.heightseg)
    const arrlenth = mesh.geometry.attributes.position.array.length
    const coords = [];
    for (let i = 0; i < arrlenth; i++) {
        coords.push(mesh.geometry.attributes.position.array[i]);
    }
    for (let i = 2; i < arrlenth; i += 3) {
        const x = coords[i - 2];
        const y = coords[i - 1];
        const z = coords[i];
        coords[i-2] = x -0.5+ Math.random();
        coords[i-1] = y -0.5 + Math.random();
        coords[i] = z + Math.random();
        mesh.geometry.attributes.position.array[i-2] = coords[i-2];
        mesh.geometry.attributes.position.array[i-1] = coords[i-1];
        mesh.geometry.attributes.position.array[i] = coords[i];
    }
    const colorarray = [];
    const count = mesh.geometry.attributes.position.count
    for (let i = 0; i < count; i++) {
        colorarray.push(0.12549019,0.0196078,0.345098);
    }
    const colours = new Float32Array(colorarray);

    mesh.geometry.setAttribute('color', new THREE.BufferAttribute(colours, 3));

})

const raycaster = new THREE.Raycaster();

const scene = new THREE.Scene();

const camera= new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,100);
const renderer=new THREE.WebGLRenderer();

renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.PlaneGeometry(800,800,100,100)
const planematerial = new THREE.MeshPhongMaterial({
    vertexColors: true,
    side: THREE.DoubleSide,
    flatShading: true
});

const mesh = new THREE.Mesh(planeGeometry,planematerial)

const light =new THREE.DirectionalLight(0xf80479,1)
// 0xf80479
light.position.set(0,0,1.5);
scene.add(light);
const backlight =new THREE.DirectionalLight(0x000000,1)
// 0x8100030
backlight.position.set(0,0,-5);
scene.add(backlight);
const exlight =new THREE.DirectionalLight(0x8100030,1)
backlight.position.set(0,5,51);
scene.add(exlight);

scene.add(mesh)

//COLOUR
const initialcolor={
    p:0.12549019,
    q:0.0196078,
    r:0.345098
}
const colorarray=[];
const count = mesh.geometry.attributes.position.count
//loop for pushing colors
for(let i=0;i<count;i++){
    colorarray.push(0.12549019,0.0196078,0.345098);
}
const colours = new Float32Array(colorarray);

mesh.geometry.setAttribute('color',new THREE.BufferAttribute(colours,3));

let move=0;
const arrlenth =mesh.geometry.attributes.position.array.length

// cordinates class
const coordinates ={
    x:undefined,
    y:undefined
}
const coords =[];
const randomnum =[];
//loop for pushing coordinates in an array
for(let i=0;i<arrlenth;i++){
    coords.push(mesh.geometry.attributes.position.array[i]);
    randomnum.push(Math.random()-0.5);
}
//loop for positioning vertices 
for (let i = 2; i < arrlenth; i += 3) {
    const x = coords[i - 2];
    const y = coords[i - 1];
    const z = coords[i];
    coords[i - 2] = x - 0.9 + 3*Math.random();
    coords[i - 1] = y - 0.9 + 3*Math.random();
    coords[i] = z-0.1 + 4*Math.random();
    mesh.geometry.attributes.position.array[i - 2] = coords[i - 2];
    mesh.geometry.attributes.position.array[i - 1] = coords[i - 1];
    mesh.geometry.attributes.position.array[i] = coords[i];
}

mesh.geometry.attributes.position.realpositions=mesh.geometry.attributes.position.array;
console.log(mesh.geometry.attributes.position);

// new OrbitControls(camera,renderer.domElement)
camera.position.z= 65;
function changecolor(arr){
    arr[0].object.geometry.attributes.color.setX(arr[0].face.a,0.6875);
    arr[0].object.geometry.attributes.color.setY(arr[0].face.a,0.149019);
    arr[0].object.geometry.attributes.color.setZ(arr[0].face.a,1);
    arr[0].object.geometry.attributes.color.setX(arr[0].face.b,0.6875);
    arr[0].object.geometry.attributes.color.setY(arr[0].face.b,0.149019);
    arr[0].object.geometry.attributes.color.setZ(arr[0].face.b,1);
    arr[0].object.geometry.attributes.color.setX(arr[0].face.c,0.6875);
    arr[0].object.geometry.attributes.color.setY(arr[0].face.c,0.149019);
    arr[0].object.geometry.attributes.color.setZ(arr[0].face.c,1);
    arr[0].object.geometry.attributes.color.needsUpdate = true;


    const hoverincolor = {
        p:0.6875 ,
        q: 0.149019,
        r: 1
    }
    gsap.to(hoverincolor,{
        p:initialcolor.p,
        q: initialcolor.q,
        r: initialcolor.r,
        duration: 1,
        onUpdate: () => {
            arr[0].object.geometry.attributes.color.setX(arr[0].face.a, hoverincolor.p);
            arr[0].object.geometry.attributes.color.setY(arr[0].face.a, hoverincolor.q);
            arr[0].object.geometry.attributes.color.setZ(arr[0].face.a, hoverincolor.r);
            arr[0].object.geometry.attributes.color.setX(arr[0].face.b, hoverincolor.p);
            arr[0].object.geometry.attributes.color.setY(arr[0].face.b, hoverincolor.q);
            arr[0].object.geometry.attributes.color.setZ(arr[0].face.b, hoverincolor.r);
            arr[0].object.geometry.attributes.color.setX(arr[0].face.c, hoverincolor.p);
            arr[0].object.geometry.attributes.color.setY(arr[0].face.c, hoverincolor.q);
            arr[0].object.geometry.attributes.color.setZ(arr[0].face.c, hoverincolor.r);
            arr[0].object.geometry.attributes.color.needsUpdate = true;
        }
    })
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    raycaster.setFromCamera(coordinates,camera)

    move+=0.01;
    let arrlen = mesh.geometry.attributes.position.array.length;

    for(let i=2;i<arrlen;i+=3){
        //x
        mesh.geometry.attributes.position.array[i-2]=mesh.geometry.attributes.position.realpositions[i-2]+ Math.cos(move+randomnum[i-2])*0.05;
        //y
        mesh.geometry.attributes.position.array[i-1]=mesh.geometry.attributes.position.realpositions[i-1]+ Math.cos(move+randomnum[i-1])*0.05;
        //z
        mesh.geometry.attributes.position.array[i]=mesh.geometry.attributes.position.realpositions[i]+ Math.cos(move+randomnum[i])*0.005;
        mesh.geometry.attributes.position.needsUpdate= true;
    }


    const intersects = raycaster.intersectObject(mesh);
    if(intersects.length>0){
    console.log();
    changecolor(intersects);
    }
}

console.log(randomnum);
animate();

addEventListener('mousemove',(event) =>{
    coordinates.x=(event.clientX/innerWidth)*2-1;
    coordinates.y=1-(event.clientY/innerHeight)*2;
})
