const initialState = {
    professionalData: {
        businessImage: 'https://user-images.githubusercontent.com/45580434/80896819-ddc14480-8cc8-11ea-8991-afc026c3007e.png',
        businessName: 'Joana Beauty',
        businessAbout: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eligendi voluptatibus! Ducimus porro quod beatae asperiores blanditiis officia, assumenda tempora non fugiat similique sed ipsam, eligendi nisi repudiandae in recusandae?',
        image: 'https://user-images.githubusercontent.com/45580434/80915267-869e8c80-8d27-11ea-9fd5-11bd16d60cfd.jpg',
        name: 'Joana Silva',
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, possimus. Vero voluptatum cumque temporibus hic nesciunt commodi error saepe suscipit optio ullam recusandae nemo illo, architecto cupiditate voluptatem delectus ad.'
    },

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

    products: [
      {
          id: 1,
          name: 'Shampoo Herbal',
          value: 30,
          img: 'https://user-images.githubusercontent.com/45580434/80917398-00894280-8d35-11ea-9892-beedc8447fc2.jpg'
      },
      {
          id: 2,
          name: 'Esmalte',
          value: 22.5,
          img: 'https://user-images.githubusercontent.com/45580434/80917325-6e813a00-8d34-11ea-9879-9bc0390698e1.jpg'
      },
      {
          id: 3,
          name: 'Maquiagem',
          value: 60,
          img: 'https://user-images.githubusercontent.com/45580434/80917442-4940fb80-8d35-11ea-9038-d2d926fd456a.jpg'
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

        case 'SET_PROFESSIONAL_DATA': 
            return {
                ...state,
                professionalData: action.payload.data
            }
        
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
        case 'SET_PRODUCT':
            return {
                ...state,
                products: state.products.push(action.payload.product)
            }

        default:
            return state
    }
}

export default professional