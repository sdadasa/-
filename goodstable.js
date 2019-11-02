$(document).ready(function (){
    function shanpin(page){
        axios.get('http://mock-api.com/7gPXkZgl.mock/products?page=' + page)
  .then(function (res){
   
        var header=$('#goods').find('tr').first();
        $('#goods').find('tr').remove();
        $('#goods').append(header);
        console.log('header:', header);
        for(var index in res.data){
            $('#goods').append('<tr><td>' + res.data[index].name +  '</td><td>' + res.data[index].price + '</td><td>' + res.data[index].created_at + '</td></tr>');
            
        }
        })
    .catch(function (err) {
        console.log('err', err);
        
    });   
}
    $('#goods-nav li a').click(function () {
        console.log('page', $(this).text());
        $('#goods-nav li a').removeClass('active');
        $(this).addClass('active');
        shanpin($(this).text());
       
    });
    shanpin(1);

});