const { uuid } = require("uuid");

class dbObject {
    createDate;
    modifiedDate;
    modifiedEvents;
    uuid;

    constructor() {
        this.createDate = new Date().getTime();
        this.modifiedDate = new Date().getTime();
        this.modifiedEvents = [this.createDate];
        this.uuid = this.uuid;
    }
    //GET =========================================================
    createdDate() {
        this.createDate;
        return this.createDate;
    }
    modifiedDate() {
        this.modifiedDate;
        return this.modifiedDate;
    }
    modifiedEvents() {
        this.modifiedEvents
        return this.modifiedEvents;
    }
    uuid() {
        this.uuid;
        return this.uuid;
    }

    //SET =========================================================  
    setDate() {
        const newDate = new Date().getTime();
        this.createDate = newDate;
        return new Date(this.createDate).toISOString();
    }
    setModifiedDate() {
        const newDate = new Date().getTime();
        this.modifiedDate = newDate;
        this.modifiedEvents.push(newDate);
        return new Date(this.modifiedDate).toISOString();
    }
    setModifiedEvents() {
        const events = this.modifiedEvents.map(() => {
            return new Date().toISOString();
        });
        return events;
    }
    setUUID() {
        const id = this.uuid;
        this.uuid = id;
    }
};
const myDbObject = new dbObject();
console.log("CREATED DATE:", myDbObject.createdDate());
console.log("SET CREATED DATE:", myDbObject.setDate());
console.log("EVENT:",myDbObject.setModifiedEvents());
console.log("");

console.log("SET LAST DATE:", myDbObject.modifiedDate);
console.log("MOD DATE:", myDbObject.setModifiedDate());
console.log("EVENT:", myDbObject.setModifiedEvents());
console.log("");

console.log("UUID:", myDbObject.uuid);
console.log("SET UUID:", myDbObject.setUUID());;
console.log("----------------------------------------------------");

class User extends dbObject {
    user;
    age;
    favoriteMovies;

    constructor(name, age, favoriteMovies) {
        super(name, age, favoriteMovies);
        this.name = name;
        this.age = age;
        this.favoriteMovies = [favoriteMovies]
    }
    //GET =================================================
    get createName() {
        this.name;
        return this.name;
    }
    get createAge() {
        this.age;
        return this.age;
    }
    get createFavoriteMovies() {
        this.favoriteMovies;
        return this.favoriteMovies;
    }
    //SET ===============================================
    set createName(name) {
        this.name = name;
        return this.name; 
    }
    // set Age(age) {
    //     this.age = age;
    //     this.setmodifiedDate();
    // }
    // set favoriteMovies(favoriteMovies) {
    //     this.favoriteMovies = favoriteMovies;
    //     this.setmodifiedDate();
    // }
}
const myUser = new User("Johnny", 26, "Jay");
console.log("USER", myUser);
console.log("");

console.log("LAST MOD USER:", this.modifiedEvents());
console.log("GET UUID", myUser.uuid);
console.log("");

console.log("Get NAME:", myUser.name);
console.log("");

console.log("Get AGE:", myUser.age);
console.log("");

console.log("GET FAV MOVIES:", myUser.favoriteMovies);
console.log("");
console.log("=====================================================");

// myUser.name="Serena"
// console.log("GET UPDATED NAME:", myUser.name);
// console.log("");

// myUser.age = 4;
// console.log("GET UPDATED AGE:", myUser.age);
// console.log("");

// myUser.favoriteMovies = "Turning Red";
// console.log("GET UPDATED FAV MOVIE:", myUser.favoriteMovies);
// console.log("");

// console.log(myUser.modifiedEvents)
// console.log("MY USER:", myUser);