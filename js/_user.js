class User {

    constructor(email,password) {
        this.email = email;
        this.password = password;
        this.accounts = [];
        this.categories = [];
        this.items = [];
    }
}

export default User;
