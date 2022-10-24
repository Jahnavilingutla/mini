import React from "react"; 
import '../Styling/Home.css';




function FunctionalComponent()
{
 return(
    <>
    
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"   >
  <div class="carousel-inner" >
    <div class="carousel-item active" style={{height:"500px"}}>
      <img src="http://manager.udc.com.vn/Content/Uploads/ThietLap/cong-ty-tnhh-mtv-thoat-nuoc-do-thi-tphcm-tin-tuc-4d6370c2-b5db-4496-8df5-866916e77729.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{backgroundColor:"orange",width:"500px",height:"100px",marginLeft:"200px",marginBottom:"-20px"}}>
      <span class="carousel-control-prev-icon" style={{float:"left",marginTop:"5px"}} aria-hidden="true"></span>
        <h3 style={{marginLeft:"20px"}}>WE MEET YOUR FINANCIAL</h3>
        <h3 style={{marginLeft:"20px"}}>INVESTMENT NEEDS</h3>
        <span class="carousel-control-next-icon" aria-hidden="true" style={{float:"right",marginTop:"-70px"}}></span>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
   
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">

    <span class="visually-hidden">Next</span>
  </button>
</div>
<br></br>
 

    </>

)

}
//only one export
export default FunctionalComponent;