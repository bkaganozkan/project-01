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
  }

  async CreateObject() {
    await super.CreateObject();
    this.object.scale.set(0.01, 0.01, 0.01);

    
  }

  SetObjectMovement(camera, controller) {
    this.objectMovement = new StarshipMovement(this.object, camera, controller);
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
    if (this) this.objectMovement.update(delta, this.keysPressed);
  }
}
