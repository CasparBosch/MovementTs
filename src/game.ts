import * as PIXI from 'pixi.js'
import scorpionImage from "./images/scorpion.png"
import subZeroImage from "./images/subZero.png"
import backgroundImage from "./images/background3.png"
import { Scorpion } from './scorpion'
import { SubZero } from './subzero'


export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader
    private scorpion: Scorpion
    private subZero: SubZero

    backgroundTextures: PIXI.Texture[] = []

    constructor() {
        // create a pixi canvas
        this.pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })
        document.body.appendChild(this.pixi.view)

        // preload all our textures
        this.pixi.loader = new PIXI.Loader()
        this.pixi.loader.add('scorpionImage', scorpionImage)
            .add('backgroundImage', backgroundImage)
            .add('subZeroImage', subZeroImage)
        // .add("spritesheetbg5", "spritesheetbg5.json")
        this.pixi.loader.load(() => this.loadCompleted())
    }

    loadCompleted() {
        let background = new PIXI.Sprite(this.pixi.loader.resources["backgroundImage"].texture!)
        this.pixi.stage.addChild(background)
        this.scorpion = new Scorpion(this.pixi.loader.resources["scorpionImage"].texture!)
        this.pixi.stage.addChild(this.scorpion)
        this.subZero = new SubZero(this.pixi.loader.resources["subZeroImage"].texture!)
        this.pixi.stage.addChild(this.subZero)

        // for (let i = 0; i < 21; i++) {
        //     const texture = PIXI.Texture.from(`spritesheet5 ${i + 1}.png`)
        //     this.backgroundTextures.push(texture)
        // }

        // createBackground(),{}

        this.pixi.ticker.add((delta: number) => this.update(delta))
    }

    // createBackground() {
    //     const background = new PIXI.AnimatedSprite(this.backgroundTextures)
    //     // kaboom.x = 100
    //     // kaboom.y = 100
    //     // kaboom.anchor.set(0.5)
    //     background.play()
    //     this.pixi.stage.addChild(background)
    // }

    //update
    private update(delta: number) {
        this.subZero.update(delta)
        this.scorpion.update(delta)
    }

}



new Game()