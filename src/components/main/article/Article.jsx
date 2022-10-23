import React from "react";
import styles from './Article.css'

const Article = () => {
    return (
        <div className={styles.container}>
            <div className="wrapper">
                <div className="search">
                    <img className="interior" src={require('../../../assets/interior.png')} alt="BMW Group Logo" />
                </div>
                <div className="article">

                </div>
                <div className="old">

                </div>
                <div className="new">

                </div>
            </div>
        </div>
    )
}

export default Article;