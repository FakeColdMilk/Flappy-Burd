import Phaser from 'phaser';
import Player from '../entities/player';
import Platform from '../entities/platform';

export default class Level1Scene extends Phaser.Scene {
static KEY = 'Level-1';

constructor() {
    super({key: Level1Scene.KEY});
}
create() {
    this.player = new Player(this, 200, 400)

    this.platform = new Platform(this, 0, 500, 300, 40)

    this.physics.add.collider(this.player, this.platform)
}
}