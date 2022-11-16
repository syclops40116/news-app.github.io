import React, { Component } from "react";

export default class NewsItem extends Component {
    render() {
        let { imgUrl, title, description, url } = this.props;
        if(title){
            title = title.substring(0,100)+"..."
        }
        if(!imgUrl) {
            imgUrl = "https://c.ndtvimg.com/2022-11/j21h59jc_nasa-artemis-launch_625x300_16_November_22.jpg"
        }
        if(description){
            description = description.substring(0,100)+"..."
        }
        return (<>
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={imgUrl} alt="Img" />
                    <div className="card-body">
                        <h5>{title ? title.substring(0,50)+"..." : ""}</h5>
                        <p className="card-text">{description ? description+"...":"..."}</p>
                        <a href={url} className="btn btn-dark" target="-blank">Read More..</a>
                    </div>
                </div>
            </div>
        </>)
    }
} 