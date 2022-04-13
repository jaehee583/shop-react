import {Jumbotron,Button} from 'react-bootstrap';
import Card from './Card';

function StartPage(props){
  return (
    <div>
    {/* 메인광고배너 */}
    <Jumbotron className="background">
      <h1>신발사세요!! 맛좋은 신발이요</h1>
      <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis quasi ea nemo, rerum magnam doloremque eveniet, minus iste soluta animi quisquam quidem! Temporibus maiores doloribus voluptatum nisi cumque reprehenderit?
      Enim beatae sunt illo error, doloribus at rerum aperiam labore explicabo molestias alias iste. Ad cupiditate mollitia ex id nesciunt quod aspernatur numquam porro iure voluptates. Placeat quam quas cupiditate.
      </p>
      <p>
        <Button variant="primary">더보기</Button>
      </p>
    </Jumbotron>
    {/* 상세페이지 */}
    <div className="container">
      <div className="row">
        {
          props.shoes.map((item,idx,arr)=>{
            if(idx>=props.viewCnt){
              return false;
            }else{
              return <Card 신발={item} index={idx} key={item.id}/>
            }
          })                   
        }
        <Button variant="btn btn-primary" onClick={
          ()=>{props.viewCntChange(props.viewCnt+3);}
        }>3개 더보기</Button>
      </div>
    </div>
    </div>
  )
}

export default StartPage;