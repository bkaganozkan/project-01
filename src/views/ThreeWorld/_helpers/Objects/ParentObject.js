import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import * as THREE from "three/build/three";

export default class ParentObject {
  static sceneObject = [];
  constructor(
    pathObject = "",
    object = null
    // collusion = null,
    // rotationController = null
  ) {
    this.pathObject = pathObject;
    this.object = object;
    // this.collusion = collusion;
    this.transformController;
    this.objectMovement;
  }

  async CreateObject() {
    return new Promise((resolve) => {
      var laoderManager = new THREE.LoadingManager();
      var fbxLoaderManager = new FBXLoader(laoderManager);

      laoderManager.onLoad = () => {
        resolve(true);
      };

      fbxLoaderManager.load(this.pathObject, (fbx) => (this.object = fbx));
    });
  }

  getModel() {
    return this.model;
  }

  SetObjectRotation(scene, camera, renderer) {
    // this.transformController = new TransformControls(camera, renderer);
    // this.transformController.attach(this.object);
    // this.transformController.setMode("rotate");
    scene.add(this.transformController);
  }

  SetObjectMovement() {
    console.log("Created object movement");
  }
}
