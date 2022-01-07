const person: {
    name: string; 
    age: number; 
    hobbies: string[];
    role: [string, number];
    } = {
        name: "Jimmy",
        age: 40,
        hobbies: ["Soccer", "cooking"],
        role: ["admin", 0]
    };

    //! you can access a tuple anytime to change values 

    //  person.role = ['student', 1]
    //  person.role[1] = 3

     //! changes th value will still check the tuple 

    // person.role = ['stress']
    //person.role(0) + 1

    //! the push method does not check type ot tuple 


    

    enum MadeBy {
        "IKEA",
        "COSTCO",
        "AMAZON",
    }

    const product: {
        name: string; 
        age: number; 
        tags: string[];
        manufacture: MadeBy;
        } = {
            name: "chair",
            age: 40.00,
            tags: ["Sale", "antique"],
            manufacture: MadeBy.AMAZON
        };
    



 
        