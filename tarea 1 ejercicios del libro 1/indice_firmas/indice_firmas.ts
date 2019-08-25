interface Lakes {
    name:string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[],
    frozen?: string[],
    [extraProp: string]: any
}

let fourthLake: Lakes = {
    name: 'Tanganyika',
    depth: 1470,
    length: 676,
    area: 32600,
    isFreshwater: true,
    countries: ['Burundi','Tanzania','Zambia','Congo'],
    Kigoma: 'Tanzania',
    kalemie: 'Congo',
    bujumbura: 'Burundi'
}