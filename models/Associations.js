import Tank from "./Tank.js";
import Fish from "./Fish.js";
import Biotope from "./Biotope.js";
import Amount from "./Amount.js";

const associations = () => {
    Tank.hasMany(Fish);
    Fish.hasMany(Amount);
    Tank.hasMany(Amount);
}

const factory = {
    associations
}

export default factory;