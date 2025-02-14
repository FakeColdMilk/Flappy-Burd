import Phaser from 'phaser';

export default class Player extends Phaser.GameObjects.Rectangle{
constructor(scene, x, y) {
super(scene, x, y, 40, 40, 0x2277ff);

scene.add.existing(this);
scene.physics.add.existing(this);
    }
}