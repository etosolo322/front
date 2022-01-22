console.log(document.querySelector("#button_tab1"))
document.querySelector("#button_tab1").onclick = ()=>{
    document.querySelector("#tab1").style.display='flex'
    document.querySelector("#tab2").style.display='none'
    document.querySelector("#tab3").style.display='none'
}
document.querySelector("#button_tab2").onclick = ()=>{
    document.querySelector("#tab2").style.display='flex'
    document.querySelector("#tab1").style.display='none'
    document.querySelector("#tab3").style.display='none'
}
document.querySelector("#button_tab3").onclick = ()=>{
    document.querySelector("#tab3").style.display='flex'
    document.querySelector("#tab2").style.display='none'
    document.querySelector("#tab1").style.display='none'
}