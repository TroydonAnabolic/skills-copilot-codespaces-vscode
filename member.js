function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 32,
        skills: ['HTML', 'CSS', 'JS'],
        greet: function() {
            alert('Hello ' + this.name);
        }
    };
    return member;
}