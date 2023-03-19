/* =========================================== */
/* =========================================== */

function login() {
  var password = document.getElementById("password-field").value;
  var otp = $("#otp").text();

  if (password == otp) {
    swal({
      title: "",
      text: "Xin chào Minh",
      icon: "success",
      close: true,
      button: false,
    });
    window.location = "doc/index.html";
    return true;
  }
}

function validate() {

  var loginUrl = 'https://localhost:44305/api/v1/accounts/login';
  var username = document.getElementById("username").value;
  var password = document.getElementById("password-field").value;
  //Đặt 1 Admin ảo để đăng nhập quản trị
  console.log(username);
  var otp = '';
  var token = '';

  // if(otp!='a'){
  //   if(otp==password){
  //     window.location = "custommer.html";
  //     return true;
  //   }
  // }

  fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    },
    body: JSON.stringify({ "email": username })
  })
    .then(response => response.json())
    .then(response => {
      console.log(JSON.stringify(response));
      var result = JSON.stringify(response);
      console.log(result);
      otp = response.otp
      token = response.token;
      localStorage.setItem('token', token);
      console.log(otp);
      console.log(token);
      $("#otp").text(otp);
      swal({
        title: "Thông báo",

        text: "Đã gửi mã OTP đến email,\n hãy nhập mã OTP để đăng nhập",
        buttons: ["Hủy bỏ", "Đồng ý"],
      })
      $(".email-login-form").hide();
      $(".email-login-form").text = "";
      $(".otp-form").show();
    });



  // if (username == "admin" && password == "123456") {
  //     swal({
  //         title: "",
  //         text: "Xin chào Minh",
  //         icon: "success",
  //         close: true,
  //         button: false,
  //       });
  //     window.location = "custommer.html";
  //     return true;

  // }
  // //Nếu không nhập gì mà nhấn đăng nhập thì sẽ báo lỗi
  // if (username == "" && password == "") {
  //     swal({
  //         title: "",
  //         text: "Bạn chưa điền đầy đủ thông tin đăng nhập...",
  //         icon: "error",
  //         close: true,
  //         button: "Thử lại",
  //       });

  //     return false;

  // }
  // //Nếu không nhập mật khẩu mà đúng tài khoản 
  // if (username == "admin" && password == "") {
  //     swal({
  //         title: "",
  //         text: "Bạn chưa nhập mật khẩu...",
  //         icon: "warning",
  //         close: true,
  //         button: "Thử lại",
  //       });
  //     return false;
  // }
  // //Nếu không nhập tài khoản sẽ báo lỗi
  // if (username == null || username == "") {
  //     swal({
  //         title: "",
  //         text: "Tài khoản đang để trống...",
  //         icon: "warning",
  //         close: true,
  //         button: "Thử lại",
  //       });
  //     return false;
  // }
  // //Nếu không nhập mật khẩu sẽ báo lỗi
  // if (password == null || password == "") {
  //     swal({
  //         title: "",
  //         text: "Mật khẩu đang để trống...",
  //         icon: "warning",
  //         close: true,
  //         button: "Thử lại",
  //       });
  //     return false;
  // }
  // //Nếu trống toàn bộ thì báo lỗi
  // else {
  //     swal({
  //         title: "",
  //         text: "Sai thông tin đăng nhập hãy kiểm tra lại...",
  //         icon: "error",
  //         close: true,
  //         button: "Thử lại",
  //       });
  //     return true;
  // };
}

/*  PHẦN NỘI DUNG KHÔI PHỤC MẬT KHẨU   */

/* =========================================== */
/* =========================================== */
//  function validate() {
//      var email = document.getElementById("email").value;
//     if (email == null || email == "") {
//        swal("Bạn Chưa Nhập Email", "Vui Lòng Kiểm Tra", "warning");
//        return false;
//    }
//}

function RegexEmail(emailInputBox) {
  var emailStr = document.getElementById(emailInputBox).value;
  var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var isvalid = emailRegexStr.test(emailStr);
  if (!isvalid) {
    swal({
      title: "",
      text: "Bạn vui lòng nhập đúng định dạng email...",
      icon: "error",
      close: true,
      button: "Thử lại",
    });

    emailInputBox.focus;
  } else {
    swal({
      title: "",
      text: "Chúng tôi vừa gửi cho bạn email hướng dẫn đặt lại mật khẩu vào địa chỉ cho bạn",
      icon: "success",
      close: true,
      button: "Đóng",
    });
    emailInputBox.focus;
    window.location = "#";

  }
}
