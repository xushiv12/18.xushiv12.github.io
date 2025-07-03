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
!function(){
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
