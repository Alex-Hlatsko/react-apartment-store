import React, {useEffect, useState} from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Apartment from '../../components/Apartment/Apartment'
import './styles.css'

const Apartments = () => {
    const dataHeader = {
        bg_img: "./img/apartments.jpg",
        title : "My home, my castle, my world, my dream",
        subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus ullam obcaecati, voluptate cupiditate exercitationem perspiciatis distinctio earum!",
        btn : "More"
    }

    const [data, setData] = useState();

    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "https://raw.githubusercontent.com/Alex-Hlatsko/react-apartment-store/main/public/data_en.json"
          )
        ).json();
            
        // set state when the data received
        setData(data.apartments);
      };
    
      dataFetch();
    }, []);
    return (
      <>
          <Navigation/>
          <Header data={dataHeader}/>
          
          <div className="apartments flex flex-wrap justify-center">
            {data?.map(d => (<Apartment key={d.id} data={d}/>))}
          </div>

          <Footer/>
      </>
    )
}

export default Apartments