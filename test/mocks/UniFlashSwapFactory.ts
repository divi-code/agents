/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniFlashSwap } from "./UniFlashSwap";

export class UniFlashSwapFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factoryV2: string,
    _escrow: string,
    overrides?: Overrides
  ): Promise<UniFlashSwap> {
    return super.deploy(_factoryV2, _escrow, overrides || {}) as Promise<
      UniFlashSwap
    >;
  }
  getDeployTransaction(
    _factoryV2: string,
    _escrow: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factoryV2, _escrow, overrides || {});
  }
  attach(address: string): UniFlashSwap {
    return super.attach(address) as UniFlashSwap;
  }
  connect(signer: Signer): UniFlashSwapFactory {
    return super.connect(signer) as UniFlashSwapFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniFlashSwap {
    return new Contract(address, _abi, signerOrProvider) as UniFlashSwap;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryV2",
        type: "address",
      },
      {
        internalType: "address",
        name: "_escrow",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
    ],
    name: "enableToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "escrow",
    outputs: [
      {
        internalType: "contract IEscrowLiquidator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factoryV2",
    outputs: [
      {
        internalType: "contract IUniswapV2Factory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "sweep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV2Call",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516110683803806110688339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b03191633178082556040516001600160a01b039190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055610fa8806100c06000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063715018a611610066578063715018a61461019a5780638da5cb5b146101a25780638f32d59b146101aa578063e2fdcc17146101c6578063f2fde38b146101ce57610093565b806301681a621461009857806310d1e85c146100c05780632f3d02031461014a57806368e0d4e114610176575b600080fd5b6100be600480360360208110156100ae57600080fd5b50356001600160a01b03166101f4565b005b6100be600480360360808110156100d657600080fd5b6001600160a01b038235169160208101359160408201359190810190608081016060820135600160201b81111561010c57600080fd5b82018360208201111561011e57600080fd5b803590602001918460018302840111600160201b8311171561013f57600080fd5b509092509050610303565b6100be6004803603604081101561016057600080fd5b506001600160a01b038135169060200135610b9b565b61017e610c02565b604080516001600160a01b039092168252519081900360200190f35b6100be610c11565b61017e610c6c565b6101b2610c7b565b604080519115158252519081900360200190f35b61017e610c8c565b6100be600480360360208110156101e457600080fd5b50356001600160a01b0316610c9b565b604080516370a0823160e01b815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b15801561023e57600080fd5b505afa158015610252573d6000803e3d6000fd5b505050506040513d602081101561026857600080fd5b505190506001600160a01b03821663a9059cbb610283610c6c565b836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156102d357600080fd5b505af11580156102e7573d6000803e3d6000fd5b505050506040513d60208110156102fd57600080fd5b50505050565b6000806000336001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561034157600080fd5b505afa158015610355573d6000803e3d6000fd5b505050506040513d602081101561036b57600080fd5b50516040805163d21220a760e01b81529051919250600091339163d21220a7916004808301926020929190829003018186803b1580156103aa57600080fd5b505afa1580156103be573d6000803e3d6000fd5b505050506040513d60208110156103d457600080fd5b50516001546040805163e6a4390560e01b81526001600160a01b0386811660048301528085166024830152915193945091169163e6a4390591604480820192602092909190829003018186803b15801561042d57600080fd5b505afa158015610441573d6000803e3d6000fd5b505050506040513d602081101561045757600080fd5b50516001600160a01b0316331461046a57fe5b600080336001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156104a657600080fd5b505afa1580156104ba573d6000803e3d6000fd5b505050506040513d60608110156104d057600080fd5b5080516020909101516dffffffffffffffffffffffffffff9182169350169050891561050b578295506105048a8284610cb8565b945061051c565b839550610519898383610cb8565b94505b5050505060008484602081101561053257600080fd5b50356001600160f81b0319169050600160f81b81141561061b57600080600080888860a081101561056257600080fd5b506002546040805163fc3b52cb60e01b8152602084013561ffff90811660048301819052858401359091166024830181905260608601356001600160a01b03908116604485018190526080909701356001600160801b0316606485018190529451929a50909850949650919450929091169163fc3b52cb91608480830192600092919082900301818387803b1580156105fa57600080fd5b505af115801561060e573d6000803e3d6000fd5b5050505050505050610b16565b600160f91b6001600160f81b03198216141561088d57600080606080888860a081101561064757600080fd5b6001600160f81b03198235169161ffff602082013581169260408301359091169190810190608081016060820135600160201b81111561068657600080fd5b82018360208201111561069857600080fd5b803590602001918460208302840111600160201b831117156106b957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561070857600080fd5b82018360208201111561071a57600080fd5b803590602001918460208302840111600160201b8311171561073b57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050945094509450945050600260009054906101000a90046001600160a01b03166001600160a01b0316636fd559e0858585856040518563ffffffff1660e01b8152600401808561ffff1661ffff1681526020018461ffff1661ffff1681526020018060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561082557818101518382015260200161080d565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561086457818101518382015260200161084c565b505050509050019650505050505050600060405180830381600087803b1580156105fa57600080fd5b600360f81b6001600160f81b03198216141561094b57600080600080888860a08110156108b957600080fd5b5060025460408051632c8cc40f60e21b81526001600160a01b0360208501358116600483018190526001600160801b0384870135166024840181905261ffff606088013581166044860181905260809098013516606485018190529451919a50985094965091945091169163b233103c9160848082019260009290919082900301818387803b1580156105fa57600080fd5b600160fa1b6001600160f81b031982161415610b165760606000808787608081101561097657600080fd5b6001600160f81b03198235169190810190604081016020820135600160201b8111156109a157600080fd5b8201836020820111156109b357600080fd5b803590602001918460208302840111600160201b831117156109d457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803561ffff169060200190929190803561ffff16906020019092919050505093509350935050600260009054906101000a90046001600160a01b03166001600160a01b031663833758f58484846040518463ffffffff1660e01b815260040180806020018461ffff1661ffff1681526020018361ffff1661ffff168152602001828103825285818151815260200191508051906020019060200280838360005b83811015610ad3578181015183820152602001610abb565b50505050905001945050505050600060405180830381600087803b158015610afa57600080fd5b505af1158015610b0e573d6000803e3d6000fd5b505050505050505b6040805163a9059cbb60e01b81523360048201526024810184905290516001600160a01b0385169163a9059cbb9160448083019260209291908290030181600087803b158015610b6557600080fd5b505af1158015610b79573d6000803e3d6000fd5b505050506040513d6020811015610b8f57600080fd5b50505050505050505050565b610ba3610c7b565b610bac57600080fd5b6002546040805163095ea7b360e01b81526001600160a01b0392831660048201526024810184905290519184169163095ea7b3916044808201926020929091908290030181600087803b1580156102d357600080fd5b6001546001600160a01b031681565b610c19610c7b565b610c2257600080fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6000546001600160a01b0316331490565b6002546001600160a01b031681565b610ca3610c7b565b610cac57600080fd5b610cb581610da8565b50565b6000808411610cf85760405162461bcd60e51b815260040180806020018281038252602c815260200180610f1f602c913960400191505060405180910390fd5b600083118015610d085750600082115b610d435760405162461bcd60e51b8152600401808060200182810382526028815260200180610f4b6028913960400191505060405180910390fd5b6000610d676103e8610d5b868863ffffffff610e1616565b9063ffffffff610e1616565b90506000610d816103e5610d5b868963ffffffff610e7f16565b9050610d9e6001828481610d9157fe5b049063ffffffff610ecf16565b9695505050505050565b6001600160a01b038116610dbb57600080fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000811580610e3157505080820282828281610e2e57fe5b04145b610e79576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b92915050565b80820382811115610e79576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b80820182811015610e79576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459a2646970667358221220bac20e87787c3ee2579b676aed5c9f2a72819a9f4af0123b566abc3db1ef3ec364736f6c63430006060033";
