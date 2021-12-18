import React from 'react'
import Banner from '../components/banner/Banner';
import SmallCards from '../components/cards/SmallCards';
import Header from '../components/Header';
import MediumCardList from '../components/cards/posta/MediumCardList';
import LrgeCard from '../components/cards/large/LrgeCard';
import Footer from '../components/footer/Footer'


const Home = () => {
  return (
    <>
      <Header placeholder='Start your search...' />

      <Banner />

      <div className='flex flex-col gap-6 pt-6 px-8 max-w-[1400px] mx-auto'>

        <SmallCards />

        <MediumCardList />

        <LrgeCard
          image='https://links.papareact.com/4cj'
          title='The Greathest OutDoors'
          description='Widhers occures by vode executor'
          buttonText='Get Inspired'
        />

       

      </div>

      <Footer />
      
    </>
  );
};

export default Home
