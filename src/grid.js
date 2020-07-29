import React,{useState} from 'react';
import Pagination from "react-js-pagination";
// import "./bootstrap/less/bootstrap.less";

const ImageGrid = (props) =>{
    console.log(props,"props");
    const [page_no, setPageNo] = useState(1);
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setPageNo(pageNumber);
      }
    return (
        <>
        <div className="row imggrid">
            {props.results.slice(0,9).map((item)=>{
                return(
                    <div className="col-sm-10 imgContent">
                        <img src={item.urls.regular}  alt={item.alt_description}/>
                        <p>{item.alt_description}</p>
                    </div>
                )
            })}
        </div>
        <Pagination
          activePage={page_no}
          itemsCountPerPage={9}
          totalItemsCount={props.total_pages}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
        </>
    );
}

export default ImageGrid;