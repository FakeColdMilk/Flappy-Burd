import Phaser from 'phaser';

export default class Platform extends Phaser.GameObjects.Rectangle{
constructor(scene, x, y, width, height) {
super(scene, x, y, width, height, 0xcccccccc);

scene.add.existing(this);
scene.physics.add.existing(this);


this.body.setImmovable(true);
this.body.allowGravity = false;
    }
}