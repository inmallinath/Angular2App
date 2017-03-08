export class IShipment{
    case: string
    serialNumber: string
    model: string
    date: string
    eta: Date
    closed: boolean 
    shippingCost: number
    returnCost: number
    warranty: boolean
    orderType: string
    carrier: string
    destination: string
    notes: string
}