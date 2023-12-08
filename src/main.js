import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import GameOver from './scenes/GameOver';

const config = {
    type : Phaser.AUTO,
    width : 1280, 
    height : 720,
    parent : 'content',
    backgroundColor : '#000',
    physics : {
        default : 'arcade',
        arcade : {
            // gravity: {y:300},
            debug : true
        }
    },
    scene : [
        MainMenu,
        GameScene,
        GameOver
        
    ]
}
let game = new Phaser.Game(config);
