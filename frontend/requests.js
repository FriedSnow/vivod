export async function getAllitem(){
    const response = await fetch('http://localhost:8080/item', {
        method: 'GET'
    });
    const result = await response.json();
    console.log(result);
    return result;
}