const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let numberOfParticles = 500;
let particlesArray = [];
const mouse = {
    x: null,
    y: null,
}

window.addEventListener('click', function(MouseEvent){
    mouse.x = MouseEvent.x;
    mouse.y = MouseEvent.y;
    particlesArray.push(new Particle());
})

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})


class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
     //   this.x = Math.random() * canvas.width;
     //   this.y = Math.random() * canvas.height;
        this.radius = (Math.random() * 10) + 20;
        this.speedX = (Math.random() * 3) - 1.5;
        this.speedY =  (Math.random() * 3) - 1.5;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'lightblue';
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.stroke();
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.radius > 0.2) {this.radius -= 0.1};
    }
}
function init(){
    for (let i = 0; i < numberOfParticles; i++){
        particlesArray.push(new Particle());
    }
}
function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].radius <= 0.3){
            particlesArray.splice(i, 1);
            --i;
        }
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}
init();
animate();

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})