$(document).ready(function () {
    axios.get('http://mock-api.com/ynWoqjn6.mock/products1')
        .then(function (res) {
            console.log('data', res.data);
            for (var index in res.data) {
                $('#goods').append('<li>' + res.data[index].name + '￥' + res.data[index].price + '</li>');
            }
        })
        .catch(function (err) {
            console.log('err', err);
        });
    $('#add').click(function () {
        $('#goods').append('<li>' + $('#name').val() + '</li>');
        $('#message').html('添加了新商品' + $('#name').val());
        $('#message').removeClass('danger');
        $('#goods li').click(function () {
            $('#message').html('删除了商品:' + $(this).text());
            $('#message').addClass('danger');
            $(this).remove();
        });

    });
    $('#goods li').click(function () {
        $('#message').html('删除了商品:' + $(this).text());
        $('#message').addClass('danger');
        $(this).remove();
    });
    $('#delallbtn').click(function () {
        $('#goods li').remove();
    });
})