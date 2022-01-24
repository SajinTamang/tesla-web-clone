import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {collection,getDocs, query, orderBy, limit} from "firebase/firestore";
import {db} from "../../firebase.config";
// import {getAuth,onAuthStateChanged} from "firebase/auth";
// import {useNavigate} from "react-router-dom";
import Item from '../Item';

function Shop() {
    const [listings,setListings] = useState(null);
    console.log(`Listings are : ${listings}`);
    useEffect(()=>{
        const fetchListings = async()=>
        {
            try{
                // Get access to Listing on database
                const listingRef = collection(db,"listings");

                // Create a query to access list from those listings 
                const q = query(
                    listingRef,
                    orderBy("timestamp","desc"),
                    limit(10)
                )
                // Executing query

                const querySnap = await getDocs(q);
                let listings = [];
                querySnap.forEach((doc)=>{
                    return listings.push({
                        id:doc.id,
                        data:doc.data()
                    })
                })
                 setListings(listings);
                console.log(listings);

            }catch(error){
                console.log(error);
            }
        }
        fetchListings();
    },[])



  return <ShopContainer>
      
    <ItemContainer>
        <br/>
        <h2>Shop your Tesla car</h2>
        <br/>
        {listings && listings.length > 0 ? <>
             <main>
        <ul className="categoryListings">
            {listings.map((listing)=>(
                <Item  listing={listing.data} id={listing.id} key={listing.id}/>
            ))}
        </ul>
  </main>
        </> : <p>No Tesla cars to show</p>}
    </ItemContainer>
  </ShopContainer>;
}

export default Shop;


const ShopContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: lightgray;
    margin-top: 60px;
`


const ItemContainer = styled.table`
width:100%;
margin-top: 60px;
`;

