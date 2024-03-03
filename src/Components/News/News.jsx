import React from 'react';
import './News.css';
import NewsC from './NewsCard/NewsC';
import ScrollReveal from 'scrollreveal';
import {useEffect} from 'react';


const News = () => {

    useEffect(()=>{
        ScrollReveal().reveal('.Explore-Body-1', {
            origin: 'bottom',
            delay: 500,
            distance: '100px',
            easing: 'ease-in-out',
            duration: 1000
            });

           ScrollReveal().reveal('.Explore-Heading', {
            origin: 'left',
            delay: 500,
            distance: '100px',
            easing: 'ease-in-out',
            duration: 1000
            }); 
    },[])

    const size = window.innerWidth;
  return (
    <div className="Explore-Container">
        <div className="Explore-Heading">
            <span>03 Guidance</span>
            <h2>Expert advice, Things to be remember in Ayodhya.</h2>
        </div>
        <div className="Explore-Body">
            <div className="Explore-Body-1">
                {size>=1005?(<>
        <NewsC height={250} width={400} boxHeight={250}  imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/>
        <NewsC height={250} width={400} boxHeight={250}  imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/></>):(<>
        <NewsC height={100} width={150} boxHeight={100}  imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/>
        <NewsC height={100} width={150} boxHeight={100}  imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/></>)}
                <div className="viewMore">
                </div>
            </div>
            <div className="Explore-Body-2">
                {size>=1005?
                (
                <>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/>
                </>
                ):
                (
                <>
                <NewsC height={90} width={130} boxHeight={90}  imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/>
                <NewsC height={90} width={130} boxHeight={90}  imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/>
                <NewsC height={90} width={130} boxHeight={90}  imgSrc={'./Images/ThingsRemember/askHelp.jpeg'}/>
                </>
                )}
            </div>
        </div>
    </div>
  )
}

export default News;