import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles.css'

const ApartmentDetails = () => {
    const {id} = useParams();

    const [data, setData] = useState();

    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "https://raw.githubusercontent.com/Alex-Hlatsko/react-apartment-store/main/public/data_en.json"
          )
        ).json();
            
        // set data with this id
        setData((data.apartments)?.find(ap => ap.id === id))
      };
    
      dataFetch();
    },[]);
    const images = data?.images;
    const address = data?.address;

    return (
      <>
        <Navigation logo="../img/logo.svg"/>
        <div className="details">
            <div className="details_img flex flex-col justify-center items-center">
                <Carousel>
                    {images?.map(d => (
                        <div key={d}>
                            <img src={d} alt="img"/>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="details_content">
                <p className="details_subtitle text-gray-500">#{id}</p>
                <h1 className="details_title">{data?.title}</h1>
                <p className="details_subtitle text-gray-500 text-sm">{data?.description}</p>


                <p className="details_subtitle text-gray-500 mb-6">{address?.street}, {address?.city}</p>

                <div className="flex justify-between bg-slate-100 text-gray-500">
                    <p className="details_subtitle">Num. of rooms</p>
                    <p className="details_subtitle">Gross area</p>
                </div>
                <div className="flex justify-between bg-slate-100">
                    <p className="details_subtitle">{data?.num_rooms}</p>
                    <p className="details_subtitle">{data?.area} m2</p>
                </div>

                <div className="flex justify-between text-gray-500 mt-3">
                    <p className="details_subtitle">Zip code</p>
                    <p className="details_subtitle">Tel.</p>
                </div>
                <div className="flex justify-between">
                    <p className="details_subtitle">{address?.zipcode}</p>
                    <p className="details_subtitle">{address?.tel}</p>
                </div>
            </div>
        </div>
        <Footer/>
      </>
    )
}

export default ApartmentDetails