/* passport.js */

export default class Passport {
    /**
     * @param {string} firstName
     * @param {string} lastName
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName() {
        return this.firstName.toLowerCase();
    }

    getLastName() {
        return this.lastName.toUpperCase();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInitials() {
        return `${this.firstName[0]}.${this.lastName[0]}.`;
    }

    getIsValidName() {
        let dotAtTheEnd = this.lastName[this.lastName.length - 1]
        if (this.firstName.length > 0 && this.lastName.length > 0 && dotAtTheEnd.includes(".") === false) {
            return `Yes`;
        }else {
            return `No`;
        }  
    }
}