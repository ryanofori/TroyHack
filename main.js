{/* <script> */}
function saveData(){
                var data  = localStorage.getItem("date");
                var dates = data ? JSON.parse(data) : [];
                dates.push( Date.now() );
                localStorage.setItem("date", JSON.stringify(dates));  
                alert("Your data is stored");
            }
function ReadCookie() {
    var allcookies = document.cookie;
    document.write ("All Cookies : " + allcookies );

    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(';');

    // Now take key value pair out of this array
    for(var i=0; i<cookiearray.length; i++) {
        name = cookiearray[i].split('=')[0];
        value = cookiearray[i].split('=')[1];
        document.write ("Key is : " + name + " and Value is : " + value);
    }
}
var cvalue = 1
function setCookie(cname, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    alert(document.cookie)
    cvalue = cvalue + 1;
  }
function createCookie() {
    var currentDate = new Date();
    // set date to experiation to 30 days from now
    currentDate.setDate(currentDate.getDate() + 30);
    // 
    document.cookie = "_name=Guest;expries=" + currentDate.toUTCString() + ";path=/";


}