function News(props) {
    const srcOfImage = props.newsObj.urlToImage;
    return (
        <div className="news-card">
            <img src={srcOfImage} alt="" />
            <p className="news-overview">{props.newsObj.newsId}</p>
            <h3 className="news-title">{props.newsObj.title}</h3>
            <p className="news-author">{props.newsObj.author}</p>
            <p className="news-category">{props.newsObj.category}</p>
            <p className="news-price">{props.newsObj.price}</p>

        </div>
    );
}

export default News;