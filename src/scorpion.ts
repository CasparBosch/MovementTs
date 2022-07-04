import * as PIXI from 'pixi.js'
import {Game} from './game'

export class Scorpion extends PIXI.Sprite {

    private xSpeed: number = 0;
    private ySpeed:number = 0;
    private health: number = 100;
    private game: Game;

    constructor(texture:PIXI.Texture){
        super(texture)
        this.x = 1300
        this.y = 280
        this.scale.set(-1,1)
        this.width = 100
        this.height = 200

        //eventlistener for movement
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

    //keyboard input clickevent check voor WASD-keys
    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case ".":
                this.shoot()
            case "ARROWLEFT":
                this.xSpeed = -4
                break
            case "ARROWRIGHT":
                this.xSpeed = 4
                break
                //ARROWUP is for jump
            case "ARROWUP":
                // this.ySpeed = -4
                break
                //ARROWDOWN is for duck
            case "ARROWDOWN":
                // this.ySpeed = 4
                break
        }

    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case ".":
                this.shoot()
                break;
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xSpeed = 0
                break
            case "ARROWUP":
            case "ARROWDOWN":
                this.ySpeed = 0
                break
        }
    }

    public update(delta: number){
        this.x += this.xSpeed * delta
        this.y += this.ySpeed * delta
    }
}