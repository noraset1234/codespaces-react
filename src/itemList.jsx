import React, { useState ,useEffect} from 'react';

function Item({ name, isPacked = false }) {
    return (
        <li key={name}>
            {name} {isPacked ? "✔" : "❌"}
        </li>
    );
}

export default function ItemList() {
    const [searchTerm, setSearchTerm] = useState(""); // State for search input
    useEffect(()=>{
        console.log("This component is load");
        return ()=>{
            alert("component unloaded")
        }
    })
    const items = [
        { name: "Sunglass", isPacked: false },
        { name: "Sunblock", isPacked: true },
        { name: "Swimming suit", isPacked: true },
        { name: "Powerbank", isPacked: false }
    ];

    // Filter the list based on the search term
    const filterList = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const itemsList = filterList.map((item, index) => (
        <Item key={index} name={item.name} isPacked={item.isPacked} />
    ));

    return (
        <>
            {/* Input box for search */}
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {itemsList.length > 0 ? itemsList : <li>No items found</li>}
            </ul>
        </>
    );
}
