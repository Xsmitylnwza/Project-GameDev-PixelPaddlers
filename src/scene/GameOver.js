import Phaser from "phaser";

class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: "GameOver",
        });
        this.bg
        this.retryButton
        this.endbgMusic
    }

    preload() {
        this.load.image('bg-gameover', "assets/PNG/elements/gameover.png")
        this.load.image('retryButton',"assets/PNG/elements/retrybotton.png")
        this.load.audio('endbgMusic', "assets/Sound/gameover.mp3");
    }

    create() {
        this.cameras.main.fadeIn(500);
        this.bg = this.add.image(0, 0,"bg-gameover")
        .setOrigin(0,0)
        .setDepth(0.8);

        this.retryButton = this.add.image(650, 550, "retryButton")
            .setScale(0.2)
            .setDepth(0.92);
        this.retryButton.setInteractive();
        this.retryButton.on("pointerdown", () => {
            this.scene.start("GameScene");
        });
        this.retryButton.on('pointerover',()=>{
            this.retryButton.setScale(0.25);
        })
        this.retryButton.on('pointerout',()=>{
            this.retryButton.setScale(0.2);
        })

        this.endbgMusic = this.sound.add('endbgMusic');
        var endbgMusicConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.endbgMusic.play(endbgMusicConfig)
        
    }

    update(delta, time) {}
}
export default GameOver;
