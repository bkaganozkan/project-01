import * as THREE from "three/build/three";
export default class StarshipMovement {
  // temporary data
  walkDirection = new THREE.Vector3();
  rotateAngle = new THREE.Vector3(0, 1, 0);
  rotateQuarternion = new THREE.Quaternion();
  cameraTarget = new THREE.Vector3();

  // constants
  fadeDuration = 0.2;
  velocity = 5;

  constructor(model, camera, controller) {
    this.model = model;
    this.camera = camera;
    this.controller = controller;
  }

  update(delta, keyPressed) {
    if (this.model) console.log(this.model);
    else {
      console.log("tok");
    }
    // console.log(this);
    // this.model.position.x += this.velocity * delta;
    // console.log(delta);
    // console.log(keyPressed);
  }

  _directionOffset(keyPressed) {
    var directionOffset = 0; // w
    if (keyPressed["w"]) {
      if (keyPressed["a"]) {
        directionOffset = Math.PI / 4; // w + a
      } else if (keyPressed["d"]) {
        directionOffset = -Math.PI / 4; // w + d
      }
    } else if (keyPressed["s"]) {
      if (keyPressed["a"]) {
        directionOffset = Math.PI / 4 + Math.PI / 2; // s + a
      } else if (keyPressed["d"]) {
        directionOffset = -Math.PI / 4 - Math.PI / 2; // s + d
      }
    } else if (keyPressed["a"]) {
      directionOffset = Math.PI / 2; //  a
    } else if (keyPressed["d"]) {
      directionOffset = -Math.PI / 2; // d
    }
    return directionOffset;
  }

  _updateCameraTarget() {}
}
