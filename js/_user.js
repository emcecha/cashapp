class User {

    constructor(email,password) {
        this.id = new Date().getTime().toString();
        this.email = email;
        this.password = password;
        this.accounts = [
            {
                name: "All",
                option: "zł",
                type: "default"
            }
        ];
        this.categories = [
            {
                name: "Uncategorized",
                option: "",
                type: "default"
            }
        ];
        this.flowItems = [];
    }
}

export default User;
