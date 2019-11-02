$(document).ready(function () {
    function getProducts(page) {
        $('.loading').addClass('loading-on');
        axios.get('http://mock-api.com/7gPXkZgl.mock/products?page=' + page)
            .then(function (res) {
                var line;
                var item;
                var header = $('#goods').find('tr').first();
                $('#goods').find('tr').remove();
                $('#goods').append(header);
                console.log('header:', header);
                for (var index in res.data) {
                    item = res.data[index];
                    line = '<tr><td>' + item.name + '</td><td>' + item.price + '</td><td>' + item.created_at + '</td></tr>';
                    $('#goods').append(line);
                }
                $('.loading').removeClass('loading-on');
            })
            .catch(function (err) {
                console.log('err', err);
                $('.loading').removeClass('loading-on');
            });
    }

    // 点击分页按钮时获取新一页的数据
    $('#goods-nav li a').click(function () {
        console.log('page', $(this).text());
        $('#goods-nav li a').removeClass('active');
        $(this).addClass('active');
        getProducts($(this).text());
    });
    // 初始化
    console.log('ready');
    getProducts(1)
});