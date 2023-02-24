function getPromise(src){
  let img = new Image();	
  img.src = src; 
  return new Promise((resolve) => {
    img.onload = img.onerror = () => {resolve()};
  })																				//若reject()则await会抛出异常，终止后续图片的预加载
}

async function preLoad(arr) {					//预加载函数
  for (const src of arr) {
		await getPromise(src);   
  }
}

export default preLoad;