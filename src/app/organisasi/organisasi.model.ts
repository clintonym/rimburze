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
    histName: string,
    histDate: string,
    histTotal: number,
    histUser: string,
    histEmail: string
}

export interface Users{
    displayName: string,
    email: string
}