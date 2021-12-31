let GioHang=JSON.parse(localStorage.getItem('ALLGH'));
// function createGioHang(){
    if(localStorage.getItem('ALLGH')===null){
        GioHang=[];
        localStorage.setItem('ALLGH',JSON.stringify(GioHang));
    }
    else{
        GioHang=JSON.parse(localStorage.getItem('ALLGH')); 
    }
// }
// window.onload = function(){
//     createGioHang();
// }
function dislayer_GH(){
    document.getElementById('layer_GH').style.display="none";
}
var GioHang_DaLoc=[];
// function LocSP_GH(){//lọc sản phẩm theo tên đăng nhập
//     if(GioHang!=null) ;
//     for(i= 0; i<GioHang.length; i++)
//     {
        
//     }
// }
function GopSPGiongNhau(arr){//giống tên tk và tên sản phẩm thì gộp lại
    var tendangnhap = JSON.parse(localStorage.getItem('tendangnhap'))
    for(i=0; i<arr.length-1; i++)
    {
        if(arr[i].tendangnhap==tendangnhap)
        for(j=i+1; j<arr.length; j++)
        {
            if(arr[j].tendangnhap==tendangnhap)
           {
                if(arr[i].tensanpham==arr[j].tensanpham)
                {
                    s=parseFloat(arr[i].soluongsanpham);
                    s+=parseFloat(arr[j].soluongsanpham);
                    arr[i].soluongsanpham=s;
                    arr.splice(j,1);
                    j--;
                }
           }    
        }
    }
    localStorage.setItem('ALLGH',JSON.stringify(arr));
}

function showGH(){
    document.getElementById('layer_GH').style.display="flex";
    document.getElementById('ShowGH').style.borderBottom="5px solid #b3b3b3fa"
    document.getElementById('ShowDH').style.borderBottom="0px solid #0000FF"
    var vtriInner=document.getElementById('content_GH');
    var tendangnhap = JSON.parse(localStorage.getItem('tendangnhap'))
    GioHang= JSON.parse(localStorage.getItem('ALLGH'));
    //Cùng tên thì gộp lại
    GopSPGiongNhau(GioHang)
    vtriInner.innerHTML="";
    for(i=0; i<GioHang.length; i++)
    {
        if(GioHang[i].tendangnhap==tendangnhap)
            vtriInner.innerHTML+='<div id="DSSP_GH'+i+'" class="DSSP"><div id="ThongTinSanPham_GH"><div><img src="'+GioHang[i].img+'" alt=""></div><p>'+GioHang[i].tensanpham+'</p></div><div id="priceGH'+i+'" class="GiaSP_GH">'+GioHang[i].price+'</div><div class="SoLuong_GH"><input class="SoLuong" id="SoluongGH'+i+'" type="number" min="1" max="20" value="'+GioHang[i].soluongsanpham+'"><div id="ChangeSL_GH" onclick="ChangeSLSP('+i+')"><i class="fas fa-exchange-alt"></i></div><div class="DelSP" onclick="xoaSP_KhoiGioHang('+i+')" value="Xóa"><i class="far fa-trash-alt"></i></div></div></div>'
    }
    innerTongTien(tendangnhap);
}
function innerTongTien(Username){
    var tendangnhap=Username;
    var tongTien=0;
    for(i=0; i<GioHang.length; i++)
    {
        if(GioHang[i].tendangnhap==tendangnhap)
            {
                console.log(document.getElementById('SoluongGH'+i+'').value)
                tongTien=tongTien+(parseFloat(document.getElementById('priceGH'+i+'').innerHTML)*parseFloat(document.getElementById('SoluongGH'+i+'').value))
            }
    }
    document.getElementById('Bottom_GH').innerHTML=document.getElementById('Bottom_GH').innerHTML='<div>Tổng Giá:</div><div id="TongGia_GH">'+tongTien+'$</div><input type="button" onclick="xuatDonHang()" value="Thanh Toán">'

}

function ChangeSLSP(val){
    if(document.getElementById('SoluongGH'+val+'').value>1)
    {
        GioHang[val].soluongsanpham=document.getElementById('SoluongGH'+val+'').value;
        localStorage.setItem('ALLGH',JSON.stringify(GioHang));  
        innerTongTien(GioHang[val].tendangnhap);
    }
    else 
    {
        alert('Nhập sai số lượng')
        document.getElementById('SoluongGH'+val+'').focus();

    }
}


function xoaSP_KhoiGioHang(val){
    var t= JSON.parse(localStorage.getItem('ALLGH'));
    t.splice(val,1);
    localStorage.setItem('ALLGH',JSON.stringify(t));  
    showGH();
}
GioHang=JSON.parse(localStorage.getItem('ALLGH'));
function getTTSP(){
    if(JSON.parse(localStorage.getItem('abc'))==1)
       {
        var tendangnhap = JSON.parse(localStorage.getItem('tendangnhap'));
        var img=$("#ThongTinSP img").attr('src');
        var tensanpham=document.getElementById("name_TTSP").innerHTML;
        var price=document.getElementById("gia_TTSP").innerHTML;
        var soluongsanpham=document.getElementById("soluongSP").value;
        if(soluongsanpham<=0)
        {
            alert("Sai Số Lượng")
            return false;
        }
        temp={
            tendangnhap,
            img,
            tensanpham,
            price,
            soluongsanpham
        };
        GioHang.push(temp);
        localStorage.setItem('ALLGH',JSON.stringify(GioHang));
        alert("Đã thêm vào giỏ hàng");
       }
}




