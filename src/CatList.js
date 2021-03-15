// write your CatList component here
import React from 'react'

class CatList extends React.Component {

    render() {

        return (
            <div>
                {this.props.catPics.map((c, i) => <img key={i} alt="" src={c.url} />)}
            </div>
        )
    }
}

export default CatList