/*
copy©:xushi®,
[保留所有权利]
你可以用这个文件来获取虚拟注册域名徐房系统里面的网页
*/
class XU{
	constructor(a){
		alert(a);
	}
};
!function(e,t){
	document.querySelectorAll('script[x="xu.js"]').forEach(code=>{
		let a=code.textContent;
		switch(true){
			case a.includes("XY\u0020"):{
				let b=a.match(/XY[\u0020](.*?)=/);
				let c=a.match(/=(.*?);/);
				alert(c[1]);
				break;
			}
		}
	});
}();
async function XfetchHTML(url){
    let x;
	var a=await fetch("https://domain.xushi-1009.cc/1",{
		method:"POST",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		},
		body:`asd=${url}`
	})
	x=await a.text();
	return x;
}
async function ToPostAndGetResult(url,id){
	var i=document.getElementById(id).value;
    var a=await fetch("https://domain.xushi-1009.cc/1",{
		method:"POST",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		},
		body:`asd=${url}`
	})
	var b=await a.text();
	let a1=document.createElement("span");
	a1.style="display:none;";
	a1.innerHTML=b;
	document.body.appendChild(a1);
	let accnd=document.querySelector('xushi[id="xu"]');
	let acc=accnd?accnd.textContent:"https://xuxu.xushi-1009.cc/r";
	var c=await fetch(acc,{
		method:"POST",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		},
		body:`y=${i}`
	})
	var d=await c.text();
	return d;
}
function Reglocaldomain(x){
	let sum;
	let a=x.localdomain;
	let b=x.html;
    localStorage.setItem(`${a}`,b);
}
function Getlocaldomain(dm){
	let a=localStorage.getItem(`${dm}`);
	let a1=document.createElement("iframe");
	a1.srcdoc=a;
	document.body.appendChild(a1);
}
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
