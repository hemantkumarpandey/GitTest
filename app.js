const button = document.querySelector('button');
const output = document.querySelector('p');


const getLocation = ()=>{
  const promise =  new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition(pos =>{
     resolve(pos);
    }, err=>{
      reject(err);
    }, opts=>{

    })
  });

  return promise;
}

const setTimer = (duration) =>{
  const newPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
     resolve('done');
    }, duration);
  })
  return newPromise;
}

async function trackUserHandler() {
let position, suc;

  try{
    position  = await getLocation();
    suc = await setTimer(1000);
  }
  catch(err){
    console.log(err);
  }
 
  console.log(suc , position);

}

button.addEventListener('click', trackUserHandler);