let SanPham = JSON.parse(localStorage.getItem('Product'));
function createProduct() {
    if (localStorage.getItem('Product') === null) {
        let Product = [
            {
                id: "0",
                img: "./img/xiaomi11lite.jpg",
                Name: "Xiaomi Mi 11 Lite",
                type: "1",
                price: 335
            },
            {

                id: "1",
                img: "./img/galaxya52.jpg",
                Name: "Samsung Galaxy A52",
                type: "2",
                price: 499
            },
            {

                id: "2",
                img: "./img/xiaomi11t.jpg",
                Name: "Xiaomi 11T",
                type: "1",
                price: 599
            },
            {

                id: "3",
                img: "./img/redminote11.jpg",
                Name: "Xiaomi Redmi Note 11 Pro",
                type: "1",
                price: 330
            },
            {

                id: "4",
                img: "./img/galaxya72.jpg",
                Name: "Samsung Galaxy A72",
                type: "2",
                price: 499
            },
            {

                id: "5",
                img: "./img/xiaomipocox3.jpg",
                Name: "Xiaomi POCO X3 PRO",
                type: "1",
                price: 299
            },
            {

                id: "6",
                img: "./img/iphone11promax.jpg",
                Name: "iPhone 11 Pro Max",
                type: "3",
                price: 799
            },
            {
                id: "7",
                img: "./img/iphone13promax.jpg",
                Name: "iPhone 13 Pro Max",
                type: "3",
                price: 1149
            },
            {
                id: "8",
                img: "./img/iphone13mini1.jpg",
                Name: "iPhone 13 Mini",
                type: "3",
                price: 830
            },
            {

                id: "9",
                img: "./img/iphone12pro.jpg",
                Name: "iPhone 12 Pro",
                type: "3",
                price: 999
            },
            {

                id: "10",
                img: "./img/oppoa54.jpg",
                Name: "OPPO A54",
                type: "4",
                price: 175
            },
            {
                id: "11",
                img: "./img/oppoa74.jpg",
                Name: "OPPO A74",
                type: "4",
                price: 220
            },
            {
                id: "12",
                img: "./img/oppoa55.jpg",
                Name: "OPPO A55",
                type: "4",
                price: 195
            },
            {
                id: "13",
                img: "./img/redminote10.jpg",
                Name: "Xiao Redmi Note 10 Pro",
                type: "1",
                price: 330
            },
            {

                id: "14",
                img: "./img/galaxym52.jpg",
                Name: "Samsung Galaxy M52 5G",
                type: "2",
                price: 465
            },
            {

                id: "15",
                img: "./img/redminote10s.jpg",
                Name: "Xiaomi Redmi Note 10S",
                type: "1",
                price: 259
            },
            {

                id: "16",
                img: "./img/redmi-10.jpg",
                Name: "Xiaomi Redmi 10",
                type: "1",
                price: 280
            },
            {

                id: "17",
                img: "./img/redmi9a.jpg",
                Name: "Xiaomi Redmi 9A",
                type: "1",
                price: 169
            },

            {

                id: "18",
                img: "./img/redmi9c.jpg",
                Name: "Xiaomi Redmi 9C",
                type: "1",
                price: 199
            },
            {

                id: "19",
                img: "./img/redminote8.jpg",
                Name: "Xiaomi Redmi Note 8",
                type: "1",
                price: 199
            }



        ];
        localStorage.setItem('Product', JSON.stringify(Product))
        SanPham = JSON.parse(localStorage.getItem('Product'));
    }
    else SanPham = JSON.parse(localStorage.getItem('Product'));
}
//Tạo Những Mảng Sản Phẩm Theo Hãng
// let Xiaomi = SanPham.filter(function(e) {
//     return e.type == "Xiaomi";
// });

// let Samsung = SanPham.filter(function(e) {
//     return e.type == "Samsung";
// });
// let Oppo = SanPham.filter(function(e) {
//     return e.type == "Oppo";
// });

