function KiemTra()
{

    var ten = window.document.dangky.txtTenDN.value;
    var mk = window.document.dangky.txtMatKhau.value;
    var ad= "admin";
    var pass= "admin123";

    if(ten!=ad)
    {
        window.alert(" Ban nhap sai ten tk ");
        window.document.dangky.txtTenDN.focus();
        return false;
    }

    if (mk!==pass)
    {
        window.alert("Mat khau sai");
        document.dangky.txtMatKhau.focus();
        return false;

    }

    else if (mk=pass)
        window.alert("ĐĂNG NHẬP THÀNH CÔNG");

}