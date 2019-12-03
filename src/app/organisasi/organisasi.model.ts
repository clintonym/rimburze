export interface Organisasi {
    //id: string,
    name: string,
    password: string,
    year: number,
    history: History[],
    outcome: Outcome[]
}

export interface Outcome {
    //id: string,
    email: string,
    name: string,
    obj: Obj[]
}

export interface Obj {
    //id: string,
    objName: string,
    price: number,
    date: string
}

export interface History {
    //id: string,
    name: string,
    date: string,
    total: number
}

export interface Users{
    name: string,
    email: string
}

// export class Organisasi {
//     constructor(
//         public id: string,
//         public name: string,
//         public password: string,
//         public year: string,
//         public history: History[],
//         public outcome: Outcome[]
//     ) {}
// }

// export class Outcome {
//     constructor(
//         public id: string,
//         public name: string,
//         public obj: Obj[]
//     ) {}
// }

// export class Obj {
//     constructor(
//         public id: string,
//         public objName: string,
//         public price: number,
//         public date: string
//     ) {}
// }

// export class History {
//     constructor(
//         public id: string,
//         public name: string,
//         public date: string,
//         public total: number
//     ) {}
// }