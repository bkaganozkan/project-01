import ParentObject from "./ParentObject";
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls.js";
import StarshipMovement from "./StarshipMovement";
import MainScene from "../MainScene";

export default class Starship extends ParentObject {
  constructor(pathObject) {
    super(pathObject);
    this.objectMovement;
    this.keysPressed = {};
    this.keyDisplayQueue = {};

    this.camera;
  }

  async CreateObject() {
    await super.CreateObject();
    this.object.scale.set(0.01, 0.01, 0.01);
    this.object.rotateY(Math.PI);
  }

  SetObjectMovement(camera, domElement) {
    this.camera = camera;
    this.objectMovement = new FlyControls(this.object, domElement);
    this.objectMovement.movementSpeed = -100;
    this.objectMovement.domElement = domElement;
    this.objectMovement.rollSpeed = Math.PI / 24;
    this.objectMovement.autoForward = false;
    // this.objectMovement.activeLook = false;
    this.objectMovement.dragToLook = false;
    document.addEventListener(
      "keydown",
      (event) => {
        this.keysPressed[event.key.toLowerCase()] = true;
      },
      false
    );
    document.addEventListener(
      "keyup",
      (event) => {
        this.keysPressed[event.key.toLowerCase()] = false;
      },
      false
    );
  }

  updateMovement(delta) {
    if (this) {
      this.objectMovement.update(delta, this.keysPressed);
      this.camera.position.set(0, 50, this.object.position.z + 45);
      this.camera.lookAt(this.object.position);
    }
  }
}
