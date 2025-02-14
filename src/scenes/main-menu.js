import Button from '../graphics/button'
import Phaser from 'phaser'
import level1Scene from './level-1'
import Text from './../graphics/text'

export default class MainMenuScene extends Phaser.Scene {

    static KEY = 'main-menu'

    constructor() {
        super({ key: MainMenuScene.KEY })
    }
    create() {
        new Text(this, this.game.config.width / 2, 100, 'Flappy bird', 60)

        new Button(this, 'Play', this.game.config.width / 2, 200, 160, 60, () => {
            this.scene.start(level1Scene.KEY)
        })
      
        }
    }
