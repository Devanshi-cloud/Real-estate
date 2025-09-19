import{r,c as p,a as m,j as e,L as h,d as g}from"./index-D9xp5EXn.js";const y=()=>{const[n,l]=r.useState(""),[t,i]=r.useState(""),d=p(),c=m(),u=async s=>{s.preventDefault();try{const a=await(await fetch("http://localhost:4000/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:t})})).json();a&&(c(g({user:a.user,token:a.token})),d("/"))}catch(o){console.log("Login Failed",o.message)}};return e.jsx("div",{className:`absolute h-full w-full bg-black/40 z-50
    flexCenter`,children:e.jsx("div",{children:e.jsxs("form",{onSubmit:u,className:`flex flex-col
        gap-y-2.5 bg-white w-[366px] p-7 rounded-xl shadow-md 
        text-[14px]`,children:[e.jsx("div",{className:"fle",children:e.jsx("h3",{className:"h3 my-4",children:"Login"})}),e.jsx("input",{onChange:s=>l(s.target.value),type:"email",name:"email",value:n,placeholder:"Email Address",required:!0,className:`bg-primary border-none p-2 pl-4
          rounded-md outline-none`}),e.jsx("input",{onChange:s=>i(s.target.value),type:"password",name:"password",value:t,placeholder:"Password",required:!0,className:`bg-primary border-none p-2 pl-4
          rounded-md outline-none`}),e.jsx("button",{type:"submit",className:`btn-secondary rounded
          mt-2`,children:"Login"}),e.jsxs("div",{className:"text-gray-30",children:["Don't have an account?",e.jsx(h,{to:"/register",className:`text-secondary 
            cursor-pointer pl-1`,children:"Register"})]})]})})})};export{y as default};
