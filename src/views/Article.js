import React, {useState, useEffect} from 'react'
import './css/article.css';
import {useNavigate, useLocation} from 'react-router-dom';

import Header from '../components/Headers/Header';

import './css/services.css'
import './css/home.css'
import { Col, Row } from 'reactstrap';


export default function Article() {

    const location = useLocation();
    const navigate = useNavigate();
    const article = {} 
    const blogs = [];

    const gotoBlogpost = (ele)=>{
        
    }

    return (
        <div>
            <div style={{}} className='services-header'>
                <Header color='white'/>
                    <p className="pricing-small-title" style={{fontSize: '28px', textAlign: 'center'}}>
                        {article.title}
                    </p>
                </div>
            <Row className="rowblog">
                <Col sm={8}  className="leftcolumn">
                    <div className="card">
                    <h2>{article.title}</h2>
                    <h5><span style={{textDecoration:'underline'}}>{article.category}</span>, {article.date}</h5>
                    <div className="fakeimg" style={{height:"400px"}}>
                    <img alt="" src={article.image} className="blog-image" width="100%" height="100%"/>
                    </div>
                    <p>
                    {article.content}
                    </p>
                    </div>
                </Col>
                <Col className="rightcolumn">
                    <div className="card">
                    <h3>Popular Post</h3>
                    {blogs.map((ele)=>{
                        return(
                            <div className="row" style={{marginBottom:'5px'}} onClick={()=>gotoBlogpost(ele)}>
                                <img src={"https://www.graphicmonsters.co/graphic/" + ele.image} className="col-4" height="50px" width="50px"/>
                                <p className="col-8">{(ele.title).slice(0, 30)}...</p>
                            </div>
                        )
                    })}
                    </div>
                </Col>
             </Row>
        </div>
    )
}
