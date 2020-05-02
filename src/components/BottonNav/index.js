import React from 'react'
import { push } from "connected-react-router";
import { connect } from 'react-redux'
import { routes } from '../../containers/Router';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SvgIcon from '@material-ui/core/SvgIcon'
import { setActualPage } from '../../actions/navigation';
import { Wrapper } from './styles'




function HomeLogo(props) {
  return (
    <SvgIcon width="33px" height="33px" viewBox="0 0 33 33" {...props}>
      <path d="M28.5,0h-24C2.019,0,0,2.019,0,4.5v24C0,30.98,2.019,33,4.5,33h24c2.48,0,4.5-2.02,4.5-4.5v-24C33,2.019,30.98,0,28.5,0z
			 M31.5,28.5c0,1.648-1.35,3-3,3h-24c-1.65,0-3-1.352-3-3v-24c0-1.649,1.35-3,3-3h24c1.65,0,3,1.351,3,3V28.5z"/>
      <circle cx="9.25" cy="4.773" r="1.273" />
      <circle cx="16.5" cy="4.773" r="1.273" />
      <circle cx="23.75" cy="4.773" r="1.273" />
      <rect x="11.134" y="12.902" width="4.596" height="4.088" />
      <rect x="17.271" y="12.902" width="4.595" height="4.088" />
      <rect x="23.404" y="12.902" width="4.596" height="4.088" />
      <rect x="5" y="18.359" width="4.595" height="4.086" />
      <rect x="11.134" y="18.359" width="4.596" height="4.086" />
      <rect x="17.271" y="18.359" width="4.595" height="4.086" />
      <rect x="23.404" y="18.359" width="4.596" height="4.086" />
      <rect x="5" y="23.816" width="4.595" height="4.086" />
      <rect x="11.134" y="23.816" width="4.596" height="4.086" />
      <rect x="17.271" y="23.816" width="4.595" height="4.086" />
      <rect x="23.404" y="23.816" width="4.596" height="4.086" />
    </SvgIcon>
  )
}
function CartLogo(props) {
  return (
    <SvgIcon viewBox="0 0 27 29" {...props}>
      <path fillRule="nonzero" d="M19.305 18.924H3.296C1.481 18.924 0 17.46 0 15.664V9v-.024-.047c0-.012 0-.024.006-.036 0-.012.006-.03.006-.041 0-.012.006-.024.006-.036.006-.011.006-.023.012-.04.006-.013.006-.025.012-.036.006-.012.006-.024.012-.036a.286.286 0 0 0 .018-.041c.006-.012.012-.024.018-.03L.107 8.6c.006-.012.012-.018.018-.03.006-.012.018-.023.024-.035.006-.012.012-.018.024-.03.006-.011.018-.017.024-.03.006-.011.018-.017.024-.029.006-.012.018-.017.024-.023l.03-.03c.012-.006.018-.018.03-.024.011-.005.023-.017.035-.023.012-.006.018-.012.03-.018.012-.006.024-.012.036-.024l.036-.017.036-.018.036-.018c.011-.006.023-.006.035-.011a.112.112 0 0 1 .042-.012c.012 0 .024-.006.03-.006.018-.006.03-.006.048-.006.006 0 .012-.006.024-.006l20.29-2.77v-2.8c0-.03 0-.06.006-.083 0-.006 0-.012.006-.024 0-.017.006-.035.006-.053.006-.018.006-.03.012-.047 0-.012.006-.018.006-.03l.018-.053c0-.006.006-.018.006-.023a.176.176 0 0 1 .023-.048c.006-.006.006-.017.012-.023.006-.012.012-.024.024-.036.006-.012.012-.018.018-.03.006-.011.012-.017.018-.029.006-.012.018-.023.024-.035l.018-.018.036-.035.018-.018c.012-.012.024-.024.041-.036.006-.006.018-.011.024-.017.012-.012.024-.018.036-.03.018-.012.036-.024.048-.03.006-.005.012-.005.018-.011.024-.012.054-.024.077-.036L25.88.064a.808.808 0 0 1 1.057.424.793.793 0 0 1-.43 1.046l-3.905 1.63v17.473c0 1.654-1.254 3.025-2.872 3.232.293.484.466 1.051.466 1.654 0 1.778-1.463 3.219-3.255 3.219-1.791 0-3.254-1.447-3.254-3.22 0-.59.161-1.151.448-1.624h-7.25c.287.479.449 1.034.449 1.625 0 1.778-1.463 3.219-3.255 3.219-1.791 0-3.254-1.447-3.254-3.22 0-1.772 1.463-3.219 3.254-3.219h15.227c.931 0 1.684-.75 1.684-1.666v-2.162a3.361 3.361 0 0 1-1.684.45zm-4.013 6.593c0 .898.74 1.624 1.642 1.624a1.64 1.64 0 0 0 1.642-1.624 1.64 1.64 0 0 0-1.642-1.625c-.901 0-1.642.727-1.642 1.625zm-12.862 0c0 .898.74 1.624 1.642 1.624a1.64 1.64 0 0 0 1.642-1.624 1.64 1.64 0 0 0-1.642-1.625c-.901 0-1.642.727-1.642 1.625zm.866-8.188h16.009c.931 0 1.684-.75 1.684-1.665V7.045L1.612 9.685v5.973c0 .927.759 1.671 1.684 1.671z" />
    </SvgIcon>
  )
}
function ProfileLogo(props) {
  return (
    <SvgIcon viewBox="0 0 27 30" {...props}>
      <path d="M13.441 16.452h.208c1.904-.032 3.443-.683 4.58-1.929 2.502-2.744 2.086-7.448 2.04-7.897-.162-3.37-1.8-4.982-3.15-5.735C16.11.33 14.934.025 13.622 0H13.512c-.72 0-2.137.114-3.495.866-1.364.753-3.027 2.365-3.19 5.76-.045.45-.46 5.153 2.04 7.897 1.13 1.246 2.67 1.897 4.574 1.929zM8.562 6.784c0-.019.007-.038.007-.05.214-4.534 3.52-5.02 4.937-5.02h.078c1.754.037 4.736.733 4.938 5.02 0 .019 0 .038.006.05.007.044.462 4.344-1.604 6.607-.82.898-1.91 1.34-3.346 1.353h-.065c-1.43-.012-2.528-.455-3.34-1.353-2.06-2.25-1.617-6.569-1.611-6.607z" />
      <path d="M26.127 23.985v-.018c0-.049-.006-.097-.006-.152-.038-1.2-.121-4.004-2.882-4.9-.019-.007-.044-.013-.063-.019-2.87-.696-5.255-2.271-5.28-2.29a.885.885 0 0 0-1.196.2.792.792 0 0 0 .21 1.14c.108.072 2.64 1.75 5.808 2.525 1.482.503 1.647 2.011 1.692 3.393 0 .054 0 .103.006.151.006.545-.032 1.387-.134 1.872-1.03.557-5.07 2.483-11.214 2.483-6.12 0-10.185-1.932-11.222-2.49-.101-.484-.146-1.326-.133-1.871 0-.049.006-.097.006-.152.045-1.38.21-2.889 1.692-3.392 3.168-.775 5.7-2.46 5.808-2.526a.792.792 0 0 0 .21-1.139.885.885 0 0 0-1.196-.2c-.025.019-2.398 1.594-5.28 2.29-.025.006-.044.012-.063.018C.129 19.811.046 22.616.008 23.81c0 .055 0 .103-.006.151v.019c-.007.315-.013 1.932.324 2.744.064.157.178.29.33.381C.849 27.226 5.422 30 13.075 30s12.226-2.78 12.417-2.896a.821.821 0 0 0 .33-.381c.319-.806.313-2.423.306-2.738z" />
    </SvgIcon>
  )
}

class MyBottonNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'fwfwe'
    }
  }

  componentDidMount() {
    this.setState({
      value: this.props.local
    })
  }

  onNavChange = (e, newValue) => {
    this.setState({
      value: newValue
    })
    switch (newValue) {
      case 'home':
        this.props.goToHomePage()
        this.props.setPlace('home')
        break;
      case 'cart':
        //  this.props.goToCartPage()
        this.props.setPlace('cart')
        break;
      case 'profile':
        //this.props.goToProfilePage()
        this.props.setPlace('profile')
        break;
      default:
        // this.props.goToHomePage()
        this.props.setPlace('home')
        break;
    }
  }

  render() {
    console.log(this.props.local)
    console.log(this.state.value)
    return (
      <Wrapper>
        <BottomNavigation value={this.state.value} onChange={this.onNavChange}>
          <BottomNavigationAction value="home" icon={<HomeLogo style={{ fontSize: 35 }} />} />
          <BottomNavigationAction value="cart" icon={<CartLogo style={{ fontSize: 35 }} />} />
          <BottomNavigationAction value="profile" icon={<ProfileLogo style={{ fontSize: 35 }} />} />
        </BottomNavigation>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  local: state.navigation.actualPage
})

const mapDispatchToProps = (dispatch) => ({
  goToHomePage: () => dispatch(push(routes.home)),
  goToCartPage: () => dispatch(push(routes.carrinho)),
  goToProfilePage: () => dispatch(push(routes.minhaConta)),
  setPlace: (actualPlace) => dispatch(setActualPage(actualPlace))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyBottonNav)