export const findPerson = ({item, cedula}) =>{
    const personFound = item.find(item => item.cedula === cedula)
    return personFound       
}