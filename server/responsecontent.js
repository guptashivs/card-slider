const htmlContent = `
<script>
  function handleSimilarItemsClick(){
    alert("Do the functionality for similar items here")
  };
 </script>
 <style> 
    html {
        font-size: 14px;
    }
  .cardsContainer{
    width: 96vw;
    height: 60vh;
    margin-top: 50px;
    position: relative;
    overflow-y: scroll;
  }
  .cardItem{
    height: 300px;
    width: 96vw; 
    padding:1.8rem;
    margin: auto;
    margin-top: 0.7rem; 
    margin-bottom: 0.7rem;
    border-radius: 16px;
    box-sizing: border-box;
    position: relative;
  }
  .offerText{ 
    font-weight: bold;
    font-size: 1.5rem;  
    margin-top: 28px;
    text-transform: capitalize;
    color: #000000;
  }
  .offerDesc{
    margin-top: 12px;
    font-size: 1rem; 
    color: #4a4a4a; 
  }
  .tcapply{
    font-size: 0.9rem; 
    color: #8f8f8f;
  }
  .similarOffer{
    position: absolute;
    top: 3px;
    left: 20px;
    font-size: .8rem;
    text-align: center;
    text-transform: capitalize;
  }
  .offerInfoContainer{
    overflow: hidden;
    position: relative;
  }
  .offerIcon{
    width: 20px;
    height: 20px;
    position: absolute;
    display: inline-block;
    float: left;
    background: radial-gradient( 50% 50% at 50% 50%, #6e81df 0%, #4064b3 100% );
    transform: matrix(-1, 0, 0, 1, 0, 0); 
  }
  .offerTitleContainer{
    width: 230px;
    padding: 2px;
    display: inline-block;
    float: left;
    background: linear-gradient( 90deg, rgba(110, 145, 223, 0) 0%, #4064b3 100% );
    border-radius: 0px 35px 35px 0px;
  }
  .offerTitle{
    padding-left: 30px;
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: capitalize;
    color: #ffffff; 
  }
  .similarOffers{
    position: absolute;
    width: 120px;
    height: 24px;
    left: 130px;
    top: 250px;
    background: #ffffff;
    border-radius: 64px; 
  }
  </style>
 
<div class="cardsContainer"> 
  <div class="cardItem" style=" background-color: plum;" >
    <div class="offerInfoContainer">
        <div class="offerIcon"></div>
        <div class="offerTitleContainer"><span class="offerTitle">ExclusiveOffer</span ></div>
    </div>
    <div class="offerText">20% Off!</div>
    <div class="offerDesc"> Get upto <strong>2</strong>Qty at <strong> Rs80 </strong>and additional Qty at<strong>90</strong> </div>
    <div class="tcapply"><span>TCapply</span> </div>
    <div onclick="handleSimilarItemsClick()" class="similarOffers" >
        <a class="similarOffer" >SimilarOffers</a > 
        <div></div>
    </div>
  </div>
  <div class="cardItem" style="background-color: paleturquoise;" >
    <div class="offerInfoContainer">
        <div class="offerIcon"></div>
        <div class="offerTitleContainer"><span class="offerTitle">ExclusiveOffer</span > </div>
    </div>
    <div class="offerText"> 50% Off! </div>
    <div class="offerDesc"> Get upto <strong>2</strong>Qty at <strong> Rs80 </strong>and additional Qty at<strong>90</strong> </div>
    <div class="tcapply"> <span>TCapply</span> </div>
    <div onclick="handleSimilarItemsClick()" class="similarOffers">
        <a class="similarOffer">SimilarOffers</a > 
        <div></div>
    </div>
  </div>
  <div class="cardItem" style="background-color: pink;" >
    <div class="offerInfoContainer">
        <div class="offerIcon"></div>
        <div class="offerTitleContainer"><span class="offerTitle">ExclusiveOffer</span > </div>
    </div>
    <div class="offerText">20% Off!</div>
    <div class="offerDesc"> Get upto <strong>2</strong>Qty at <strong> Rs80 </strong>and additional Qty at<strong>90</strong> </div>
    <div class="tcapply"> <span>TCapply</span> </div>
    <div onclick="handleSimilarItemsClick()" class="similarOffers">
        <a class="similarOffer" href="default.asp" >SimilarOffers</a > 
        <div></div>
    </div>
  </div>
</div>`;
module.exports = htmlContent;
