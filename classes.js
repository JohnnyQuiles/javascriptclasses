const { uuid } = require("uuid");

class dbObject {
    createDate;
    lastModifiedDate;
    lastModifiedEvents;
    uuid;

    constructor() {
        this.createDate = new Date().getTime();
        this.lastModifiedDate = new Date().getTime();
        this.lastModifiedEvents = [this.createDate];
        this.uuid = uuid;
    }
    //GET =========================================================
    createdDate() {
        return this.createDate;
    }
    modifiedDate() {
        return this.lastModifiedDate;
    }
    modifiedEvents() {
        const getAll = this.lastModifiedEvents
        return getAll;
    }
    uuid() {
        return this.uuid;
    }
    //SET =========================================================  
    setGetDate() {
        return new Date(this.date).toISOString();
    }
    setLastModifiedDate() {
        const newDate = new Date().getTime();
        this.lastModifiedDate = newDate;
        this.lastModifiedEvents.push(newDate);
    }
    setModifiedDate() {
        return new Date(this.lastModifiedDate).toISOString();
    }
    setLastModifiedEvents() {
        const events = this.lastModifiedEvents.map(() => {
            return new Date().toISOString();
        });
        return events;
    }
    setUUID() {
        const id = uuid();
        this.uuid = id;
        this.setLastModifiedDate();
    }
};
const myDbObject = new dbObject();
console.log("CREATED DATE:", myDbObject.createdDate());
console.log("SET LAST DATE:", myDbObject.setLastModifiedDate());
console.log("SET MOD DATE:", myDbObject.setModifiedDate());
console.log("MOD DATE:", myDbObject.modifiedDate());
console.log("EVENT:", myDbObject.modifiedEvents());
console.log("LAST MOD EVENT:", myDbObject.setLastModifiedEvents());
console.log("UUID:", myDbObject.uuid);
console.log("");
console.log("----------------------------------------------------");

class User extends dbObject {
    user;
    age;
    favoriteMovies;

    constructor(name, age, favoriteMovies) {
        super();
        this.name = name;
        this.age = age;
        this.favoriteMovies = [favoriteMovies]
    }

    get name() {
        return this.name;
    }
    get age() {
        return this.age;
    }
    get favoriteMovies() {
        return this.favoriteMovies;
    }
    set name(name) {
        this.name = name;
        this.setLastModifiedDate();
    }
    set age(age) {
        this.age = age;
        this.setLastModifiedDate();
    }
    set favoriteMovies(favoriteMovies) {
        this.favoriteMovies = favoriteMovies;
        this.setLastModifiedDate();
    }
}
const myUser = new User("Johnny", 26, "Jay");
console.log("USER", myUser);
console.log("");
console.log("LAST MOD USER:", this.lastModifiedEvents());
console.log("GET UUID", myUser.uuid);
console.log("");
console.log("Get NAME:", myUser.name);
console.log("");
console.log("Get AGE:", myUser.age);
console.log("");
console.log("GET FAV MOVIES:", myUser.favoriteMovies);
console.log("");
console.log("=====================================================");

myUser.name="Serena"
console.log("GET UPDATED NAME:", myUser.name);
console.log("");

myUser.age = 4;
console.log("GET UPDATED AGE:", myUser.age);
console.log("");

myUser.favoriteMovies = "Turning Red";
console.log("GET UPDATED FAV MOVIE:", myUser.favoriteMovies);
console.log("");

console.log(myUser.lastModifiedEvents)
console.log("MY USER:", myUser);