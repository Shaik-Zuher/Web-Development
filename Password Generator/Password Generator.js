const Strong=document.getElementById("Strong");
const Medium=document.getElementById("Medium");
const Weak=document.getElementById("Weak");
const Cus=document.getElementById("Custom");
const joke=document.getElementsByClassName("joker")[0];
const box=document.getElementById("box");
const submit=document.getElementById("submit");
const close=document.getElementById("close");
class Password{
    constructor(len){
        this.len=len;
        this.lower="abcdefghijklmnopqrstuvwxyz";
        this.upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.num="1234567890";
        this.special="[~!@#$%^&*()_-+=;:?.><,[]{}|";
        this.password="";
    }
    generateStrongPass(){
        let count=0
        while(count<this.len){
            let l=this.lower.charAt(Math.floor(Math.random()*this.lower.length));
            let u=this.upper.charAt(Math.floor(Math.random()*this.upper.length));
            let n=this.num.charAt(Math.floor(Math.random()*this.num.length));
            let s=this.special.charAt(Math.floor(Math.random()*this.special.length));
            count+=4;
            this.password+=l+u+n+s;
            }
        return this.password;
    }
    generateMediumPass(){
        let count=0
        while(count<this.len){
            let l=this.lower.charAt(Math.floor(Math.random()*this.lower.length));
            let u=this.upper.charAt(Math.floor(Math.random()*this.upper.length));
            let n=this.num.charAt(Math.floor(Math.random()*this.num.length));
            let s=this.special.charAt(Math.floor(Math.random()*this.special.length));
            count+=4;
            this.password+=l+u+n;
            }
        return this.password;
    }
    generateWeakPass(){
        let count=0
        while(count<this.len){
            let l=this.lower.charAt(Math.floor(Math.random()*this.lower.length));
            let u=this.upper.charAt(Math.floor(Math.random()*this.upper.length));
            let n=this.num.charAt(Math.floor(Math.random()*this.num.length));
            count+=5;
            this.password+=l+u+n;
            }
        return this.password;
    }
    custPass(){
        const k=document.getElementById("kai")
        const values=document.getElementById("values");
        box.showModal()
        submit.onclick=(event)=>{
            this.password=values.value;
            k.value=this.password;
            event.preventDefault();
            box.close()
            if(k.value==""){
                joke.style.display="block";
                joke.innerHTML="<h2>Not Valid Password</h2>";
            }
            else{
            joke.style.display="block";
            }
        }
    }
}
const st=()=>{
    if(Strong.checked){
        const k=document.getElementById("kai")
        pass=new Password("12");
        let word=pass.generateStrongPass()
        k.value=word;
        joke.style.display="block";
    }
    else{
        const k=document.getElementById("kai");
        k.value="";
        joke.style.display="none";
    }
}
Strong.addEventListener("change",st);
const stm=()=>{
    if(Medium.checked){
        const k=document.getElementById("kai")
        pass=new Password("8");
        let word=pass.generateStrongPass()
        k.value=word;
        joke.style.display="block";
    }
    else{
        const k=document.getElementById("kai");
        k.value="";
        joke.style.display="none";
    }
}
Medium.addEventListener("change",stm);
const st1=()=>{
    if(Weak.checked){
    const k=document.getElementById("kai")
    pass=new Password("4");
    let word=pass.generateWeakPass();
    k.value=word;
    joke.style.display="block";
}
    else{
        const k=document.getElementById("kai");
        k.value="";
        joke.style.display="none";
    }
}
Weak.addEventListener("change",st1);
const st2=()=>{
    const values=document.getElementById("values");
    if(Cus.checked){
    pass=new Password();
    pass.custPass();
}
    else{
        const k=document.getElementById("kai");
        k.value="";
        joke.style.display="none";
        values.value=""
    }
}
Cus.addEventListener("change",st2);
const closed=()=>{
    box.close();
}
close.addEventListener('click',closed);