var arr = [
    {
        dp: "https://images.unsplash.com/photo-1692171481272-eca33bc429b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1693137162024-3f4c224e6080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1692986047696-0f426181eaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        story : "https://images.unsplash.com/photo-1692019575434-875dbfaeb023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp : "https://images.unsplash.com/photo-1692911632934-bdb74c3e0f9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story : "https://images.unsplash.com/photo-1690715943041-3354cc73ba81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp : "https://plus.unsplash.com/premium_photo-1692340972716-f2e08765ef90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story : "https://images.unsplash.com/photo-1693115236667-7a1703506fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp : "https://images.unsplash.com/photo-1692317799958-fc7c8320a257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Qm4tRGpyY0Jyd298fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story : "https://images.unsplash.com/photo-1692792951714-6403393b1a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfF84ekZIdWhSaHlvfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    }
]
var storiyan =document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += ` <div id="story">
    <img id="${idx}" src='${elem.dp}' alt="">
</div>`
})
storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector('#full-screen').style.display = 'block'
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },2000)
}) 