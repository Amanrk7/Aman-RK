document.querySelector('.cross').style.display = 'none';
document.querySelector('.icons').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle("sidebarGo");
    if(document.querySelector('.sidebar').classList.contains("sidebarGo")){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        },300);
    }
});
document.querySelector('.indexcontact').addEventListener("click", ()=>{
    alert("Gmail : amanrk0011@gmail.com\nPhone : +91-9990253738\nTwitter: @amanrk007\nLinkeDin : Aman RK\nGitHub : Amanrk7");
});

