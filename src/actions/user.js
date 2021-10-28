import { 
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 3.70,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Carlos Terrero',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 7.90,
                orderNumber: '24343sdfkjh72',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Oscar Terrero',
                    shippingAddress: '1337 West State Street'
                }
            },
            {
                _id: 2,
                total: 1.30,
                orderNumber: 'B0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Daniel Elalde',
                    shippingAddress: 'State Street'
                }
            },
            {
                _id: 3,
                total: 16.40,
                orderNumber: 'ADFasdlfkjwe',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Fran Lopez',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 19.40,
                orderNumber: '48a646844f',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'José Fernando',
                    shippingAddress: '8541 West'
                }
            },
            {
                _id: 5,
                total: 8.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Roberto Herrero',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 12.10,
                orderNumber: '1fa68ef46ass1',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Anudis Reyes',
                    shippingAddress: '112 Street'
                }
            },
            {
                _id: 7,
                total: 3.20,
                orderNumber: '5UFISHDFJASUSHI298',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Joel De Jesus',
                    shippingAddress: '348 Yo State Street'
                }
            }            
        ]
    })
} 