//Lấy mảng tìm kiếm 
// let Mangtsp = JSON.parse(localStorage.getItem('Mangsptimkiem'));

//Reset mảng lọc giá
// localStorage.setItem('locgiasp', JSON.stringify({ tugia: "", dengia: "" }));


function chuyentrangthai() {
    localStorage.setItem('trangthai', '0');
}
window.onload = function () {
    var arrhang = [{ idhang: 1, tenhang: 'Xiaomi' }, { idhang: 2, tenhang: 'Samsung' }, { idhang: 3, tenhang: 'Apple' }, { idhang: 4, tenhang: 'Oppo' }];
    localStorage.setItem('hang', JSON.stringify(arrhang));
    createProduct();
    checkvotk();
    phanhang();
    let trangthai = JSON.parse(localStorage.getItem('trangthai'));
    if(trangthai=='search')
    {
        phantrangsearch();
    }
    if (trangthai == '0' || trangthai == null) {
        phantrang();
    }
}
function phantrang() {
    let SanPham = JSON.parse(localStorage.getItem('Product'));
    let trangbatdau = 1;
    let sosptrongtrang = 8;
    let arrspphantrang = [];
    let phantrang = Math.ceil(SanPham.length / sosptrongtrang);
    arrspphantrang = SanPham.slice(
        (trangbatdau - 1) * sosptrongtrang,
        (trangbatdau - 1) * sosptrongtrang + sosptrongtrang
    )
    for(var index in arrspphantrang) {
        document.getElementById('content1').innerHTML += '<div class="SP"><div class="SPimg"><img src="' +arrspphantrang[index].img + '" alt="" /></div><div style="text-align: center;"><div class="TenSP">' +    arrspphantrang[index].Name + '</div><div class="GiaSP">' +    arrspphantrang[index].price + '</div><i class="far fa-circle nutxemthongtin" style="background-color: rgb(202, 202, 24); border: black solid 2px; font-size: 40px;" onclick="ShowIfSP(' +    arrspphantrang[index].id + ')"></i> </div></div>';
    }
    for (var i = 1; i <= phantrang; i++) {
        if (SanPham.length > 8) {
            document.getElementById('button_trang').innerHTML += `<a href="#"><input type="button" onclick="nutchuyentrang(${i});" value="${i}"></a>`;
        }
    }
}
function nutchuyentrang(key) {
    let SanPham = JSON.parse(localStorage.getItem('Product'));
    let sosptrongtrang = 8;
    let arrspphantrang = [];
    let trangbatdau = key;
    document.getElementById('content1').innerHTML = '';
    arrspphantrang = SanPham.slice(
        (trangbatdau - 1) * sosptrongtrang,
        (trangbatdau - 1) * sosptrongtrang + sosptrongtrang
    )
    for(var index in arrspphantrang) {
        document.getElementById('content1').innerHTML += '<div class="SP"><div class="SPimg"><img src="' + arrspphantrang[index].img + '" alt="" /></div><div style="text-align: center;"><div class="TenSP">' + arrspphantrang[index].Name + '</div><div class="GiaSP">' + arrspphantrang[index].price + '</div><i class="far fa-circle nutxemthongtin" style="background-color: rgb(202, 202, 24); border: black solid 2px; font-size: 40px;" onclick="ShowIfSP(' + arrspphantrang[index].id + ')"></i> </div></div>';
    }
}

var t = 0;

function ShowIfSP(id) {
    document.getElementById("ThongTinSP").style.display = 'flex';
    document.getElementById("ifSP_Overlay").style.display = 'flex';
    for (var index in SanPham) {
        if (SanPham[index].id == id) {
            document.getElementById("ThongTinSP").innerHTML = '<img src="' + SanPham[index].img + '" alt=""><div id="ThongTinSP_text"><div id="name_TTSP">' + SanPham[index].Name + '</div><div id="gia_TTSP">' + SanPham[index].price + '</div><div ><input class="SoluongSP" type="button" value="-" onclick="TangSLSP(this.value)"><input class="SoluongSP" id="soluongSP" type="text" min="1" max="10" value="1"><input class="SoluongSP"type="button" value="+" onclick="TangSLSP(this.value)"></div><input id="order" type="button" onclick="check();getTTSP();" value="Order"></div>'
        }
    }
}
function TatTTSP() {
    document.getElementById("ifSP_Overlay").style.display = "none";
}

