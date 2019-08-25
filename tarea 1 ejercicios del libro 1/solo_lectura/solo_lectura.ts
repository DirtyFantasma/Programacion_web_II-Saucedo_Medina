interface Enemy {
    readonly size: number,
    health: number,
    range: number,
    readonly damage: number
}
let tank: Enemy = {
    size: 50,
    health: 100,
    range: 60,
    damage: 12
}

tank.health = 95;
// esta linea contiene un error ya que daño es de solo lectura
//tank.damage = 10; 
//continuacion de funciones e interfaces

//---------Funciones e interfaces
interface EnemyHit {
    (name: Enemy, damageDone: number): number;
}

let tankHit: EnemyHit = function(tankName: Enemy, damageDone: number){
    tankName.health -= damageDone;
    return tankName.health;
}