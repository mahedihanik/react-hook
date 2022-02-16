import React,{useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title:'What is React?',
        content:'React is a front end javascript framework'
    },
    {
        title:'Why use React?',
        content:'React is a favourite javascript framework among engineers'
    },
    {
        title:'How do you use React?',
        content:'You use React by creating components'
    },
]


const options = [
    {
        label: 'The color is Red',
        value: 'red'
    },
    {
        label: 'The color is Green',
        value: 'Green'
    },
    {
        label: 'The color is Blue',
        value: 'blue'
    },

]

// export default ()=>{
//     const [selected, setSelected] = useState(options[0]);
//     const [showDropdown, setShowDropdown] = useState(true);
//     console.log(showDropdown);
//     return (
//         <div>
//             <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
//             {/*<Accordion items={items}/>*/}
//             {/*<Search/>*/}
//             {showDropdown ? <Dropdown selected={selected} onSelectedChange={setSelected} options={options} /> :null}
//         </div>
//     );
// };


export default ()=>{

    return (
        <div>
            {/*<Accordion items={items}/>*/}
            {/*<Search/>*/}
            <Translate/>

        </div>
    );
};