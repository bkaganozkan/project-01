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

    this.updateCameraTarget(0, 0);
  }

  update(delta, keyPressed) {
    //Calculate toward camera direction
    var angleYCameraDirection = Math.atan2(
      this.camera.position.x - this.model.position.x,
      this.camera.position.z - this.model.position.z
    );
    var directionOffset = this._directionOffset(keyPressed);
    // console.log(directionOffset);
    // rotate model
    this.model.rotation.set(0, Math.PI / 2 + Math.PI / 2, 0);
    this.rotateQuarternion.setFromAxisAngle(
      this.rotateAngle,
      angleYCameraDirection + directionOffset + 0.5
    );
    this.model.quaternion.rotateTowards(this.rotateQuarternion, 0.2);

    // calculate direction
    this.camera.getWorldDirection(this.walkDirection);
    this.walkDirection.y = 0;
    this.walkDirection.normalize();
    this.walkDirection.applyAxisAngle(this.rotateAngle, directionOffset);
    

    const moveX = this.walkDirection.x * this.velocity * delta;
    const moveZ = this.walkDirection.z * this.velocity * delta;

    this.model.position.x += moveX;
    this.model.position.z += moveZ;

    this.updateCameraTarget(moveX, moveZ);
  }

  updateCameraTarget(moveX, moveZ) {
    // move camera
    this.camera.position.x += moveX;
    this.camera.position.z += moveZ;

    // update camera target
    this.cameraTarget.x = this.model.position.x;
    this.cameraTarget.y = this.model.position.y + 1;
    this.cameraTarget.z = this.model.position.z;
    this.controller.target = this.cameraTarget;
  }

  _directionOffset(keyPressed) {
    var directionOffset = 0; // w
    if (keyPressed["w"]) {
      if (keyPressed["a"]) {
        directionOffset = Math.PI / 4; // w + a
      } else if (keyPressed["d"]) {
        directionOffset = - Math.PI / 4; //  w + d
      }
    } else if (keyPressed["s"]) {
      if (keyPressed["a"]) {
        directionOffset = Math.PI / 4 + Math.PI / 2; // s + a
      } else if (keyPressed["d"]) {
        directionOffset = -Math.PI / 4 - Math.PI / 2; // s + d
      } else {
        directionOffset = Math.PI; // s
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
