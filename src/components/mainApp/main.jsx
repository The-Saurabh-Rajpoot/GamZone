import { useEffect, useState } from "react"
import Header from "../header/header"
import axios from "axios";
import Item from "../item/item"
import "./main.css"
const Main=()=>{
    const [bestSaller,setBestSaller]=useState([]);
    const [war,setWar]=useState([]);
    useEffect(()=>{
        
        axios.get('http://localhost:1337/api/best-sallers?populate=*').then((best_saller)=>{
               setBestSaller(best_saller.data.data);
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{

        })
        axios.get('http://localhost:1337/api/wars?populate=*').then((war)=>{
               setWar(war.data.data);
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            
        })
    },[])
    return(
        <>
        <Header />
        <section>
            {bestSaller.map((item,key)=>{
                
                return(
                    <Item item={item.attributes} key={`${key} ${item.attributes.Titel}`} />
                )
            })}
        </section>
        <section>
            {war.map((item,index)=>{
                
                return(
                    <Item item={item.attributes} key={`${index} ${item.attributes.Titel}`} />
                )
            })}
        </section>
        </>
    )
}
export default Main