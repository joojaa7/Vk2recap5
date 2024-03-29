
async function query(){
  const response = await fetch('https://10.120.32.94/api/v1/restaurants');
  const json = await response.json();
  console.log(json);
}

query();
