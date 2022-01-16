import {formatDurationTime} from '../formatData';

class Player  {
    #player;
    #controls; 
    
    constructor(player, controls) {
        this.#player = player;
        this.#controls = controls;
        this.#play(); 
        
        this.#controls.play.addEventListener("click", _=>{   
            this.#play();
        });
        this.#controls.pause.addEventListener("click", _=>{
            this.#pause();
        });
        this.#player.addEventListener("timeupdate",()=>{
            this.#setTimer();
            this.#setProgress();
        });
        this.#controls.controlTimeBar.addEventListener("click",event=>{            
           this.#setAdvance(event)
        })
    }
    
    #play(){
        this.#setVisible(this.#controls.play, "none");
        this.#setVisible(this.#controls.pause, "inline-block");     
        this.#player.play();        
    }

    #pause(){        
        this.#setVisible(this.#controls.play, "inline-block");
        this.#setVisible(this.#controls.pause, "none");        
        this.#player.pause();
    }

    #setVisible(control, state){
        control.style.display=state;
    }

    #setTimer(){
        this.#controls.timer.innerText= `${formatDurationTime(this.#player.currentTime)} / ${formatDurationTime(this.#player.duration)}`; 
    }

    #setProgress(){
        const percentage = (this.#player.currentTime/this.#player.duration)*100;        
        this.#controls.progress.style.inlineSize=`${percentage}%`;        
        if(this.#player.currentTime >= this.#player.duration) {
            this.#pause();
        }
    }

    #setAdvance(event){
        const xPercentage = Math.floor((event.offsetX/this.#controls.controlTimeBar.offsetWidth)*100);
        this.#player.currentTime =  (this.#player.duration * xPercentage/100)
    }
}

export default Player;