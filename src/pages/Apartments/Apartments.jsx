import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Apartments = () => {
    const dataHeader = {
        bg_img: "./img/apartments.jpg",
        title : "My home, my castle, my world, my dream",
        subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus ullam obcaecati, voluptate cupiditate exercitationem perspiciatis distinctio earum!",
        btn : "More"
    }
    return (
      <>
          <Navigation/>
          <Header data={dataHeader}/>
          <Footer/>
      </>
    )
}

export default Apartments