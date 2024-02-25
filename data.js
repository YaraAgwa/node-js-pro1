const fs = require("fs")
const load = () => {
    try {
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}
//------------------------------------
const save = (data) => {
    const dataJson = JSON.stringify(data)
    fs.writeFileSync("data.json", dataJson)

}
//----------------------------------------



const addData = (Fname, Lname, id, age, city) => {
    const data = load()
    const duplicatedData = data.filter((x) => {
        return x.id === id
    })
    if (duplicatedData.length == 0) {
        data.push({
            Fname: Fname,
            Lname: Lname,
            id: id,
            age: age,
            city: city

        })
        save(data)
    }

    else {
        console.log("error")
    }

}
//------------------------------------------------------
const deleteData = (id) => {
    const data = load()
    const items = data.filter((x) => {
        return x.id !== id
    })

    save(items)
    console.log("item deleted")
}
//----------------------------------------------------------

const readData = (id) => {
    const data = load()
    const item = data.find((x) => {
        return x.id == id
    })
    if (item) {
        console.log(item)
    }
    else {
        console.log("not found")
    }
}
//-----------------------------------------------------------

const list = () => {
    const data = load()
    const items = data.forEach((x) => {

        console.log(x.Fname, x.Lname, x.age, x.city)
    });
}



//---------------------------------------------

module.exports = {
    addData,
    deleteData,
    readData,
    list
}