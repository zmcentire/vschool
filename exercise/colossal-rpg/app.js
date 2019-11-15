const ask = require('readline-sync')
let isAlive = true;
let hasWon = false;
let currEnemy
let attack
let enemyAttack


function Enemy(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}

const greenGoblin = new Enemy('Green Goblin', 400, 25)
const docOc = new Enemy('Doc Oc', 300, 30)
const mysterio = new Enemy('Mysterio', 500, 5)
const vulture = new Enemy('Vulture', 300, 20)
const electro = new Enemy('Electro', 200, 25)
const rhino = new Enemy('Rhino', 500, 15)

const enemies = [greenGoblin, docOc, mysterio, vulture, electro, rhino]

function Hero (name, hp, ap) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}

const hero = new Hero('Spider-man', 700, 20)

let inventory = ["Web Shooter", "Picture of Mr.Stark"] 

console.log("Hello, welcome to Spider-Man text adventure!")
const name = ask.question('What is your name? ')

console.log(`Welcome to the game ${name}, your Spider-Man journey awaits! Lets take down the Sinister Six!`)

while(isAlive && !hasWon){
    let choice = ask.keyIn('Would you like to (w) web-swing, (i) check inventory, or (q) Leave Game?'
    , {limit: 'wiq'})
    if(choice === 'w'){
        walk()
    } else if(choice === 'i'){
        printInventory() 
    } else {
        isAlive = false
        console.log('You quit the game')
    } if (enemies.length === 0){
        hasWon = true
        console.log("You have defeated the Sinister Six! You won!")
    }
}


function selectEnemy(){
    let random = Math.floor(Math.random()*enemies.length)
    return enemies[random]
}

function walk() {
    let random = Math.floor(Math.random()*3)
    if(random === 2)
    {
        currEnemy = selectEnemy()
        enemyEncounter()
    } else {
        console.log('You continue swinging around the city')
    }
}


function enemyEncounter(){
    
    let choice = ask.keyIn(`You encountered ${currEnemy.name}! Would you like to [a] Attack, [g] Use gadget [r] Run, 
    or [q] Quit`, {limit: 'agrq'})
    if(choice === 'a'){
        fight()
    } else if(choice === 'g'){
        gadget()
    } else if (choice === 'r'){
        run()
    } else {
        isAlive = false
        console.log('you quit the game')
    }
    
    function fight(){
        attack = hero.ap*Math.floor(Math.random()*6)
        enemyAttack = currEnemy.ap*Math.floor(Math.random()*6)
        currEnemy.hp -= attack
        console.log(`You chose to attack ${currEnemy.name}! ${currEnemy.name}'s health is now at ${currEnemy.hp} HP`)
        if(currEnemy.hp <= 0){
            enemies.splice(enemies.indexOf(currEnemy),1)
            console.log("You are Victorious! HP has been restored by 100.")
            hero.hp += 100
            if(currEnemy.name === "Electro"){
                console.log("You have received a new gadget - Shock Webs")
                inventory.push("Shock Webs")
            } else if(currEnemy.name === "Green Goblin"){
                console.log("You have received a new gadget - Web bombs")
                inventory.push("Web Bomb")
            } else if (currEnemy.name === "Doc Oc"){
                console.log("You have received a new gadget - spider drones")
                inventory.push("Spider Drone")
            } else if(currEnemy.name === "Rhino"){
                console.log("You have received a new gadget - Impact Webs")
                inventory.push("Impact Web")
            } else if(currEnemy.name === "Mysterio"){
                console.log("You have received the Edith Glasses")
                inventory.push("Edith Glasses")
            } else if(currEnemy.name === "Vulture"){
                console.log("You have received a new gadget - Trip Mines")
                inventory.push("Trip mine")
            }
        } else if(hero.hp <= 0){
            isAlive = false
            console.log("You have died. Nice try web-head.")
        } else {
            hero.hp -= enemyAttack
            console.log(`${currEnemy.name} has attacked! You are now at ${hero.hp} HP`)
            if(hero.hp <= 0){
                isAlive = false
                console.log("You have died. Nice try web-head")
            }else {
                enemyEncounter(currEnemy)
            }
        }
    }

    function gadget(){
        printInventory()
        let choice = ask.question("What gadget would you like to use?")
        if(choice === "web shooter"){
            console.log("You attacked with Web Shooters")
            fight(currEnemy)
            attack += 25 
        } else if(choice === "shock web"){
            console.log("You attacked with shock webs")
            fight(currEnemy)
            attack += 40
        } else if(choice === "spider drone"){
            console.log("You attacked with the spider drone")
            fight(currEnemy)
            attack += 100
        }else if(choice === "picture of mr.stark"){
            console.log("You shed a tear for your lost mentor, RIP Mr.Stark")
            fight(currEnemy)
        }else if(choice === "impact web"){
            console.log("You attacked with Impact Webs")
            fight(currEnemy)
            attack += 75
        }else if(choice === "web bomb"){
            console.log("You attacked with Web Bombs")
            fight(currEnemy)
            attack += 90
        }else if(choice === "Edith Glasses"){
            console.log("You attacked using the Edith Glasses")
            fight(currEnemy)
            attack += 300
        }else if(choice === "trip mine"){
            console.log("You attacked with a web trip mine")
            fight(currEnemy)
            attack += 25
        }
    }

    function run() {
        let random = Math.floor(Math.random()*2)
        enemyAttack = currEnemy.ap*Math.floor(Math.random()*6)
        hero.hp -= enemyAttack
        if(random === 1){
            console.log("You escaped successfuly")
            walk()
        } else {
            console.log("Your escape was unsuccessful")
            console.log(`${currEnemy.name} has attacked! You are now at ${hero.hp -= enemyAttack} HP`)
            enemyEncounter(currEnemy)
            if(hero.hp <= 0){
                isAlive = false
                console.log("You have died")
            } else {
                
            }

        }
    }
}



function printInventory(){
    console.log("HP: " + hero.hp, inventory)
}

// if (enemies.length = 0){
//     hasWon = true
//     console.log("You have defeated the Sinister Six! You won!")
// }

 