function TangSLSP(val) {
    if (val == '+') {
        (document.getElementById("soluongSP").value)++;
    }
    if (val == '-') {
        if ((document.getElementById("soluongSP").value) != 1)
            (document.getElementById("soluongSP").value)--;
    }
}
var arrgiohang = [];
function check() {
    var t = JSON.parse(localStorage.getItem('abc'));
    if (t == 0) {
        nhap();
    }
    if (t == 1) {
        if (document.getElementById("soluongSP").value <= 0) {
            document.getElementById("soluongSP").focus();
            return false;
        }
    }
}
function search() {
    var arrsearch = [];
    var z = 0;
    var giatu = document.getElementById('456').value;
    var giaden = document.getElementById('789').value;
    var hang = document.getElementById('123').value;
    console.log(hang);
    var timkiemten = document.getElementById('000').value;
    if (parseInt(giatu) > parseInt(giaden)) {
        alert("Mời nhập lại giá ");
        tkt.focus();
    }
    else {
    for (var index in SanPham) {
        if (hang !== 'ChonHang') {
            if (SanPham[index].type == hang) {
                if (giatu !== '' && giaden !== '') {
                    if (SanPham[index].price >= giatu && SanPham[index].price <= giaden) {
                        if (timkiemten !== '') {
                            if (SanPham[index].Name.toLowerCase().indexOf(timkiemten.toLowerCase()) !== -1) {
                                arrsearch[z] = SanPham[index];
                                z++;
                                localStorage.setItem('search', JSON.stringify(arrsearch));
                            } else {
                                localStorage.setItem('search', JSON.stringify(arrsearch));
                                 document.getElementById('content1').innerHTML='<div style="width: 100%;font-size: 10px; margin-top: 1000px;">Không tìm thấy sản phẩm phù hợp</div>';
                            }
                        } else {
                            arrsearch[z] = SanPham[index];
                            z++;
                            localStorage.setItem('search', JSON.stringify(arrsearch));
                        }
                    }else{
                            localStorage.setItem('search', JSON.stringify(arrsearch));
                             document.getElementById('content1').innerHTML='<div style="width: 100%;font-size: 10px; margin-top: 1000px;">Không tìm thấy sản phẩm phù hợp</div>';
                    }
                } else {
                            if (timkiemten !== '') {
                                if (SanPham[index].Name.toLowerCase().indexOf(timkiemten.toLowerCase()) !== -1) {
                                    arrsearch[z] = SanPham[index];
                                    z++;
                                    localStorage.setItem('search', JSON.stringify(arrsearch));
                                } else {
                                    localStorage.setItem('search', JSON.stringify(arrsearch));
                                     document.getElementById('content1').innerHTML='<div style="width: 100%;font-size: 10px; margin-top: 1000px;">Không tìm thấy sản phẩm phù hợp</div>';
                                }
                            } else {
                                arrsearch[z] = SanPham[index];
                                z++;
                                localStorage.setItem('search', JSON.stringify(arrsearch));
                            }
                }
            }
        }
        else {
            if (giatu !== '' && giaden !== '') {
                if (SanPham[index].price >= giatu && SanPham[index].price <= giaden) {
                    if (timkiemten !== '') {
                        if (SanPham[index].Name.toLowerCase().indexOf(timkiemten.toLowerCase()) !== -1) {
                            arrsearch[z] = SanPham[index];
                            z++;
                            localStorage.setItem('search', JSON.stringify(arrsearch));
                        } else {
                            localStorage.setItem('search', JSON.stringify(arrsearch));
                             document.getElementById('content1').innerHTML='<div style="width: 100%;font-size: 10px; margin-top: 1000px;">Không tìm thấy sản phẩm phù hợp</div>';
                        }
                    } else {                
                        arrsearch[z] = SanPham[index];
                        z++;
                        localStorage.setItem('search', JSON.stringify(arrsearch));
                    }
                }else{
                        localStorage.setItem('search', JSON.stringify(arrsearch));
                         document.getElementById('content1').innerHTML='<div style="width: 100%;font-size: 10px; margin-top: 1000px;">Không tìm thấy sản phẩm phù hợp</div>';
                }
            }
            else{
                if (timkiemten !== '') {
                    if (SanPham[index].Name.toLowerCase().indexOf(timkiemten.toLowerCase()) !== -1) {
                        arrsearch[z] = SanPham[index];
                        z++;
                        localStorage.setItem('search', JSON.stringify(arrsearch));
                    } else {
                        localStorage.setItem('search', JSON.stringify(arrsearch));
                          document.getElementById('content1').innerHTML='<div style="width: 100%;font-size: 10px; margin-top: 1000px;">Không tìm thấy sản phẩm phù hợp</div>';
                    }
                } else {
                    localStorage.setItem('search', JSON.stringify(SanPham));
                }
            }
        }
    }
    localStorage.setItem('trangthai', JSON.stringify('search'));
    }
}
function phantrangsearch()
{
    let trangbatdau = 1;
    let sosptrongtrang = 8;
    let arrspphantrang = [];
    let search = JSON.parse(localStorage.getItem('search'));
    let phantrang = Math.ceil(search.length / sosptrongtrang);
    arrspphantrang = search.slice(
        (trangbatdau - 1) * sosptrongtrang,
        (trangbatdau - 1) * sosptrongtrang + sosptrongtrang
    )
    for(var index in arrspphantrang) {
        document.getElementById('content1').innerHTML += '<div class="SP"><div class="SPimg"><img src="' +arrspphantrang[index].img + '" alt="" /></div><div style="text-align: center;"><div class="TenSP">' +    arrspphantrang[index].Name + '</div><div class="GiaSP">' +    arrspphantrang[index].price + '</div><i class="far fa-circle nutxemthongtin" style="background-color: rgb(202, 202, 24); border: black solid 2px; font-size: 40px;" onclick="ShowIfSP(' +    arrspphantrang[index].id + ')"></i> </div></div>';
    }
    for (var i = 1; i <= phantrang; i++) {
        if (search.length > 8) {
            document.getElementById('button_trang').innerHTML += `<a href="#"><input type="button" onclick="nutchuyentrangsearch(${i});" value="${i}"></a>`;
        }
    }
}
function nutchuyentrangsearch(key) {
    let sosptrongtrang = 8;
    let arrspphantrang = [];
    let trangbatdau = key;
    let search = JSON.parse(localStorage.getItem('search'));
    document.getElementById('content1').innerHTML = '';
    arrspphantrang = search.slice(
        (trangbatdau - 1) * sosptrongtrang,
        (trangbatdau - 1) * sosptrongtrang + sosptrongtrang
    )
    for(var index in arrspphantrang) {
        document.getElementById('content1').innerHTML += '<div class="SP"><div class="SPimg"><img src="' + arrspphantrang[index].img + '" alt="" /></div><div style="text-align: center;"><div class="TenSP">' + arrspphantrang[index].Name + '</div><div class="GiaSP">' + arrspphantrang[index].price + '</div><i class="far fa-circle nutxemthongtin" style="background-color: rgb(202, 202, 24); border: black solid 2px; font-size: 40px;" onclick="ShowIfSP(' + arrspphantrang[index].id + ')"></i> </div></div>';
    }
}
function phanhang() {
    var hang = JSON.parse(localStorage.getItem('hang'));
    for (var index in hang) {
        document.getElementById('123').innerHTML += '<option value="' + hang[index].idhang + '">' + hang[index].tenhang + '</option> ';
    }
}