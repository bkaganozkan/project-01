import * as THREE from "three/build/three";
export default class StarshipMovement {
  // temporary data
  walkDirection = new THREE.Vector3();
  rotateAngle = new THREE.Vector3(0, 1, 0);
  rotateQuarternion = new THREE.Quaternion();
  cameraTarget = new THREE.Vector3();

  // constants

  forwardSpeed = 25;
  strafeSpeed = 7.5;
  hoverSpeed = 5;

  constructor(model, camera, controller) {
    this.model = model;
    this.camera = camera;
    this.controller = controller;
  }

  update(delta, keyPressed) {
   
  }

  _directionOffset(keyPressed) {
    
  }

  _updateCameraTarget() {}
}
