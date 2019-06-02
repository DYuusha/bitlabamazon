$(document).ready(function(){
    $("#get-user").click(function(){
        getUsers();
    });
    function getUsers(){
        $.ajax({
                url: "https://mini-shop-rg.herokuapp.com/products",
                type: "GET",
                dataType: "json",
                success: function(response){
                    console.log(response);
                    var divLista=$("#lista");
                    var collection = response;
                    var newElement = "";
                    for(var i=0; i<collection.length; i++){
                        var user= collection[i];
                        console.log(user);
                        newElement+=`
                       
                            <div class="col-md-3 col-sm-6">
                                <div class="product-grid4">
                                    <div class="product-image4">
                                        <a href="#">
                                            <img class="pic-1" src="${user.image}">
                                            <img class="pic-2" src="${user.image}">
                                        </a>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="#">${user.name}</a></h3>
                                        <div class="price">
                                        ${user.price}
                                        <h6> ${user.description} </h6>
                                        </div>
                                        <a class="add-to-cart" href="">ADD TO CART</a>
                                    </div>
                                </div>
                    </div>
                        ` ;  
                    }
                    divLista.html(newElement);
                },
                error: function(error){
                    alert("something was wrong");
                },
                complete: function(status){
                   // alert("peticion finalizada");
                }
        })
    }
});