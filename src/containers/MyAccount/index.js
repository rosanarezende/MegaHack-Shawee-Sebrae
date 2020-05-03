import React from 'react'
import { connect } from 'react-redux'

import MyBottonNav from '../../components/BottonNav'

function MyAccount() {

    return (
        <>
            <div>
                Minha conta
            </div>

            <MyBottonNav />
        </>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)