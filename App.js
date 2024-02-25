const { command } = require("yargs")
const data = require("./data")
const yargs = require("yargs")


yargs.command({
  command: "add",
  describe: "add an item ",
  builder: {
    Fname: {
      describe: "the first name",
      demandOption: true,
      type: "string"

    },
    Lname: {
      describe: "the first name",
      demandOption: true,
      type: "string"
    }
  },
  handler: (x) => {
    data.addData(x.Fname, x.Lname, x.id, x.age, x.city)


  }


})

//-------------------------------------------------
yargs.command({
  command: "delete",
  describe: "delete item",
  handler: (x) => {
    data.deleteData(x.id)
  }


})

//------------------------------------------------

yargs.command({
  command: "read",
  describe: "read an item ",
  builder: {
    id: {
      describe: "id to read",
      demandOption: true,
      type: "string"

    }
  },
  handler: (x) => {
    data.readData(x.id)


  }


})

//---------------------------------------------------------

yargs.command({
  command: "list",
  describe: "list data",
  handler: (x) => {
    data.list()
  }


})

yargs.parse()
