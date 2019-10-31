export class Organisasi {
    constructor(
        public id: string,
        public name: string,
        public year: string,
        public history: History[],
        public outcome: Outcome[]
    ) {}
}

export class Outcome {
    constructor(
        public id: string,
        public name: string,
        public obj: Obj[]
    ) {}
}

export class Obj {
    constructor(
        public id: string,
        public objName: string,
        public price: number,
        public date: string
    ) {}
}

export class History {
    constructor(
        public id: string,
        public name: string,
        public date: string,
        public total: number
    ) {}
}