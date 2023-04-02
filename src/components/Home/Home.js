import React from 'react';
import '../Home/home.scss'
import { useGlobalContext } from '../cards/cards';
import Search from './search';
const Home = () => {
    const { data } = useGlobalContext();
    return (
        <div className='home' >
            
            <div className='input-header'>
                <h1 className='heder1'>Character</h1>
                <input className='home-input' type="text" placeholder='search' />
                <button className='search-btn'>search</button>
                
            </div>
            <div className='main'>
                <div className='filter'>
                    <form>
                        <h2>Filter</h2>
                        <button>clear all</button>
                    </form>
                </div>
                <div className='cards'>
                    {data.map((item) => {
                        const btn =()=>{
                            if (item.status==="Alive") {
                                return "alive"
                            }else if(item.status==="Dead"){
                            return "dead"
                            }else if(item.status==="unknown"){
                                return "unknown"
                            }
                        }
                        return (
                            <div className='card'>
                                <button className={btn()}>{item.status}</button>
                                <img className='imges' src={item.image}/>
                                <h2 className='h2tag'>{item.name}</h2>
                                <p className='ptag'>{item.location.name}</p>
                                <button className='more'>more</button>
                                
                            </div>
                        )
                    })}
                </div>
                






            </div>  

        </div>
    );
}

export default Home;
