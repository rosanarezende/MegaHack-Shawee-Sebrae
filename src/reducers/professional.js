const initialState = {
  professionalData: {
    businessImage: 'https://user-images.githubusercontent.com/45580434/80896819-ddc14480-8cc8-11ea-8991-afc026c3007e.png',
    businessName: 'Joana Beauty',
    businessAbout: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eligendi voluptatibus! Ducimus porro quod beatae asperiores blanditiis officia, assumenda tempora non fugiat similique sed ipsam, eligendi nisi repudiandae in recusandae?',
    image: 'https://user-images.githubusercontent.com/45580434/80915267-869e8c80-8d27-11ea-9fd5-11bd16d60cfd.jpg',
    name: 'Joana Silva',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, possimus. Vero voluptatum cumque temporibus hic nesciunt commodi error saepe suscipit optio ullam recusandae nemo illo, architecto cupiditate voluptatem delectus ad.'
  },
  services: [],
  locations: []
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
    default:
      return state
  }
}

export default professional