export interface IUser {
    id: number
    name: string
    email: string
    avatar: string
    isBan: string
    banDate: string
    banReason: string
    isActivated: string
    roles: IRole[]
}

export interface IRole{
    id: number
    name: string
    description: string
}