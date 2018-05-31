const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
    beforeEach(() => {
        this.menu = new MenuController();
    })
    describe("#getContactCount()", () => {

        it("should return 0 when no contacts are in the book", () => {
            expect(this.menu.getContactCount()).toBe(0);
        });

        it("should return 1 when there is exactly one contact in the book", () => {
            this.menu.contacts.push("Bob");
            expect(this.menu.getContactCount()).toBe(1);
        });

        it("should return a data value that is a string", () => {
            expect(this.menu.remindMe()).toEqual("Learning is a life-long pursuit");
        });
    });
})