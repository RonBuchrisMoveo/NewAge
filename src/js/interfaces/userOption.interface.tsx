export interface IUserOption {
    ActivityId: number
    Grade: number
    Image: null|string
    Name: string
    Name1: string
    ShortDescription: string
}
export interface ISortResult {
    name:string
    results:[{
        Matchs:IUserOption[]
        Intrest:IUserOption[]
        Maby:IUserOption[]
    }]
}