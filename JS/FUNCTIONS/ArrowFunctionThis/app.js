const person = {
    firstName : 'Taro',
    lastName : 'Yamada',
    fullName : function () {
        return `${this.lastName} ${this.firstName}`;
    },
    delayName: function() {
        const f = function () {
            console.log(this.fullName());
              };
              setTimeout(f, 2000);
    }
}