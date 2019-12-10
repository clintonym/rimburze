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
    displayName: string,
    email: string
}