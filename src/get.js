export default async function get(link){
  let res = await fetch(link,{ mode: 'cors' });
  let obj = await res.json();
  return obj;
}