// Objects.fromEntries is the opposite of Object.entries in that it constructs an
// object from an array of key/value pairs

const entries = [
    [ "firstName", "Dave" ], 
    [ "lastName", "Fancher" ], 
    [ "age", 42 ]
];

Object.fromEntries(entries); //?
