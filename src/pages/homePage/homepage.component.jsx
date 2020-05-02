import React, { Component } from 'react'
import './homepage.styles.scss'

// components
import Navbar from '../../components/navbar/navbar.component'
import Parallex from '../../components/parallex/parallex.component'
import FuturedProducts from '../../components/futuredProducts/futuredProducts.component'

import Footer from '../../components/footer/footer.component'



export default class Homepage extends Component {
    render() {
        return (
            <div >
                <Navbar />

                

                <FuturedProducts />
                <Parallex />
                <Footer />
            </div>
        )
    }
}
