import React from 'react';
import styled from "styled-components"

function Item({listing}) {
  return <Container>
<Table>
<TableRow>
    <TableHeader>Images</TableHeader>
    <TableHeader>Price</TableHeader>    
    <TableHeader>Color</TableHeader>
    <TableHeader>Condition</TableHeader>
    <TableHeader>Fuel Capacity</TableHeader>
    <TableHeader>Type</TableHeader>
</TableRow>
<TableRow>
    <TableData><img src={listing.imagUrls}  width="50px" height="50px" alt="tesla"/></TableData>       
    <TableData>{listing.Price}</TableData>
    <TableData>{listing.color}</TableData>
    <TableData>{listing.condition}</TableData>
    <TableData>{listing.fuelCapacity}</TableData>
    <TableData>{listing.type}</TableData>
 </TableRow>        
</Table>
<br/>
  </Container>;
}

export default Item;

const Container = styled.div`
	margin-right:auto;
	margin-left:auto;
	display:flex;
    flex-direction: column;
	justify-content:space-between;
	align-items:center;
	min-height:100%;
`;

const Table = styled.table`
width:100%;
border: 0.5px solid black;
`;

const TableHeader= styled.th`
    background-color:black;
    color:white;
    padding:10px;
`;

const TableRow = styled.tr`
    
`

const TableData = styled.td`
padding:20px;

`;