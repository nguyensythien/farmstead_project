/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("logo").style.fontSize = "2rem";
  } else {
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("logo").style.fontSize = "2rem";
  }
}


// switch theme

/**
Solution: 
Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
Dựa vào class dark, ta viết css dành riêng cho dark theme.

Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại

*/

//gọi thẻ button có id là switchButton
// gắn chức năng click cho switchButton
document.getElementById("switchButton").onclick = function () {
  //khi button được click thì tìm đến thẻ body có id là myBody
  // dùng classlist để gọi thuộc tính class của thẻ body
  //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
document.getElementById("myBody").classList.toggle("dark");
};