import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  Bought,
  Offerd,
  Transfer
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBoughtEvent(
  _itemId: BigInt,
  _nft: Address,
  _tokenId: BigInt,
  _tokenURI: string,
  _price: BigInt,
  _artist: Address,
  _taxFee: BigInt,
  _addressTaxFeeToken: Address,
  _buyer: Address
): Bought {
  let boughtEvent = changetype<Bought>(newMockEvent())

  boughtEvent.parameters = new Array()

  boughtEvent.parameters.push(
    new ethereum.EventParam(
      "_itemId",
      ethereum.Value.fromUnsignedBigInt(_itemId)
    )
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam("_nft", ethereum.Value.fromAddress(_nft))
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam("_tokenURI", ethereum.Value.fromString(_tokenURI))
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam("_artist", ethereum.Value.fromAddress(_artist))
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam(
      "_taxFee",
      ethereum.Value.fromUnsignedBigInt(_taxFee)
    )
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam(
      "_addressTaxFeeToken",
      ethereum.Value.fromAddress(_addressTaxFeeToken)
    )
  )
  boughtEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )

  return boughtEvent
}

export function createOfferdEvent(
  _itemId: BigInt,
  _nft: Address,
  _tokenId: BigInt,
  _tokenURI: string,
  _price: BigInt,
  _artist: Address,
  _taxFee: BigInt,
  _addressTaxFeeToken: Address,
  _seller: Address
): Offerd {
  let offerdEvent = changetype<Offerd>(newMockEvent())

  offerdEvent.parameters = new Array()

  offerdEvent.parameters.push(
    new ethereum.EventParam(
      "_itemId",
      ethereum.Value.fromUnsignedBigInt(_itemId)
    )
  )
  offerdEvent.parameters.push(
    new ethereum.EventParam("_nft", ethereum.Value.fromAddress(_nft))
  )
  offerdEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  offerdEvent.parameters.push(
    new ethereum.EventParam("_tokenURI", ethereum.Value.fromString(_tokenURI))
  )
  offerdEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  offerdEvent.parameters.push(
    new ethereum.EventParam("_artist", ethereum.Value.fromAddress(_artist))
  )
  offerdEvent.parameters.push(
    new ethereum.EventParam(
      "_taxFee",
      ethereum.Value.fromUnsignedBigInt(_taxFee)
    )
  )
  offerdEvent.parameters.push(
    new ethereum.EventParam(
      "_addressTaxFeeToken",
      ethereum.Value.fromAddress(_addressTaxFeeToken)
    )
  )
  offerdEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )

  return offerdEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
