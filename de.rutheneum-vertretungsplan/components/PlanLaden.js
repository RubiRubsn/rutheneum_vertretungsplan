export async function PlanLaden(TestID) {
    const fetched = await fetch(`https://rutheneumapi2.herokuapp.com/plan/${TestID}`);
    const jsonData = await fetched.json();
    return (jsonData);
}
