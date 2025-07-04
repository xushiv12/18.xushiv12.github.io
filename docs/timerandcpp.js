function date计时器(数字){
	let xu=Number(数字)*1000;
	let 日期s=1;
	var xxxx=setInterval(()=>{
		let od=document.getElementById("p");
	    if(od){
		    od.remove();
	    }
	    let a1=document.createElement("p");
	    a1.id="p";
	    a1.innerHTML=日期s;
	    document.body.appendChild(a1);
		日期s++;
	},1000);
	setTimeout(()=>{
		clearInterval(xxxx);
        alert("时间到");
		setTimeout(()=>document.getElementById("p").remove(),1000)
	},xu);
}
function cpp解释器(pid){
	document.querySelectorAll("cpp").forEach(e=>{
		e.style="display:none";
		let a=e.textContent;
	    fetch("https://xuxu.xushi-1009.cc/3",{
		    method:"POST",
		    headers:{
			    "content-type":"application/x-www-form-urlencoded"
		    },
		    body:`x1=${a}`
	    })
	    .then(b=>b.text())
	    .then(c=>document.getElementById(pid).innerHTML="<b>这是输出(注意不会换行,即使你输入了\\n):</b><br>"+c)
	    .catch(d=>alert("发生错误:"+d));
	});
}
