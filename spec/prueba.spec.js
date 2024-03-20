// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });


describe("Homework Test", () => {
  const {Activity, Repository} = require("../scripts/index")
  const repository = new Repository()
  const activity = new Activity("1", "Hacer Tarea", "Desarrollo de los ejercicios propuestos", 
  "https://www.seekpng.com/png/full/9-99662_thor-wallpapers-thor-marvel-png.png")
  it("Repository es una clase", () => {
    expect(typeof Repository.prototype.constructor).toBe("function")
  })
  it("Activity es una clase", () => {
    expect(typeof Activity.prototype.constructor).toBe("function")
  })
  it("Es una instancia de Repository", () => {
    expect(repository instanceof Repository).toBe(true);
  })

  it("Método getAllActivities", () => {
    repository.createActivity(activity)
    expect(repository.getAllActivities).toBeDefined();
    expect(typeof repository.getAllActivities()[0]).toEqual(typeof activity)
  })
  it("Método createActivity", () => {
    expect(repository.createActivity).toBeDefined();
    expect(repository.getAllActivities().length).toBe(1)
  })
  it("Método deleteActivity", () => {
    repository.deleteActivity(1);
    expect(repository.deleteActivity).toBeDefined();
    expect(repository.getAllActivities().length).toBe(0)
  })
  // it("Método addObjectActivity", () => {
  //   expect(addObjectActivity).toBeDefined();
  //   expect(typeof addObjectActivity).toBe("function");
  // })
  // it("Método refreshContainer", () => {
  //   expect(refreshContainer).toBeDefined();
  //   expect(typeof refreshContainer).toBe("function");
  // })
  // it("Método handler", () => {
  //   expect(handler).toBeDefined();
  //   expect(typeof handler).toBe("function");
  // })
})