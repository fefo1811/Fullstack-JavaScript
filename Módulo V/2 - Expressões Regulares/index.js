function PhoneNumber(phoneNumberString){
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d{1,3}/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0]
}

console.log(new PhoneNumber('+55 (11) 99143-7284'))