interface Props<T> {
    name: string,
    age: number;
    payload: T
}

const props: Props<string> = {
    name: "Alejo",
    age: 23,
    payload: "Carga útil"
}

const props2: Props<number> = {
    name: "Alejo",
    age: 23,
    payload: 1
}

const props3: Props<boolean | number> = {
    name: "Alejo",
    age: 23,
    payload: true
}

type Generico<T> = T | number

const gen: Generico<string> = 1