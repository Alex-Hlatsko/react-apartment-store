import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Content from '../../components/Content/Content'

const About = () => {
  const dataHeader = {
    bg_img: "./img/contact.jpg",
    title : "Find the perfect place for you",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus ullam obcaecati, voluptate cupiditate exercitationem perspiciatis distinctio earum!",
    btn : "More"
  }

  const dataContent = {
    img: "./img/contact_content.jpg",
    title : "Find a place for yourself and make your dreams come true",
    subtitle : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus fugiat dolorum, incidunt suscipit unde, adipisci voluptate quo voluptatem inventore saepe eligendi numquam voluptas quisquam sequi placeat ratione tempora nihil accusantium ullam dolores.",
    btn : "Show"
  }
  return (
    <>
        <Navigation/>
        <Header data={dataHeader}/>
        <Content data={dataContent}/>
        <Footer/>
    </>
  )
}

export default About