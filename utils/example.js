const MerkleTree = require("./MerkleTree");
const niceList = require("./niceList");
// const fakeList = require("./fakeList");
const verifyProof = require("./verifyProof");

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);
// const fakeMerkleTree = new MerkleTree(fakeList);

// get the root
const root = merkleTree.getRoot();
console.log(root);

// find the proof that norman block is in the list
// const name = "Faky Faker";
// const index = fakeList.findIndex((n) => n === name);
// let proof = fakeMerkleTree.getProof(index);

const name = "Perico Palotes";
const index = niceList.findIndex((n) => n === name);
let proof = merkleTree.getProof(index);

// verify proof against the Merkle Root
console.log(verifyProof(proof, name, root)); // true, Norman Block is in the list!

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?
// -> It returns false
