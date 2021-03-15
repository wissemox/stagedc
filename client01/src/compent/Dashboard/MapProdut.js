import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {FindProduct02} from '../../Redux/actions/allActions'
import {useDispatch ,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const MapProdut = ({el}) => {
  const dispatch = useDispatch()
  const FindedOne =()=>{
    dispatch(FindProduct02(el._id))
    localStorage.setItem("_id", JSON.stringify(el._id));
    localStorage.setItem("name", JSON.stringify(el.name));
    localStorage.setItem("Prix", JSON.stringify(el.Prix));
    localStorage.setItem("image", JSON.stringify(el.image));
  }

  return (
    <div className="Dadsw">
      
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
   
          <CardTitle tag="h5">{el.name}</CardTitle>
          <div className="Dadzsw">
          <img src={el.image}/>
          </div>
          
          <CardSubtitle tag="h6" className="mb-2 text-muted">{el.Prix}</CardSubtitle>
          <CardText>{el.Descraption}</CardText>
        <Link to="/Dashboard/Product/SeeMore">  <Button onClick={FindedOne}>See More</Button></Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default MapProdut;

// export default MapProdut
