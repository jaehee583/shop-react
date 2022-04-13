import Card from './Card';
import { Link } from 'react-router-dom';

function Detail(props){
  return (
    <div className="container">
      <h2 style={{textAlign: 'center'}}>상품목록</h2>
      <div className="row">
        {
          props.shoes.map((item,idx,arr)=>{
            return (
              <Link to={`/Detail/${item.id}`}>
                <Card 신발={item} index={idx} key={item.id}/>
              </Link>
            );
          })        
        }
      </div>
    </div>
  );
}

export default Detail;