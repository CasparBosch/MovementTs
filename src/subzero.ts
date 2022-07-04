import * as PIXI from 'pixi.js'
import {Game} from './game'

export class SubZero extends PIXI.Sprite {

    private xSpeed: number = 0;
    private ySpeed:number = 0;
    private health: number = 100;
    private game: Game;

    constructor(texture: PIXI.Texture) {
        super(texture)
        this.x = 100
        this.y = 280
        this.width = 100
        this.height = 200

        //eventlistener for movement
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

    //keyboard input clickevent check voor WASD-keys
    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "F":
                this.shoot()
                break
            case "A":
                this.xSpeed = -4
                break
            case "D":
                this.xSpeed = 4
                break
            case "W":
                // this.ySpeed = -4
                break
            case "S":
                // this.ySpeed = 4
                break
        }

    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "F":
                this.shoot()
                break;
            case "A":
            case "D":
                this.xSpeed = 0
                break
            case "W":
            case "S":
                this.ySpeed = 0
                break
        }
    }

    public update(delta: number){
        this.x += this.xSpeed * delta
        this.y += this.ySpeed * delta
    }
}