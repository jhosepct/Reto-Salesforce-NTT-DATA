export const createData = (data: any) => {
    return { name: data.name.first, lastname: data.name.last, age: data.dob.age, gender: data.gender, email: data.email, nationality: data.nat, photo: data.picture.large };
}