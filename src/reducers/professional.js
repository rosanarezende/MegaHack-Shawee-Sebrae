const initialState = {
    services: [
        {
            id: 1,
            name: 'Corte de cabelo masculino',
            value: 30,
            durationTime: 9,
            img: 'https://static1.belezaextraordinaria.com.br/articles/6/24/02/6/@/241661-o-corte-curto-com-maquina-e-uma-boa-opca-article_news-3.jpg'
        },
        {
            id: 2,
            name: 'Corte de cabelo feminino',
            value: 50,
            durationTime: 130,
            img: 'https://static1.belezaextraordinaria.com.br/articles/1/23/87/1/@/241011-veja-os-nomes-dos-cortes-mais-famosos-e-article_news-4.jpg'
        },
        {
            id: 3,
            name: 'Descoloração',
            value: 60,
            durationTime: 121,
            img: 'https://correio-cdn1.cworks.cloud/fileadmin/_processed_/f/c/csm_shutterstock_249360427_d9678da4c4.jpg'
        },
    ],
    locations: [
        {
            id: 1,
            name: 'Salão do Fulanão',
            value: undefined
        },
        {
            id: 2,
            name: 'À domicílio',
            value: 10
        }
    ]
}

const professional = (state = initialState, action) => {

    switch (action.type) {
        
        case 'SET_SERVICES': 
            return {
                ...state,
                services: action.payload.services
            }

        case 'SET_LOCATIONS':
            return {
                ...state,
                locations: action.payload.locations
            }

        default:
            return state
    }
}

export default professional