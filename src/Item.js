import React, { PureComponent} from 'react'

export class Item extends PureComponent {
    render(){
        const { data } = this.props
        return(
            <div key={data.id} className="card_wrap">
                { data.thumbnail !== "self" && 
                <img src={data.thumbnail} alt="" />
                }
                <p className="card__wrap--title">{data.title}</p>
                <p>{data.num_comments}</p>
                <a href={`https://www.reddit.com/${data.permalink}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                link
                </a>
            </div>
        )
    }
}
