export async function IDLaden() {
    const fetched = await fetch('https://rutheneumapi2.herokuapp.com/list/3');
    const jsonData = await fetched.json();
    return (jsonData);
}
