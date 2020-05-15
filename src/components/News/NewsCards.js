import React from 'react';
import { Loading } from '../Loading'

export const NewsCards = (props) => {

    console.log(props.news);
    if (props.news.length < 1) {
        return (
            <Loading />
        )
    }

    return (
        <div className="card-columns mb-4">
            {props.news.map(art => (
                <div className="card shadow-lg">
                    <img src={art.image.url} alt="" style={{ width: '100%' }} />
                    <div className="card-body justify-content-center">
                        <h5 className="card-title">{art.title.replace(/(<([^>]+)>)/ig, "")}</h5>
                        <p className="">{art.description.replace(/(<([^>]+)>)/ig, "")}</p>
                        <a href={art.url} target="blank" class="btn btn-primary">Learn more</a>
                    </div>
                    <div className="card-footer justify-content">
                        <small>Published on: {getDate(Date.parse(art.datePublished))}</small>
                        <hr />
                        <small>Provider: {art.provider.name}</small>
                    </div>
                </div>
            ))}

        </div>
    )
}

const getDate = (date) => {
    return new Date(date).toUTCString()
}