import {useParams} from 'react-router-dom';
function DetailPage(props){
    let {id} = useParams();
    return (
        <div className="col-md-4">
        <img src={`https://jaehee583.github.io/shop/images/shoes0${
        id<10
        ?'0'+id
        :id
        }.jpg`}/>
        <h2>제품명 : {props.shose[id].title}</h2>
        <p>제품설명 : {props.shose[id].content}</p>
        <p>판매가격 : {props.shose[id].가격}원</p>
        </div>
    );
}

export default DetailPage;