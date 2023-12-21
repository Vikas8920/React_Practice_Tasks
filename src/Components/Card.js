const Card = (props) => {
    
    const style={
        img:{height:'180px'}
    }
  return (
    <>
    <div className="card mt-5">
        <img src={props.imgSrc} className="card-img-top" alt="..." style={style.img}/>
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <a href="#" className="btn btn-primary">Read more</a>
        </div>
    </div>
    </>
  )
}

export default Card
