import React, { useEffect, useState } from 'react';
import Tree from '../Tree/Tree';
import './Trees.css'

const Trees = () => {
    const [trees, setTrees] = useState([]);
    useEffect( () => {
        fetch('https://enigmatic-falls-65790.herokuapp.com/trees')
        .then(res => res.json())
        .then(data => setTrees(data.slice(0,6)))
    }, [])
    return (
        <div id="bonsai">
            <div className="bg-light py-4">
                <div className="container">
                    <div className="text-center my-md-5">
                        <h1>BONSAI'S COLLECTIONS</h1>
                        <p style={{color: 'rgb(1, 151, 119)'}}>We have some beautiful Bonsai available in our collections | Grab it now</p>
                    </div>
                    <div className="row m-0 mb-5">
                        {
                            trees.map(tree => <Tree tree={tree} key={tree._id} ></Tree>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trees;