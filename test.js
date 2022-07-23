const array = [
    { id: 1, name: 'Sajid' },
    { id: 2, name: 'Payel' },
    { id: 3, name: 'Samiha' },
    { id: 4, name: 'Anik' }
]
let name = []
array.map(a => {
    name.push(a.name);
})
function searchName(singleName) {
    let searchedName = ''
    for (let i = 0; i < name.length; i++) {
        if (singleName == name[i]) {
            searchedName = name[i]
        }
    }
    return searchedName
}
const result = searchName('Samiha')
console.log(result);