
const IsToken = ()=>{
  
  const token = localStorage.getItem("accessToken");
  if(!token){
    alert("로그인 후 진행해 주세요")    
  }
  else{
    return token;
  }
}

export default IsToken;