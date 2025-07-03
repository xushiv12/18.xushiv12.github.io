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
