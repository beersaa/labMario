addEventListener("keydown",function(e){
    if(e.code == 'KeyD' || e.code =='ArrowRight') vxr=5;
    if(e.code == 'KeyA' || e.code =='ArrowLeft') vxl=-5;
    if(e.code == 'KeyS' || e.code =='ArrowDown') vy=5;
    if(e.code == 'KeyW' || e.code =='ArrowUp') vy=-5;
})

addEventListener("keyup",function(e){
    if(e.code == 'KeyD' || e.code =='ArrowRight') vxr=0;
    if(e.code == 'KeyA' || e.code =='ArrowLeft') vxl=0;
    if(e.code == 'KeyS' || e.code =='ArrowDown') vy=0;
    if(e.code == 'KeyW' || e.code =='ArrowUp') vy=0;
})
