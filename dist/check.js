let _initSecrets;
function CheckInitSecrets() {
    let found = false;
    try {
        console.log("Checking init secrets");
        if (!_initSecrets || !_initSecrets.privateRegistrySecret || !_initSecrets.zarfStateSecret) {
            console.log("Init secrets not initialized");
            found = false;
        }
        else {
            console.log("Init secrets initialized");
            found = true;
        }
    }
    catch {
        console.log("Init secrets not initialized");
        return found;
    }
    return found;
}
class CreateInitSecret {
    initSecrets;
    constructor(init) {
        this.initSecrets = init;
    }
}
console.log("Should return false", CheckInitSecrets());
let s = {
    privateRegistrySecret: "a",
    zarfStateSecret: "d"
};
_initSecrets = new CreateInitSecret(s).initSecrets;
console.log("Should return true", CheckInitSecrets());
