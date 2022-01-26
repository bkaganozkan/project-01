import * as THREE from "three";
import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module.js";

export default class MainScene {
  static SceneObjects = [];
  static camera;
  static delta;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x808080);

    this.OrbitControls;
    this.renderer;

    this.directionalLight;

    this.clock = new THREE.Clock();
    this.stats;
  }

  CreateMainScene() {
    this.SetCamera();

    this.SetDirectionalLight();
    this.SetAxesHelper();
    this.SetPlaneHelper();
    this.SetObjectAttributies(
      this.scene,
      this.camera,
      this.renderer.domElement
    );
    this.SetOrbitControl(this.camera, this.renderer.domElement);
  }

  SetCanvas(value) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: value,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
  }

  AddStats(container) {
    this.stats = new Stats();
    container.appendChild(this.stats.dom);
  }

  SetCamera() {
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );
    this.camera.position.set(0, 15, 25);
    // this.camera.lookAt(MainScene.SceneObjects[0].object.position);
  }
  CameraFollowObject(object) {
    let objectPosition = object.object.position;
    this.camera.position.set(0, objectPosition.y + 50, objectPosition.z + 50);
    this.camera.lookAt(objectPosition);
  }

  SetOrbitControl(camera, domElement) {
    this.orbitControl = new OrbitControls(camera, domElement);
    this.orbitControl.enableDamping = true;
    // this.orbitControl.minDistance = 5;
    // this.orbitControl.maxDistance = 15;
    this.orbitControl.maxPolarAngle = Math.PI / 2 - 0.05;
    this.orbitControl.update();
    this.orbitControl.enablePan = false;
    // this.orbitControl.dispose();
  }

  SetDirectionalLight() {
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.scene.add(this.directionalLight);
  }

  SetAxesHelper() {
    var axesHelper = new THREE.AxesHelper(100);
    axesHelper.position.y = 5;
    this.scene.add(axesHelper);
  }
  SetPlaneHelper() {
    const size = 150;
    const divisions = 10;

    const gridHelper = new THREE.GridHelper(size, divisions);
    this.scene.add(gridHelper);
  }

  /// Object operations

  AddObject(MSObject) {
    this.scene.add(MSObject.object);
    MainScene.SceneObjects.push(MSObject);
  }

  SetObjectAttributies(scene, camera, renderer) {
    MainScene.SceneObjects.map((object) => {
      object.SetObjectRotation(scene, camera, renderer);
      object.SetObjectMovement(camera, renderer);
    });
  }

  getDeltaTime() {
    this.delta = Math.min(this.clock.getDelta(), 0.1);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
    this.camera.updateProjectionMatrix();

    this.stats ? this.stats.update() : null;
    // MainScene.SceneObjects.map((object) =>
    //   // object.objectMovement.update(this.delta)
    //   {
    //     object.UpdateMovement(this.delta);
    //   }
    // );
    // this.CameraFollowObject(MainScene.SceneObjects[0]);
    // stats

    // console.log(MainScene.SceneObjects[0].object.rotation);
  }

  RunScene() {
    var animate = () => {
      requestAnimationFrame(animate);
      this.getDeltaTime();
      MainScene.SceneObjects[0].updateMovement(this.delta)

      this.render();
    };

    animate();
  }
}
