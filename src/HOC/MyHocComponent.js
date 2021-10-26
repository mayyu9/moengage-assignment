import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, ProgressBar } from 'react-bootstrap';


const MyHocComponent = (compName, url) => {
    const [data, setData] = useState(null);
    useEffect(()=>{
        axios.get(url).then(res => {
            // console.log('res:', res.data.data);
            setData(res.data.data)
    });
    }, [url]);
    
    const renderStats = () => {
        if(data != null){
            // console.log('stats: ', data.stats);
            return(
                <>
                <div className="col" style={{backgroundColor: "#20649b",height: '212px'}}>
                    <h4 style={{color: "white"}}>STATS:</h4>
                    <div className="my-3">
                    <div className="row" style={{color: "white"}}>
                        <div className="col-9">{data.stats.ATTRIBUTE_1.label}</div>
                        <div className="col-3">{data.stats.ATTRIBUTE_1.value}</div>
                    </div>
                    <ProgressBar now={data.stats.ATTRIBUTE_1.value} />
                    <div className="row" style={{color: "white"}}>
                        <div className="col-9">{data.stats.ATTRIBUTE_2.label}</div>
                        <div className="col-3">{data.stats.ATTRIBUTE_2.value}</div>
                    </div>
                    <ProgressBar now={data.stats.ATTRIBUTE_2.value} />
                    <div className="row" style={{color: "white"}}>
                        <div className="col-9">{data.stats.ATTRIBUTE_3.label}</div>
                        <div className="col-3">{data.stats.ATTRIBUTE_3.value}</div>
                    </div>
                    <ProgressBar now={data.stats.ATTRIBUTE_3.value} />
                    </div>
                </div>
                <div className="row" style={{backgroundColor: 'lightblue', textAlign:'center'}}>
                    <button type="button">View API</button>
                </div>
                </>
            )
        }
        return null;
    };

    const renderData = () => {
        if(data != null){
        return(
            <div className="col">
                <div className="row" style={{borderBottomStyle: "dotted"}}>
                    <div className="col-9" style={{borderRightStyle: "dotted"}}>{data.filter.label}</div>
                    <div className="col-3">{data.filter.value}</div>
                </div>
                <div className="row" style={{borderBottomStyle: "dotted", textAlign: 'center'}}>
                    <div className="col-9">{data.dataSet.header[0]}</div>
                    <div className="col-3">{data.dataSet.header[1]}</div>
                </div>
               {/* iterate over map and read data Label and value and color code  */}
               {data.dataSet.data !== null && data.dataSet.data.map(item => {
                   return(
                       <>
                        <div key={item.label} className="row" style={{borderBottomStyle: "dotted", textAlign: 'center'}}>
                                <div className="col-9" style={{color:`${item.color}`}}>{item.label}</div>
                                <div className="col-3" style={{color:`${item.color}`}}>{item.value}</div>
                        </div>
                       </>
                   )
               })}
            </div>
        )
            }
            return null;
    };

    const renderComp = () => {
        return(
         <div style={{width: '100%'}}>
        <Card>
            <Card.Header>
                <div className="row" style={{background: '#144c88'}}>
                    <div className="col-5" style={{color: 'white'}}>{compName}</div>
                        <div className="col-7 row">
                            <select>
                                <option value="Sort by Label">Sort by Label</option>
                            </select>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col-5" style={{ height: '244px'}}>{renderStats()}</div>
                    <div className="col-7" style={{height: '244px'}}>{renderData()}</div>
                </div>
            </Card.Body>
        </Card>
        </div>
        );
    };
    return(
        <>{renderComp()}</>
    )
}

export default MyHocComponent;