function layThongTinKhachHang(TenDangNhap){
    var tt=JSON.parse(localStorage.getItem('taikhoankhachhang'))
    for(i=0; i<tt.length; i++)
    {
        if(tt[i].taikhoan==TenDangNhap)
        return tt[i];
    }
}
var soluongHD;
//Tạo đơn hàng v
let DonHang=[];
if(localStorage.getItem('DonHang')==null)
localStorage.setItem('DonHang',JSON.stringify(DonHang));
else
SanPham=JSON.parse(localStorage.getItem('Product'));
DonHang=JSON.parse(localStorage.getItem('DonHang'));
if(localStorage.getItem('SoHoaDon')===null)
{
    soluongHD=0;
    localStorage.setItem('SoHoaDon',JSON.stringify(soluongHD));
}
else
soluongHD=JSON.parse(localStorage.getItem('SoHoaDon'));
// Tạo đơn hàng ^
function xoaGioHang(tentaikhoan){
    for(i=0; i<GioHang.length; i++)
    {
        if(GioHang[i].tendangnhap==tentaikhoan)
            {
                if(GioHang!=[])
                xoaSP_KhoiGioHang(i);
                if(i>1)
                i=i-2;
                else
                i=-1;
            }
    }
    document.getElementById('content_GH').innerHTML='<div>Đơn Hàng Đang Chờ Xử Lý</div>';
    document.getElementById('Bottom_GH').innerHTML='<div>Tổng Giá:</div><div id="TongGia_GH">'+0+'$</div><input type="button" onclick="xuatDonHang()" value="Thanh Toán">'
}

function xuatDonHang(){
    soluongHD=JSON.parse(localStorage.getItem('SoHoaDon'));
    var tentaikhoan=JSON.parse(localStorage.getItem('tendangnhap'));
    console.log(DonHang);
    var MaDon=soluongHD;
    soluongHD++;
    localStorage.setItem('SoHoaDon',JSON.stringify(soluongHD));
    var SDT=layThongTinKhachHang(tentaikhoan).phone;
    var TenTK=layThongTinKhachHang(tentaikhoan).nameuser;
    var SanPham=[];
    var DonGia=document.getElementById('TongGia_GH').innerHTML;
    DonGia=parseInt(DonGia.split(/[$]/)[0]);

    if(DonGia==0)
    {
        alert('Không có sản phẩm trong giỏ hàng');
        return false;    
    }   
     
    var time=new Date();
    time.getTime();
    var tinhtrang="Chưa Xử Lý";
    var deletenone='0';
    var j=0;
    for(i=0; i<GioHang.length; i++)
    {
        if(GioHang[i].tendangnhap==tentaikhoan)
        {
            SanPham[j]=
                {
                    img: GioHang[i].img,
                    TenSP: GioHang[i].tensanpham,
                    Gia: GioHang[i].price,
                    SoluongSP: GioHang[i].soluongsanpham,
                }
            j++;
        }
    }
    xoaGioHang(tentaikhoan);
    var temp=
        {
            tentaikhoan,
            TenTK,
            SDT,
            MaDon,
            time,
            tinhtrang,
            deletenone,
            SanPham,
            DonGia
        }
    
    DonHang.push(temp);
    console.log(DonHang);
    localStorage.setItem('DonHang',JSON.stringify(DonHang));
}
function showDH(){
    var tentaikhoan=JSON.parse(localStorage.getItem('tendangnhap'));
    document.getElementById('layer_GH').style.display="flex";
    document.getElementById('ShowDH').style.borderBottom="5px solid #b3b3b3fa"
    document.getElementById('ShowGH').style.borderBottom="0px solid "
    var vtriInner=document.getElementById('content_GH');
    if(localStorage.getItem('DonHang')==null)
    return false;
    var DonHang= JSON.parse(localStorage.getItem('DonHang'));    
    vtriInner.innerHTML="";
    for(i=0; i<DonHang.length; i++)
    {
        console.log("Lặp tới đây?");
        if(DonHang[i].tentaikhoan==tentaikhoan)
        {
            vtriInner.innerHTML+='<div id="MaDonHang_DH"  >Mã Đơn Hàng: '+DonHang[i].MaDon+'</div>'
            var SPDonHang=DonHang[i].SanPham;
            console.log(SPDonHang.length);
            for(j=0; j<DonHang[i].SanPham.length; j++)
            vtriInner.innerHTML+='<div id="DSSP_GH'+j+'" class="DSSP"><div id="ThongTinSanPham_GH"><div><img src="'+SPDonHang[j].img+'" alt=""></div><p>'+SPDonHang[j].TenSP+'</p></div><div id="priceGH'+j+'" class="GiaSP_GH">'+SPDonHang[j].Gia+'</div><div class="SoLuong_GH"><input class="SoLuong" disabled id="SoluongGH'+j+'" type="number" min="1" max="20" value="'+SPDonHang[j].SoluongSP+'"></div></div>'
            
        } 
    }
    document.getElementById('Bottom_GH').innerHTML=document.getElementById('Bottom_GH').innerHTML='<div id="TongGia_GH">Cảm ơn quý khách</div>'
}